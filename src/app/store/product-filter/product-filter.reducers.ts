import { ProductFilter } from 'src/app/shared/models/product-filter.model';
import * as FilterActions from './product-filter.actions';

export interface State {
  filters: ProductFilter[];
  loading: boolean;
  error: string;
}

const initialState: State = {
  filters: [],
  loading: false,
  error: null
};

export function filterReducer(
  state: State = initialState,
  action: FilterActions.FilterActions
) {
  switch (action.type) {
    case FilterActions.FETCH:
      return { ...state, loading: true };

    case FilterActions.FETCH_SUCCESS:
      return { ...state, loading: false, filters: action.payload.filters };

    case FilterActions.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}
