import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from './router/route-serializer';

export interface AppState {
  router: RouterReducerState<fromRouter.RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};
