import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CitySearchComponent } from './city-search/city-search.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [InputComponent, ButtonComponent, AlertComponent, CitySearchComponent],
  imports: [CommonModule, ReactiveFormsModule, AutocompleteLibModule],
  exports: [ButtonComponent, InputComponent, AlertComponent, CitySearchComponent],
})
export class ComponentsModule {}
