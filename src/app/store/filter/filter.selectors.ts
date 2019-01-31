import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { selectProductsByCategory } from '../product/product.selectors';
import {
  getApplicableFilters,
  projectFiltersOnProducts
} from './filter.projectors';

export const selectFeature = (appState: AppState) => appState.filters;

export const selectFilterFactories = (appState: AppState) =>
  selectFeature(appState).filterFactories;

export const selectFiltersAreLoading = (appState: AppState) =>
  selectFeature(appState).areLoading;

export const selectFiltersAreLoaded = (appState: AppState) =>
  selectFeature(appState).areLoaded;

export const selectActiveFilters = (appState: AppState) =>
  selectFeature(appState).activeFilters;

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
