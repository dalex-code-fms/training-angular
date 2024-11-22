import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css'],
})
export class CreateTrainingComponent implements OnInit {
  createForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    if (this.createForm.valid) {
      const training = new Training(
        0,
        this.createForm.value.name,
        this.createForm.value.description,
        this.createForm.value.price,
        1
      );

      this.apiService.createTraining(training).subscribe({
        next: () => {
          console.log('Formation créer avec success.');
          this.router.navigateByUrl('training-manager');
        },
        error: (error) => console.log(error),
      });
    }
  }
}
