import { Cart } from './callouts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ParallaxDirective } from './parallax.directive';
import {CartService} from './cart.service'



import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryPreviewsComponent } from './category-previews/category-previews.component';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductOverviewsComponent } from './product-overviews/product-overviews.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    CategoryPreviewsComponent,
    ProductListsComponent,
    ProductOverviewsComponent,
    ShoppingCartsComponent,
    FooterComponent,
    LandingComponent,
    ParallaxDirective,
    NavComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
