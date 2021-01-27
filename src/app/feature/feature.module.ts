import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
     LoginComponent,
     HomeComponent,
     HeaderComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ]
})
export class FeatureModule { }
