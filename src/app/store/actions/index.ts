import { Action } from '@ngrx/store';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REDUCE_FROM_CART = 'REDUCE_FROM_CART';
export const SORT_ALPHABETICALLY = 'SORT_ALPHABETICALLY';
export const FILTER = 'FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: any) {}
}

export class ReduceFromCart implements Action {
  readonly type = REDUCE_FROM_CART;
  constructor(public payload: any) {}
}

export class SortAlphabetically implements Action {
  readonly type = SORT_ALPHABETICALLY;
  constructor() {}
}

export class Filter implements Action {
  readonly type = FILTER;
  constructor(public payload: string) {}
}

export class ResetFilter implements Action {
  readonly type = RESET_FILTER;
  constructor() {}
}

export type All =
  | AddToCart
  | ReduceFromCart
  | SortAlphabetically
  | Filter
  | ResetFilter;
