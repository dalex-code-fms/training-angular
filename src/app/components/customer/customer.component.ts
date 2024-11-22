import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  myForm: FormGroup;

  constructor(public cartService: CartService, public router: Router) {
    let customer = this.cartService.getCustomer();
    this.myForm = new FormGroup({
      name: new FormControl(customer.name, [
        Validators.required,
        Validators.pattern('^[a-zA-Zs]+$'),
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      firstName: new FormControl(customer.firstName, [
        Validators.required,
        Validators.pattern('^[a-zA-Zs]+$'),
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      address: new FormControl(customer.address, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
      ]),
      phone: new FormControl(customer.phone, [
        Validators.required,
        Validators.pattern('^(?:0|\\+33)[1-9]\\d{8}$'),
      ]),
      email: new FormControl(customer.email, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ]),
    });
  }

  ngOnInit(): void {}

  onSaveCustomer(form: FormGroup) {
    if (form.valid) {
      this.cartService.saveCustomer(
        new Customer(
          form.value.name,
          form.value.firstName,
          form.value.address,
          form.value.phone,
          form.value.email
        )
      );
      this.router.navigateByUrl('order');
    }
  }
}
