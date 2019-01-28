import { Product } from 'src/app/shared/models/product.model';
import * as ProductActions from './product.actions';

export interface State {
  products: Product[];
  isLoaded: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: State = {
  products: [],
  isLoaded: false,
  isLoading: false,
  error: null
};

export function productReducer(
  state: State = initialState,
  action: ProductActions.ProductActions
) {
  switch (action.type) {
    case ProductActions.FETCH:
      return { ...state, isLoading: true };

    case ProductActions.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        isLoaded: true
      };

    case ProductActions.FETCH_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };

    default:
      return state;
  }
}
