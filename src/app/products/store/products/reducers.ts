import { Product } from 'src/app/shared/models/product.model';
import { AppState } from 'src/app/store/app.reducers';
import * as ProductActions from './actions';

export interface FeatureState {
  products: Product[];
  areLoaded: boolean;
  areLoading: boolean;
  error: string;
}

const initialState: FeatureState = {
  products: [],
  areLoaded: false,
  areLoading: false,
  error: null
};

export interface State extends AppState {
  products: FeatureState;
}

export function productReducer(
  state: FeatureState = initialState,
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
