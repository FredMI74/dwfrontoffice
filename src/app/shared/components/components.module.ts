import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, ButtonComponent, AlertComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ButtonComponent, InputComponent, AlertComponent],
})
export class ComponentsModule {}
