import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addTraining(training: Training): void {
    const itemFromLocalStorage = localStorage.getItem(
      `Training : ${String(training.id)}`
    );

    if (itemFromLocalStorage !== null) {
      const parsedItem = JSON.parse(itemFromLocalStorage);

      parsedItem.quantity += training.quantity;

      localStorage.setItem(
        `Training : ${parsedItem.id}`,
        JSON.stringify(parsedItem)
      );
    } else {
      localStorage.setItem(
        `Training : ${String(training.id)}`,
        JSON.stringify(training)
      );
    }
  }

  getCart(): Training[] {
    const cart: Training[] = [];
    const keys = Object.keys(localStorage);

    keys
      .filter((key) => key.startsWith('Training'))
      .forEach((key) => {
        const item = localStorage.getItem(key);

        if (item !== null) cart.push(JSON.parse(item));
      });

    return cart;
  }

  remove(training: Training): void {
    localStorage.removeItem(`Training : ${String(training.id)}`);
  }

  getTotal(): number {
    let total = 0;
    const keys = Object.keys(localStorage);

    keys
      .filter((key) => key.startsWith('Training'))
      .forEach((key) => {
        const item = localStorage.getItem(key);

        if (item !== null) {
          const parsedItem = JSON.parse(item);

          total += parsedItem.price * parsedItem.quantity;
        }
      });
    return total;
  }

  saveCustomer(customer: Customer): void {
    localStorage.setItem('Customer', JSON.stringify(customer));
  }

  getCustomer(): Customer {
    const customerFromLocalStorage = localStorage.getItem('Customer');

    if (customerFromLocalStorage) {
      const parsedCustomer = JSON.parse(customerFromLocalStorage);

      return new Customer(
        parsedCustomer.name,
        parsedCustomer.firstName,
        parsedCustomer.address,
        parsedCustomer.phone,
        parsedCustomer.email
      );
    }
    return new Customer('', '', '', '', '');
  }

  clearStorage(): void {
    localStorage.clear();
  }
}
