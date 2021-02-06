import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { DepartamentComponent } from './feature/departament/departament.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'departament', component: DepartamentComponent}
]
@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
