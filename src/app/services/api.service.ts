import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from '../model/training.model';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getTrainings() {
    return this.http.get<Training[]>(`${environment.host}/trainings`);
  }

  public getTraining(id: number) {
    return this.http.get<Training>(`${environment.host}/trainings/${id}`);
  }

  public createTraining(training: Training): Observable<Training> {
    return this.http.post<Training>(`${environment.host}/trainings`, training);
  }

  public deleteTraining(id: number) {
    return this.http.delete<any>(`${environment.host}/trainings/${id}`);
  }

  public modifyTraining(id: number, form: any) {
    return this.http.put<any>(`${environment.host}/trainings/${id}`, form);
  }

  public getUsers() {
    return this.http.get<any[]>(`${environment.host}/users`);
  }

  public getUser(id: number) {
    return this.http.get<any>(`${environment.host}/users/${id}`);
  }

  public createUser(training: User): Observable<User> {
    return this.http.post<User>(`${environment.host}/users`, training);
  }

  public deleteUser(id: number) {
    return this.http.delete<any>(`${environment.host}/users/${id}`);
  }

  public modifyUser(id: number, form: any) {
    return this.http.put<any>(`${environment.host}/users/${id}`, form);
  }
}
