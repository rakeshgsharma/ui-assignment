import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart = [];
  constructor(
    public cartService: CartService,
    public appStore: Store<{ globalState }>
  ) {}

  ngOnInit(): void {
    this.appStore.select('globalState').subscribe((data) => {
      this.cart = data.cart;
    });
  }
}
