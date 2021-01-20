import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class FeatureModule { }
