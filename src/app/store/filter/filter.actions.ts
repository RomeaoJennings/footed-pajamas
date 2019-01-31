import { Action } from '@ngrx/store';

import { FilterFactory } from 'src/app/shared/models/filter-factory.model';
import { Filter } from 'src/app/shared/models/filter.model';

export const FETCH = '[Filters] FETCH';
export const FETCH_SUCCESS = '[Filters] FETCH_SUCCESS';
export const FETCH_ERROR = '[Filters] FETCH_ERROR';
export const APPLY = '[Filters] APPLY';

export class FetchFilters implements Action {
  readonly type = FETCH;
}

export class FetchFiltersSuccess implements Action {
  readonly type = FETCH_SUCCESS;
  constructor(public payload: { filters: FilterFactory[] }) {}
}

export class FetchFiltersError implements Action {
  readonly type = FETCH_ERROR;
  constructor(public payload: { error: string }) {}
}

export class ApplyFilter implements Action {
  readonly type = APPLY;
  constructor(public payload: { appliedFilter: Filter }) {}
}

export type FilterActions =
  | FetchFilters
  | FetchFiltersSuccess
  | FetchFiltersError
  | ApplyFilter;
