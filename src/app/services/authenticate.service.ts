import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private loggedIn = false;

  constructor(public apiService: ApiService, public router: Router) {}

  verifyLogin(email: string, password: string, listUsers: any[]): void {
    const user = listUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user.role.includes('admin')) {
      this.loggedIn = true;
      localStorage.setItem('role', 'admin');
    } else {
      this.loggedIn = true;
      localStorage.setItem('role', 'user');
    }
  }

  isAdmin(): boolean {
    const userRole = localStorage.getItem('role');
    if (userRole === 'admin') return true;
    else return false; // à changer to false -- admin comp creation
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  onLogout(): void {
    this.loggedIn = false;
    localStorage.removeItem('role');
  }
}
