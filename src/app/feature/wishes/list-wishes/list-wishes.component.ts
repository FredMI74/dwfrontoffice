import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddOfferComponent } from '@feature/offers/add-offer/add-offer.component';

@Component({
  selector: 'page-list-wishes',
  templateUrl: './list-wishes.component.html',
  styleUrls: ['./list-wishes.component.css']
})
export class ListWishesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openModal(id_wish: number) {
    const modalRef = this.modalService.open(AddOfferComponent);
   modalRef.componentInstance.id_wish = id_wish;
  }

  ngOnInit(): void {
  }

}
