import { Params } from '@angular/router';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import { selectRouterParams } from '../../../store/router/router.selectors';
import * as fromProducts from './reducers';

export const selectFeature = createFeatureSelector<fromProducts.State>(
  'products'
);

export const selectAllProducts = createSelector(
  selectFeature,
  feature => feature.products
);

export const selectProductsAreLoaded = createSelector(
  selectFeature,
  feature => feature.areLoaded
);

export const selectProductsAreLoading = createSelector(
  selectFeature,
  feature => feature.areLoading
);

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
