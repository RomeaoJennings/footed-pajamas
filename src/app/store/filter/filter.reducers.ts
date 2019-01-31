import { Filter } from 'src/app/shared/models/filter.model';
import { FilterFactory } from 'src/app/shared/models/filter-factory.model';
import * as FilterActions from './filter.actions';

export interface State {
  filters: FilterFactory[];
  appliedFilters: Filter[];
  areLoading: boolean;
  areLoaded: boolean;
  error: string;
}

const initialState: State = {
  filters: [],
  appliedFilters: [],
  areLoading: false,
  areLoaded: false,
  error: null
};

export function filterReducer(
  state: State = initialState,
  action: FilterActions.FilterActions
) {
  switch (action.type) {
    case FilterActions.FETCH:
      return { ...state, areLoading: true };

    case FilterActions.FETCH_SUCCESS:
      return {
        ...state,
        areLoading: false,
        areLoaded: true,
        filters: action.payload.filters
      };

    case FilterActions.FETCH_ERROR:
      return { ...state, areLoading: false, error: action.payload.error };

    default:
      return state;
  }
}
