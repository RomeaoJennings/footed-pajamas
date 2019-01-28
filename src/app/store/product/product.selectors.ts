import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';

import { AppState } from '../app.reducers';
import { Product } from 'src/app/shared/models/product.model';
import { selectRouterParams } from '../router/router.selectors';

export const selectAllProducts = (state: AppState) => state.products.products;

export const selectProductsByCategory = createSelector(
  selectAllProducts,
  selectRouterParams,
  (products: Product[], params: Params) =>
    products.filter(prod => prod.category === params.category)
);
