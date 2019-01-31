import { FilterFactory } from 'src/app/shared/models/filter-factory.model';
import { Filter } from 'src/app/shared/models/filter.model';
import { Product } from 'src/app/shared/models/product.model';
import { FilterGroup } from 'src/app/shared/models/filter-group.model';

export function projectFiltersOnProducts(
  products: Product[],
  filters: Filter[]
): Product[] {
  let result = [...products];
  for (const filter of filters) {
    result = filter.filterProducts(result);
  }
  return result;
}

export function getApplicableFilters(
  products: Product[],
  filterFactories: FilterFactory[]
): FilterGroup[] {
  const result: FilterGroup[] = [];
  for (const factory of filterFactories) {
    result.push(factory.generateFiltersFromProducts(products));
  }
  return result;
}
