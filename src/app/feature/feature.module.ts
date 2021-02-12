import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListWishesComponent } from './wishes/list-wishes/list-wishes.component';
import { ProductComponent } from './product/product.component';
import { DepartamentComponent } from './departament/departament.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    DepartamentComponent,
    ListWishesComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    DepartamentComponent,
  ],
})
export class FeatureModule {}
