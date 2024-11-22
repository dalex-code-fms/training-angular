import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modules';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { Page404Component } from './components/page404/page404.component';
import { OrderComponent } from './components/order/order.component';
import { ModalOrderComponent } from './components/order/modal-order/modal-order.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { TrainingManagerComponent } from './components/training-manager/training-manager.component';
import { UsersManagerComponent } from './components/users-manager/users-manager.component';
import { CreateTrainingComponent } from './components/training-manager/create-training/create-training.component';
import { ModifyTrainingComponent } from './components/training-manager/modify-training/modify-training.component';
import { CreateUserComponent } from './components/users-manager/create-user/create-user.component';
import { ModifyUserComponent } from './components/users-manager/modify-user/modify-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    CustomerComponent,
    Page404Component,
    OrderComponent,
    ModalOrderComponent,
    AdminComponent,
    LoginComponent,
    TrainingManagerComponent,
    UsersManagerComponent,
    CreateTrainingComponent,
    ModifyTrainingComponent,
    CreateUserComponent,
    ModifyUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
