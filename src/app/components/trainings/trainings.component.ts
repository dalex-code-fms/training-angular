import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  listTrainings: Training[] | undefined;
  error: string | null = null;

  constructor(
    private cartService: CartService,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getAllTrainings();
  }

  onAddToCart(training: Training): void {
    if (training.quantity > 0 && training.quantity <= 10) {
      this.cartService.addTraining(training);
      this.router.navigateByUrl('cart');
    }
  }

  getAllTrainings(): void {
    this.apiService.getTrainings().subscribe({
      next: (data) => (this.listTrainings = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }
}
