import { FilterType } from './filter-type.model';
import { Product } from './product.model';

export class Filter {
  constructor(
    public field: string,
    public value: string | boolean,
    public type: FilterType,
    public count: number
  ) {}

  filterProducts(products: Product[]): Product[] {
    return products.filter(product => this.isMatch(product));
  }

  private isMatch(product: Product): boolean {
    try {
      switch (this.type) {
        case FilterType.ValueInField:
          return product[this.field] === this.value;

        case FilterType.ValueInArray:
          const match =
            product[this.field].findIndex(item => item === this.value) !== -1;
          return match;

        case FilterType.Feature:
          const hasFeature =
            product.features.findIndex(feature => feature === this.field) !==
            -1;
          return hasFeature === this.value;
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  }
}
