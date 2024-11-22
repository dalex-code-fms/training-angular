import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { Page404Component } from './components/page404/page404.component';
import { OrderComponent } from './components/order/order.component';
import { AdminGuard } from './components/admin/admin.guard';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { TrainingManagerComponent } from './components/training-manager/training-manager.component';
import { UsersManagerComponent } from './components/users-manager/users-manager.component';
import { CreateTrainingComponent } from './components/training-manager/create-training/create-training.component';
import { ModifyTrainingComponent } from './components/training-manager/modify-training/modify-training.component';
import { CreateUserComponent } from './components/users-manager/create-user/create-user.component';
import { ModifyUserComponent } from './components/users-manager/modify-user/modify-user.component';

const routes: Routes = [
  { path: 'trainings', component: TrainingsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  {
    path: 'training-manager',
    component: TrainingManagerComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'create-training',
    component: CreateTrainingComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'modify-training/:id',
    component: ModifyTrainingComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'users-manager',
    component: UsersManagerComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'modify-user/:id',
    component: ModifyUserComponent,
    canActivate: [AdminGuard],
  },
  { path: '404', component: Page404Component },
  { path: '', redirectTo: 'trainings', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
