import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowusersComponent } from './showusers/showusers.component';

const routes: Routes = [
  {
    path: "register",
    component:RegistrationComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"showusers",
    component: ShowusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
