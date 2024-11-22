import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-manager',
  templateUrl: './training-manager.component.html',
  styleUrls: ['./training-manager.component.css'],
})
export class TrainingManagerComponent implements OnInit {
  listTrainings: Training[] | undefined;
  error: string | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTrainings();
  }

  public getAllTrainings(): void {
    this.apiService.getTrainings().subscribe({
      next: (data) => (this.listTrainings = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  public onCreateTraining(): void {
    this.router.navigateByUrl('create-training');
  }

  public onDeleteTraining(id: number): void {
    this.apiService.deleteTraining(id).subscribe({
      next: () => this.getAllTrainings(),
      error: (err) => console.log(err),
    });
  }

  public onModifyTraining(id: number): void {
    this.router.navigate(['modify-training', id]);
  }
}
