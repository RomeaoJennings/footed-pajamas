import { Product } from './product.model';

export enum FilterType {
  ValueInField = 'valueInField',
  ValueInArray = 'valueInArray',
  Feature = 'feature'
}

export class ProductFilter {
  constructor(
    public filterType: FilterType,
    public target: string,
    public displayString: string
  ) {}

  static getValueCounts(
    products: Product[],
    field: string,
    values: string[]
  ): Map<string, number> {
    const result = new Map<string, number>();
    for (const value of values) {
      result.set(value, 0);
    }
    if (products.length === 0 || products[0][field] === undefined) {
      return result;
    }
    const fieldIsArray = Array.isArray(products[0][field]);
    for (const product of products) {
      if (fieldIsArray) {
        for (const val of product[field]) {
          result.set(val, result.get(val) + 1);
        }
      } else {
        result.set(product[field], result.get(product[field] + 1));
      }
    }
    return result;
  }

  static getValuesFromField(products: Product[], field: string): string[] {
    const result = new Map<string, string>();

    if (products.length === 0 || products[0][field] === undefined) {
      return [];
    }
    for (const product of products) {
      if (Array.isArray(products[0][field])) {
        for (const val of product[field]) {
          result.set(val, val);
        }
      } else {
        result.set(product[field], product[field]);
      }
    }
    return [...result].map(value => value[0]);
  }

  isMatch(product: Product, value: string | boolean): boolean {
    try {
      switch (this.filterType) {
        case FilterType.ValueInField:
          return product[this.target] === value;

        case FilterType.ValueInArray:
          const match =
            product[this.target].findIndex(item => item === value) !== -1;
          return match;

        case FilterType.Feature:
          const hasFeature =
            product.features.findIndex(feature => feature === this.target) !==
            -1;
          return hasFeature === value;
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  }
}
