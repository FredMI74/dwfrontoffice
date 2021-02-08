  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartamentComponent } from './departament.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

const routes: Routes = [
    {
        path: 'list',
        component: DepartamentComponent
    }
];

@NgModule({
    declarations: [
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        ComponentsModule,
        RouterModule.forChild(routes)
    ]
})

export class DepartamentModule {}