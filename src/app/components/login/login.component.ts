import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myLoginForm: FormGroup;
  listUsers: any[] = [];
  error: string | null = null;

  constructor(
    public authService: AuthenticateService,
    public apiService: ApiService,
    public router: Router
  ) {
    this.getAllUsers();
    this.myLoginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ]),
      password: new FormControl('', [Validators.minLength(3)]),
    });
  }

  ngOnInit(): void {}

  getAllUsers(): void {
    this.apiService.getUsers().subscribe({
      next: (data) => (this.listUsers = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      this.authService.verifyLogin(
        form.value.email,
        form.value.password,
        this.listUsers
      );
    }
  }
}
