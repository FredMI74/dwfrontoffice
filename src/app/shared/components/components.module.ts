import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent, AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent,InputComponent ],
})
export class ComponentsModule { }
