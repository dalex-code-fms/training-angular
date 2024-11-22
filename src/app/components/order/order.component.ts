import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  customer: Customer = new Customer('', '', '', '', '');
  cart: Training[] = [];
  total: number = 0;
  showModal = false;
  modalTitle = 'Commande Confirmée';
  modalContent =
    'Votre commande à bien été prise en compte, merci de nous avoir donner : ';
  modalData: any;

  constructor(public cartService: CartService, public router: Router) {}

  ngOnInit(): void {
    this.customer = this.cartService.getCustomer();
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  onValidate(): void {
    this.showModal = true;
    this.modalData = this.cartService.getTotal();
    console.log('validate');
  }

  onModalClose(): void {
    this.showModal = false;
    this.cartService.clearStorage();
    this.router.navigateByUrl('');
    console.log('Back to the future !');
  }
}
