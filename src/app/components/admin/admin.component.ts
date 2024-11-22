import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onAccessTrainingManager(): void {
    this.router.navigateByUrl('training-manager');
  }

  public onAccessUsersManager(): void {
    this.router.navigateByUrl('users-manager');
  }
}
