import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { OfferService } from '@feature/offers/offer.service'

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offerForm: FormGroup;
  mensagem : string = "";
  @Input() id_wish: number = 0;
 
  constructor(private modalService: NgbModal, private offerService: OfferService) {
    this.offerForm = new FormGroup({
      descricao: new FormControl(''),
      destaque: new FormControl(''),
      validade: new FormControl(''),
      url: new FormControl(''),
      valor: new FormControl(''),
    });
   }

  ngOnInit(): void {  }

  closeModal()
  {
    this.modalService.dismissAll();
  }

  onSubmit() {
    this.offerService.add_offer(
      this.id_wish, 
      this.offerForm.controls.validade?.value, 
      this.offerForm.controls.valor?.value, 
      this.offerForm.controls.url?.value, 
      this.offerForm.controls.descricao?.value, 
      this.offerForm.controls.destaque?.value
    ).subscribe((response) => {
      if (response.resultado.erro === false) {
        this.modalService.dismissAll();    
      } else
      {
        this.mensagem = response.resultado.mensagem;
      }
    });

  }
}
