import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectProductsByCategory } from '../products/selectors';
import { getApplicableFilters, projectFiltersOnProducts } from './projectors';
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
  projectFiltersOnProducts
);

export const selectApplicableFilters = createSelector(
  selectFilteredProductsByCategory,
  selectFilterFactories,
  getApplicableFilters
);
