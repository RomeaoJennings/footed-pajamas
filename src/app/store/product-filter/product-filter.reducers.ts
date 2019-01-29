import { ProductFilter } from 'src/app/shared/models/product-filter.model';
import * as FilterActions from './product-filter.actions';

export interface State {
  filters: ProductFilter[];
  areLoading: boolean;
  areLoaded: boolean;
  error: string;
}

const initialState: State = {
  filters: [],
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
