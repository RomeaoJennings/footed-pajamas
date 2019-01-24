import { Product } from 'src/app/shared/product.model';
import * as ProductActions from './product.actions';

export interface State {
  products: Product[];
  loading: boolean;
  error: string;
}

const initialState: State = {
  products: [],
  loading: false,
  error: null
};

export function productReducer(
  state: State = initialState,
  action: ProductActions.ProductActions
) {
  switch (action.type) {
    case ProductActions.FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ProductActions.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload.products
      };

    case ProductActions.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };

    default:
      return state;
  }
}
