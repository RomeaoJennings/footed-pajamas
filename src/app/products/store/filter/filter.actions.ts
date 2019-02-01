import { Action } from '@ngrx/store';
import { FilterFactory } from 'src/app/shared/models/filter-factory.model';
import { Filter } from 'src/app/shared/models/filter.model';

export const FETCH_FACTORIES = '[Filters] FETCH_FILTER_FACTORIES';
export const FETCH_FACTORIES_SUCCESS =
  '[Filters] FETCH_FILTER_FACTORIES_SUCCESS';
export const FETCH_FACTORIES_ERROR = '[Filters] FETCH_FILTER_FACTORIES_ERROR';
export const ADD_ACTIVE = '[Filters] ADD_ACTIVE_FILTER';
export const REMOVE_ACTIVE = '[Filters] REMOVE_ACTIVE_FILTER';
export const CLEAR_ACTIVE = '[Filters] CLEAR_ACTIVE_FILTERS';

export class FetchFactories implements Action {
  readonly type = FETCH_FACTORIES;
}

export class FetchFactoriesSuccess implements Action {
  readonly type = FETCH_FACTORIES_SUCCESS;
  constructor(public payload: { factories: FilterFactory[] }) {}
}

export class FetchFactoriesError implements Action {
  readonly type = FETCH_FACTORIES_ERROR;
  constructor(public payload: { error: string }) {}
}

export class AddActiveFilter implements Action {
  readonly type = ADD_ACTIVE;
  constructor(public payload: { activeFilter: Filter }) {}
}

export class ClearActiveFilters implements Action {
  readonly type = CLEAR_ACTIVE;
}

export class RemoveActiveFilter implements Action {
  readonly type = REMOVE_ACTIVE;
  constructor(public payload: { index: number }) {}
}

export type FilterActions =
  | FetchFactories
  | FetchFactoriesSuccess
  | FetchFactoriesError
  | AddActiveFilter
  | ClearActiveFilters
  | RemoveActiveFilter;
