import * as fromProducts from './product/product.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  products: fromProducts.State;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.productReducer
};
