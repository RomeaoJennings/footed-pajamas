import { Product } from 'src/app/shared/models/product.model';
import * as ProductActions from './product.actions';

export interface ProductGroup {
  loading: boolean;
  error: string;
  products: Product[];
}
function getEmptyProductGroup(): ProductGroup {
  return {
    loading: false,
    error: null,
    products: []
  };
}

export interface State {
  adult: ProductGroup;
  kid: ProductGroup;
  toddler: ProductGroup;
  infant: ProductGroup;
  pet: ProductGroup;
}

const initialState: State = {
  adult: getEmptyProductGroup(),
  kid: getEmptyProductGroup(),
  toddler: getEmptyProductGroup(),
  infant: getEmptyProductGroup(),
  pet: getEmptyProductGroup()
};

export function productReducer(
  state: State = initialState,
  action: ProductActions.ProductActions
) {
  switch (action.type) {
    case ProductActions.GET_PRODUCTS:
      let newState = { ...state };
      newState[action.payload.category].loading = true;
      newState[action.payload.category].error = null;
      return newState;

    case ProductActions.RECEIVE_PRODUCTS:
      newState = { ...state };
      newState[action.payload.category].loading = false;
      newState[action.payload.category].error = null;
      newState[action.payload.category].products = action.payload.products;
      return newState;

    case ProductActions.ERROR_RECEIVE_PRODUCTS:
      newState = { ...state };
      newState[action.payload.category].loading = false;
      newState[action.payload.category].error = null;
      return newState;

    default:
      return state;
  }
}
