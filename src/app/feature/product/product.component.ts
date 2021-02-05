import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { TableArray } from '../models/tableArray';

@Component({
  selector: 'product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  loading = false;
  submitted = false;
  tableArray: TableArray[] = [
    {
      id: '-',
      descricao: '-',
      id_grp_prod: '-',
      desc_grp_produto: '-',
      icone: '-',
      resultado: '',
      conteudo: '',
    },
  ];

  constructor(private router: Router, private productService: ProductService) {
    this.productForm = new FormGroup({
      code: new FormControl(''),
      description: new FormControl(''),
      department: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.productService
      .consultProduct(
        this.productForm.get('code')?.value,
        this.productForm.get('description')?.value,
        this.productForm.get('department')?.value
      )
      .subscribe((response) => {
        console.log(response.conteudo);

        this.tableArray = response.conteudo;

        if (response.resultado.erro === false) {
          console.log(response.resultado.conteudo);
        }
      });
  }
}
