import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class FeatureModule { }
