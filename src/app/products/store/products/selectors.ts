import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import * as RouterSelectors from '../../../store/router/router.selectors';
import * as fromProducts from './reducers';

export const selectFeature = createFeatureSelector<fromProducts.FeatureState>(
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
  RouterSelectors.selectCategory,
  (products: Product[], category: string) =>
    products.filter(prod => prod.category === category)
);

export const selectCurrentProduct = createSelector(
  selectAllProducts,
  RouterSelectors.selectProductId,
  (products: Product[], productId: string) =>
    products.find(product => product.id === productId)
);
