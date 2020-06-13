import { Store } from '@ngrx/store';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { onErrorResumeNext } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categoryList: string[];
  constructor(
    public cartService: CartService,
    public appStore: Store<{ globalState }>
  ) {}

  ngOnInit(): void {
    this.appStore
      .select('globalState')
      .subscribe((data) => {
        const categoryArray = data.cars.map((cars) => cars.category);
        this.categoryList = categoryArray.filter(
          (category, index) => categoryArray.indexOf(category) === index
        );
      })
      .unsubscribe();
  }

  sortAlphabetically() {
    this.cartService.sortAlphabetically();
  }

  setFilters(event) {
    if (event.target.value === 'All') {
      this.cartService.resetFilter();
    } else {
      this.cartService.filter(event.target.value);
    }
  }
}
