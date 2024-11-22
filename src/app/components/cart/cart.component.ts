import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Training[] = [];
  total: number = 0;
  showLoginMessage = false;

  constructor(
    public authService: AuthenticateService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(training: Training): void {
    this.cartService.remove(training);
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  onAddOrder(): void {
    this.showLoginMessage = true;

    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('customer');
    }
  }
}
