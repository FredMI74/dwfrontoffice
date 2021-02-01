import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddOfferComponent } from '@feature/offers/add-offer/add-offer.component';
import { FormControl, FormGroup} from '@angular/forms';
import { WhishesService } from '../wishes.service';

@Component({
  selector: 'page-list-wishes',
  templateUrl: './list-wishes.component.html',
  styleUrls: ['./list-wishes.component.css']
})
export class ListWishesComponent implements OnInit {
  
  listForm: FormGroup;

  headElements = ['Cód', 'Icone', 'Descrição', 'Cidade','Tipo Prod.', 'Ofertas Vál.','Ação'];

  elements: any;


  constructor(private modalService: NgbModal, private wishesService :  WhishesService) {

    this.listForm = new FormGroup({
      descricao: new FormControl('')
    });
   }

  openModal(id_wish: string) {
    const modalRef = this.modalService.open(AddOfferComponent);
   modalRef.componentInstance.id_wish = id_wish;
  }

  ngOnInit(): void { }

  onSubmit() {
    console.log('data = ', this.listForm.controls.descricao?.value );
    
    this.wishesService
      .list(
        this.listForm.get('descricao')?.value)
      .subscribe((response) => {
        if (response.resultado.erro === false) {
            console.log(response);
            this.elements = response.conteudo;
        }
      });
  }

}
