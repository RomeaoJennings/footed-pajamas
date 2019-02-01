import { FilterFactory } from 'src/app/shared/models/filter-factory.model';
import { Filter } from 'src/app/shared/models/filter.model';
import * as FilterActions from './filter.actions';

export interface State {
  filterFactories: FilterFactory[];
  activeFilters: Filter[];
  areLoading: boolean;
  areLoaded: boolean;
  error: string;
}

const initialState: State = {
  filterFactories: [],
  activeFilters: [],
  areLoading: false,
  areLoaded: false,
  error: null
};

export function filterReducer(
  state: State = initialState,
  action: FilterActions.FilterActions
) {
  switch (action.type) {
    case FilterActions.FETCH_FACTORIES:
      return { ...state, areLoading: true };

    case FilterActions.FETCH_FACTORIES_SUCCESS:
      return {
        ...state,
        areLoading: false,
        areLoaded: true,
        filterFactories: action.payload.factories
      };

    case FilterActions.FETCH_FACTORIES_ERROR:
      return { ...state, areLoading: false, error: action.payload.error };

    case FilterActions.ADD_ACTIVE:
      let filters = state.activeFilters.slice();
      filters.push(action.payload.activeFilter);
      return { ...state, activeFilters: filters };

    case FilterActions.REMOVE_ACTIVE:
      filters = [...state.activeFilters];
      filters.splice(action.payload.index, 1);
      return { ...state, activeFilters: filters };

    case FilterActions.CLEAR_ACTIVE:
      return { ...state, activeFilters: [] };

    default:
      return state;
  }
}
