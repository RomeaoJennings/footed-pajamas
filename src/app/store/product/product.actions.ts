import { Action } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';

export const FETCH = '[Products] FETCH';
export const FETCH_SUCCESS = '[Products] FETCH_SUCCESS';
export const FETCH_ERROR = '[Products] FETCH_ERROR';

export class FetchProducts implements Action {
  readonly type = FETCH;
}

export class FetchProductsSuccess implements Action {
  readonly type = FETCH_SUCCESS;
  constructor(public payload: { products: Product[] }) {}
}

export class FetchProductsError implements Action {
  readonly type = FETCH_ERROR;
  constructor(public payload: { error: string }) {}
}

export type ProductActions =
  | FetchProducts
  | FetchProductsSuccess
  | FetchProductsError;
