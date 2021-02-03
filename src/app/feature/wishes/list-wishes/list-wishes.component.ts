import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddOfferComponent } from '@feature/offers/add-offer/add-offer.component';
import { FormControl, FormGroup} from '@angular/forms';
import { WhishesService } from '@feature/wishes/wishes.service';
import { Products } from '@feature/models/product';
import { Wishes } from '@feature/models/wish';

@Component({
  selector: 'page-list-wishes',
  templateUrl: './list-wishes.component.html',
  styleUrls: ['./list-wishes.component.css']
})
export class ListWishesComponent implements OnInit {
  
  listForm: FormGroup;
  listResult: number = -1;
  mensagem: string = "";
  closeResult = '';

  headWishes = ['Cód', 'Icone', 'Descrição', 'Cidade','Tipo Prod.', 'Ofertas Vál.','Ação'];

  wishes = new Wishes();
  products: Products = new Products;
  
  departments: string[] = []; 


  constructor(private modalService: NgbModal, private wishesService :  WhishesService) {

    this.listForm = new FormGroup({
      descricao: new FormControl(''),
      id_tp_produto : new FormControl('')
    });
   }

  openModal(id_wish: number) {
    const modalRef = this.modalService.open(AddOfferComponent, { centered: true });
    modalRef.componentInstance.id_wish = id_wish;
  }

  ngOnInit(): void { 
    this.wishesService
    .list_prods()
    .subscribe((response) => {
      this.products = response;
      if (this.products.resultado.erro === false) {
          console.log(this.products.conteudo);

          this.products.conteudo.map( function(p)  { console.log(p.desc_grp_produto)});
          
          this.departments = Array.from(new Set(this.products.conteudo.map((p) =>p.desc_grp_produto)));
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
        this.wishes = response;
        if (this.wishes.resultado.erro === false) {
            console.log(response);
            
            this.listResult = this.wishes.conteudo.length;
        } else {
          this.listResult = -2;
          this.mensagem = response.resultado.mensagem;
        }
      });
  }

}
