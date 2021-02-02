import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  @Input() id_wish: number = 0;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  closeModal()
  {
    console.log('fechando modal')
    this.modalService.dismissAll();
  }

}
