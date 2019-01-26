import { Action } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';

export const GET_PRODUCTS = '[Products] GET PRODUCTS';
export const RECEIVE_PRODUCTS = '[Products] RECEIVE PRODUCTS';
export const ERROR_RECEIVE_PRODUCTS = '[Products ERROR RECEIVE PRODUCTS]';

export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
  constructor(public payload: { category: string }) {}
}

export class ReceiveProducts implements Action {
  readonly type = RECEIVE_PRODUCTS;
  constructor(public payload: { products: Product[]; category: string }) {}
}

export class ErrorReceiveProducts implements Action {
  readonly type = ERROR_RECEIVE_PRODUCTS;
  constructor(public payload: { error: string; category: string }) {}
}

export type ProductActions =
  | GetProducts
  | ReceiveProducts
  | ErrorReceiveProducts;
