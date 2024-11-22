import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css'],
})
export class ModifyUserComponent implements OnInit {
  updateForm: FormGroup;
  userId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.updateForm = new FormGroup({
      id: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => this.getUser(parseInt(params['id'])),
      error: (err) => console.log(err),
    });
  }

  public getUser(id: number): void {
    this.userId = id;
    this.apiService.getUser(id).subscribe({
      next: (data) => {
        this.updateForm = new FormGroup({
          id: new FormControl(data.id),
          email: new FormControl(data.email, [Validators.required]),
          password: new FormControl(data.password, [Validators.required]),
          role: new FormControl(data.role, [Validators.required]),
        });
      },
      error: (err) => console.log(err),
    });
  }

  public onSubmit(form: FormGroup) {
    this.apiService.modifyUser(this.userId, form.value).subscribe({
      next: () => {
        this.router.navigateByUrl('users-manager');
        console.log('L"Utilisateur à bien été modifié');
      },
    });
  }
}
