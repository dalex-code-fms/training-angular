import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-training',
  templateUrl: './modify-training.component.html',
  styleUrls: ['./modify-training.component.css'],
})
export class ModifyTrainingComponent implements OnInit {
  updateForm: FormGroup;
  trainingId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.updateForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => this.getTraining(parseInt(params['id'])),
      error: (err) => console.log(err),
    });
  }

  public getTraining(id: number): void {
    this.trainingId = id;
    this.apiService.getTraining(id).subscribe({
      next: (data) => {
        this.updateForm = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name, [Validators.required]),
          description: new FormControl(data.description, [Validators.required]),
          price: new FormControl(data.price, [Validators.required]),
          quantity: new FormControl(data.quantity),
        });
      },
      error: (err) => console.log(err),
    });
  }

  public onSubmit(form: FormGroup) {
    this.apiService.modifyTraining(this.trainingId, form.value).subscribe({
      next: () => {
        this.router.navigateByUrl('training-manager');
        console.log('Formation à bien été modifié');
      },
    });
  }
}
