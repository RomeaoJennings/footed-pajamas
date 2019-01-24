import * as fromProducts from '../core/product-display/store/product.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  products: fromProducts.State;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.productReducer
};
