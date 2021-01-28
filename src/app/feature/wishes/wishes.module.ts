import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ComponentsModule } from '@components/components.module';
import { ListWishesComponent } from './list-wishes/list-wishes.component';
import { AddOfferComponent } from '@feature/offers/add-offer/add-offer.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListWishesComponent
  }
];


@NgModule({
  declarations: [
    AddOfferComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class WishesModule { }
