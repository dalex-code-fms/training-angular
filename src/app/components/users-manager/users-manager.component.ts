import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.css'],
})
export class UsersManagerComponent implements OnInit {
  listOfUsers: any[] | undefined;
  error: string | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.apiService.getUsers().subscribe({
      next: (data) => (this.listOfUsers = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  public onCreateUser(): void {
    this.router.navigateByUrl('create-user');
  }

  public onModifyUser(id: number): void {
    this.router.navigate(['modify-user', id]);
  }

  public onDeleteUser(id: number): void {
    this.apiService.deleteUser(id).subscribe({
      next: () => this.getAllUsers(),
      error: (err) => console.log(err),
    });
  }
}
