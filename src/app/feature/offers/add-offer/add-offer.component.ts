import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  @Input() id_wish: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
