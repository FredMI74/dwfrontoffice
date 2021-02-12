import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  p: number = 1;
  count_id: number = 0;
  max_id: number = 0;
  
  listForm: FormGroup;
  listResult: number = -1;
  mensagem: string = "";
  closeResult = '';

  nrSelect = 'sem_oferta';

  headWishes = ['Cód', 'Icone', 'Descrição', 'Cidade','Tipo Prod.', 'Ofertas Vál.','Ação'];

  wishes = new Wishes();
  products: Products = new Products;
  
  departments: string[] = []; 


  constructor(private modalService: NgbModal, private wishesService :  WhishesService) {
    this.listForm = new FormGroup({
      id_desejo: new FormControl(''),
      oferta: new FormControl(''),
      uf: new FormControl(''), 
      descricao: new FormControl(''),
      id_tp_produto : new FormControl(''),
      id_cidade: new FormControl('')
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
          this.departments = Array.from(new Set(this.products.conteudo.map((p) =>p.desc_grp_produto)));
        }
    });
  }


  onSubmit() {
    this.p = 1;
    this.wishesService
      .list(
        this.listForm.controls.descricao?.value,
        this.listForm.controls.id_tp_produto?.value,
        this.listForm.controls.id_desejo?.value,
        this.listForm.controls.oferta?.value,
        this.listForm.controls.uf?.value,
        this.listForm.controls.id_cidade?.value)
      .subscribe((response) => {
        this.wishes = response;
        if (this.wishes.resultado.erro === false) {
            this.listResult = this.wishes.conteudo.length;
            this.count_id = this.wishes.infoPagina.count_id;
            this.max_id = this.wishes.infoPagina.max_id;
        } else {
          this.listResult = -2;
          this.mensagem = response.resultado.mensagem;
        }
      });
  }


  handlePageChange(event: number) {
    this.p = event;
    this.wishesService
    .list(
      this.listForm.controls.descricao?.value,
      this.listForm.controls.id_tp_produto?.value,
      this.listForm.controls.id_desejo?.value,
      this.listForm.controls.oferta?.value,
      this.listForm.controls.uf?.value,
      this.listForm.controls.id_cidade?.value,
      this.max_id, this.p)
    .subscribe((response) => {
      this.wishes = response;
      if (this.wishes.resultado.erro === false) {
          this.listResult = this.wishes.conteudo.length;
      } else {
        this.listResult = -2;
        this.mensagem = response.resultado.mensagem;
      }
    });
  }
}
