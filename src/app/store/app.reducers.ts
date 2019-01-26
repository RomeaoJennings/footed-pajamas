import * as fromProducts from '../products/store/product.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  products: fromProducts.State;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.productReducer
};
