import { AppState } from '../app.reducers';
import { createSelector } from '@ngrx/store';

export const selectFilters = (appState: AppState) => appState.filters.filters;
export const selectFiltersAreLoading = (appState: AppState) =>
  appState.filters.areLoading;
export const selectFiltersAreLoaded = (appState: AppState) =>
  appState.filters.areLoaded;

export const selectFiltersAreLoadingOrLoaded = createSelector(
  selectFiltersAreLoading,
  selectFiltersAreLoaded,
  (loading: boolean, loaded: boolean) => loading || loaded
);
