import * as fromProducts from './product/product.reducers';
import * as fromRouter from './router/route-serializer';
import * as fromFilters from './filter/filter.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  products: fromProducts.State;
  filters: fromFilters.State;
  router: RouterReducerState<fromRouter.RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.productReducer,
  filters: fromFilters.filterReducer,
  router: routerReducer
};
