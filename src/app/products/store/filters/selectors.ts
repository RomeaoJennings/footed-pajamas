import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilterFactory } from 'src/app/shared/models/filter-factory.model';
import { FilterGroup } from 'src/app/shared/models/filter-group.model';
import { Filter } from 'src/app/shared/models/filter.model';
import { Product } from 'src/app/shared/models/product.model';
import { selectProductsByCategory } from '../products/selectors';
import * as fromFilter from './reducers';

export const selectFeature = createFeatureSelector<fromFilter.State>('filters');

export const selectFilterFactories = createSelector(
  selectFeature,
  feature => feature.filterFactories
);

export const selectFiltersAreLoading = createSelector(
  selectFeature,
  feature => feature.areLoading
);

export const selectFiltersAreLoaded = createSelector(
  selectFeature,
  feature => feature.areLoaded
);

export const selectActiveFilters = createSelector(
  selectFeature,
  feature => feature.activeFilters
);

export const selectFiltersAreLoadingOrLoaded = createSelector(
  selectFiltersAreLoading,
  selectFiltersAreLoaded,
  (loading: boolean, loaded: boolean) => loading || loaded
);

export const selectFilteredProductsByCategory = createSelector(
  selectProductsByCategory,
  selectActiveFilters,
  (products: Product[], filters: Filter[]) => {
    for (const filter of filters) {
      products = filter.filterProducts(products);
    }
    return products;
  }
);

export const selectApplicableFilters = createSelector(
  selectFilteredProductsByCategory,
  selectFilterFactories,
  (products: Product[], filterFactories: FilterFactory[]) => {
    const result: FilterGroup[] = [];
    for (const factory of filterFactories) {
      result.push(factory.generateFiltersFromProducts(products));
    }
    return result;
  }
);
