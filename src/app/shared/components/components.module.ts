import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent,InputComponent ],
})
export class ComponentsModule { }
