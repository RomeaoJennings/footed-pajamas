import * as fromProducts from './product/product.reducers';
import * as fromRouter from './router/route-serializer';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  products: fromProducts.State;
  router: RouterReducerState<fromRouter.RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.productReducer,
  router: routerReducer
};
