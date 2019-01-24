import { Action } from '@ngrx/store';
import { Product } from 'src/app/shared/product.model';

export const FETCH_PRODUCTS = 'FETCH PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export class Fetch implements Action {
  readonly type = FETCH_PRODUCTS;
}

export class FetchSuccess implements Action {
  readonly type = FETCH_PRODUCTS_SUCCESS;
  constructor(public payload: { products: Product[] }) {}
}

export class FetchError implements Action {
  readonly type = FETCH_PRODUCTS_ERROR;
  constructor(public payload: { error: string }) {}
}

export type ProductActions = Fetch | FetchSuccess | FetchError;
