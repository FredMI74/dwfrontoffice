import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { HeaderComponent } from './feature/header/header.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'login', component: LoginComponent}
]
@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
