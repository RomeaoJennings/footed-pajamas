import { Product } from 'src/app/shared/models/product.model';
import * as ProductActions from './actions';

export interface State {
  products: Product[];
  areLoaded: boolean;
  areLoading: boolean;
  error: string;
}

const initialState: State = {
  products: [],
  areLoaded: false,
  areLoading: false,
  error: null
};

export function productReducer(
  state: State = initialState,
  action: ProductActions.ProductActions
) {
  switch (action.type) {
    case ProductActions.FETCH:
      return { ...state, areLoading: true };

    case ProductActions.FETCH_SUCCESS:
      return {
        ...state,
        areLoading: false,
        products: action.payload.products,
        areLoaded: true
      };

    case ProductActions.FETCH_ERROR:
      return { ...state, areLoading: false, error: action.payload.error };

    default:
      return state;
  }
}
