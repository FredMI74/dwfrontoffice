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
  listResult: number = -1;

  headElements = ['Cód', 'Icone', 'Descrição', 'Cidade','Tipo Prod.', 'Ofertas Vál.','Ação'];

  elements: any;
  products = [{
          desc_grp_produto: "",
          desc_situacao: "",
          descricao: "",
          icone: "",
          id: 0,
          id_grp_prod: 0,
          id_situacao: 0,
          ordem: 0,
          preenchimento: ""
  }];
  
  departments: string[] = []; 


  constructor(private modalService: NgbModal, private wishesService :  WhishesService) {

    this.listForm = new FormGroup({
      descricao: new FormControl(''),
      id_tp_produto : new FormControl('')
    });
   }

  openModal(id_wish: string) {
    const modalRef = this.modalService.open(AddOfferComponent);
   modalRef.componentInstance.id_wish = id_wish;
  }

  ngOnInit(): void { 

    this.wishesService
    .list_prods()
    .subscribe((response) => {
      if (response.resultado.erro === false) {
          console.log(response);
          this.products = response.conteudo;
          this.departments = Array.from( new Set(this.products.map(({desc_grp_produto}) => desc_grp_produto)));
        }
    });
  }


  onSubmit() {
    console.log('data = ', this.listForm.controls.descricao?.value, this.listForm.controls.id_tp_produto?.value );
    
    this.wishesService
      .list(
        this.listForm.get('descricao')?.value,
        this.listForm.controls.id_tp_produto?.value)
      .subscribe((response) => {
        if (response.resultado.erro === false) {
            console.log(response);
            this.elements = response.conteudo;
            this.listResult = this.elements.length;
        }
      });
  }

}
