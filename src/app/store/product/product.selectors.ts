import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';

import { AppState } from '../app.reducers';
import { Product } from 'src/app/shared/models/product.model';
import { selectRouterParams } from '../router/router.selectors';

export const selectAllProducts = (state: AppState) => state.products.products;
export const selectProductsAreLoaded = (state: AppState) =>
  state.products.areLoaded;
export const selectProductsAreLoading = (state: AppState) =>
  state.products.areLoading;

export const selectProductsAreLoadingOrLoaded = createSelector(
  selectProductsAreLoaded,
  selectProductsAreLoading,
  (loading: boolean, loaded: boolean) => loading || loaded
);

export const selectProductsByCategory = createSelector(
  selectAllProducts,
  selectRouterParams,
  (products: Product[], params: Params) =>
    products.filter(prod => prod.category === params.category)
);
