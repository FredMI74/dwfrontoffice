import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { ProductComponent } from './feature/product/product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'wishes', loadChildren: () => import('@feature/wishes/wishes.module').then(m => m.WishesModule)},
  {path: 'consultar-produtos', component: ProductComponent},
]
@NgModule({
  imports: [
RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
