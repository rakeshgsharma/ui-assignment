import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { StoreModule } from '@ngrx/store';
import reducers from './store/reducers';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CardComponent, CartComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ globalState: reducers }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
