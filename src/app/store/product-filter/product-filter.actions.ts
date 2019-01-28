import { Action } from '@ngrx/store';

import { ProductFilter } from 'src/app/shared/models/product-filter.model';

export const FETCH = '[Filters] FETCH';
export const FETCH_SUCCESS = '[Filters] FETCH_SUCCESS';
export const FETCH_ERROR = '[Filters] FETCH_ERROR';

export class FetchFilters implements Action {
  readonly type = FETCH;
}

export class FetchFiltersSuccess implements Action {
  readonly type = FETCH_SUCCESS;
  constructor(public payload: { filters: ProductFilter[] }) {}
}

export class FetchFiltersError implements Action {
  readonly type = FETCH_ERROR;
  constructor(public payload: { error: string }) {}
}

export type FilterActions =
  | FetchFilters
  | FetchFiltersSuccess
  | FetchFiltersError;
