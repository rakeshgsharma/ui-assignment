import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  carDetails = [];
  constructor(public appStore: Store<{ globalState }>) {
    this.appStore.select('globalState').subscribe((data) => {
      console.log('data', data);
      this.carDetails = data.cars;
    });
  }
}
