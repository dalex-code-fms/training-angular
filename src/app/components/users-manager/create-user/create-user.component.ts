import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  createForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
    this.createForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    if (this.createForm.valid) {
      const user = new User(
        0,
        this.createForm.value.email,
        this.createForm.value.password,
        this.createForm.value.role
      );

      this.apiService.createUser(user).subscribe({
        next: () => {
          console.log('Utilisateur crée avec success');
          this.router.navigateByUrl('users-manager');
        },
        error: (error) => console.log(error),
      });
    }
  }
}
