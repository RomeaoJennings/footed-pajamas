import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from './route-serializer';

export const selectFeature = createFeatureSelector<
  RouterReducerState<fromRouter.RouterStateUrl>
>('router');

export const selectRouterParams = createSelector(
  selectFeature,
  feature => feature.state.params
);

export const selectProductId = createSelector(
  selectRouterParams,
  params => params.productId
);

export const selectCategory = createSelector(
  selectRouterParams,
  params => params.category
);
