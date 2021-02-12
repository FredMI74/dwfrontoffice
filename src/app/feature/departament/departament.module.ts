import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
    declarations: [
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        ComponentsModule
    ]
})

export class DepartamentModule {}