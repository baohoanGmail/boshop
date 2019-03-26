import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cart = [];
  item = [];

  sliderConfig = {

  }
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.item = this.cartService.getProducts();
  }

  addTocart(product) {
    this.cartService.addProduct(product);
  }

  openCart() {
    this.router.navigate(['cart']);
  }
}
