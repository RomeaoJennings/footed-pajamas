import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { selectProductsByCategory } from '../product/product.selectors';
import {
  getApplicableFilters,
  projectFiltersOnProducts
} from './filter.projectors';

export const selectFeature = (appState: AppState) => appState.filters;

export const selectFilterFactories = (appState: AppState) =>
  selectFeature(appState).filters;

export const selectFiltersAreLoading = (appState: AppState) =>
  selectFeature(appState).areLoading;

export const selectFiltersAreLoaded = (appState: AppState) =>
  selectFeature(appState).areLoaded;

export const selectAppliedFilters = (appState: AppState) =>
  selectFeature(appState).appliedFilters;

export const selectFiltersAreLoadingOrLoaded = createSelector(
  selectFiltersAreLoading,
  selectFiltersAreLoaded,
  (loading: boolean, loaded: boolean) => loading || loaded
);

export const selectFilteredProductsByCategory = createSelector(
  selectProductsByCategory,
  selectAppliedFilters,
  projectFiltersOnProducts
);

export const selectApplicableFilters = createSelector(
  selectProductsByCategory,
  selectFilterFactories,
  getApplicableFilters
);
