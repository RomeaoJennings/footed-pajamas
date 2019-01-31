import { FilterGroup } from './filter-group.model';
import { FilterType } from './filter-type.model';
import { Filter } from './filter.model';
import { Product } from './product.model';

export class FilterFactory {
  constructor(
    public filterType: FilterType,
    public target: string,
    public displayName: string
  ) {}

  private getValuesFromField(products: Product[]): string[] {
    const result = new Map<string, string>();

    if (products.length === 0 || products[0][this.target] === undefined) {
      return [];
    }
    for (const product of products) {
      if (Array.isArray(products[0][this.target])) {
        for (const val of product[this.target]) {
          result.set(val, val);
        }
      } else {
        result.set(product[this.target], product[this.target]);
      }
    }
    return [...result].map(value => value[0]);
  }

  private getValueCounts(
    products: Product[],
    values: string[]
  ): Map<string, number> {
    const result = new Map<string, number>();
    for (const value of values) {
      result.set(value, 0);
    }
    if (products.length === 0 || products[0][this.target] === undefined) {
      return result;
    }
    const fieldIsArray = Array.isArray(products[0][this.target]);
    for (const product of products) {
      if (fieldIsArray) {
        for (const val of product[this.target]) {
          result.set(val, result.get(val) + 1);
        }
      } else {
        result.set(product[this.target], result.get(product[this.target]) + 1);
      }
    }
    return result;
  }

  generateFiltersFromProducts(products: Product[]): FilterGroup {
    const filters: Filter[] = [];
    const fieldVals = this.getValuesFromField(products);
    const counts = this.getValueCounts(products, fieldVals);

    for (const item of counts) {
      if (item[1] !== products.length) {
        // Only add filter if it would filter at least 1 product
        filters.push(
          new Filter(this.target, item[0], this.filterType, item[1])
        );
      }
    }
    filters.sort((a: Filter, b: Filter) => b.count - a.count);
    return { name: this.displayName, filters };
  }
}
