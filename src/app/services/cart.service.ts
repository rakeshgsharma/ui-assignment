import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  AddToCart,
  ReduceFromCart,
  SortAlphabetically,
  Filter,
  ResetFilter,
} from './../store/actions';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(public appStore: Store) {}

  public addToCart(car) {
    this.appStore.dispatch(new AddToCart(car));
  }

  public reduceFromCart(car) {
    this.appStore.dispatch(new ReduceFromCart(car));
  }

  public sortAlphabetically() {
    this.appStore.dispatch(new SortAlphabetically());
  }
  public filter(filter) {
    this.appStore.dispatch(new Filter(filter));
  }
  public resetFilter() {
    this.appStore.dispatch(new ResetFilter());
  }
}
