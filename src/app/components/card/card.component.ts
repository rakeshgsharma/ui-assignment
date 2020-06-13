import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() car: any;
  carCounter = 0;
  originalCar: any;
  constructor(
    public cartService: CartService,
    public appStore: Store<{ globalState }>
  ) {}

  ngOnInit(): void {
    this.originalCar = { ...this.car };
    this.appStore.select('globalState').subscribe((data) => {
      const carFromCart = data.cart.filter(
        (cartCar) => cartCar.id === this.car.id
      )[0];
      if (carFromCart) {
        this.car = carFromCart;
      } else {
        this.car = this.originalCar;
      }
    });
  }

  addToCart(car) {
    this.updateCounter(true);
    this.cartService.addToCart(car);
  }
  reduceFromCart(car) {
    this.updateCounter(false);
    this.cartService.reduceFromCart(car);
  }

  updateCounter(isAdd) {
    isAdd ? ++this.carCounter : --this.carCounter;
  }
}
