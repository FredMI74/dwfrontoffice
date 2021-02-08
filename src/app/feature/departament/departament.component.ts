import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Departaments } from "../models/departament";
import { DepartamentService } from "./departament.service";

@Component({
    selector: 'departament',
    templateUrl: './departament.component.html',
    styleUrls: ['./departament.component.css']
})
export class DepartamentComponent implements OnInit {

    listFormDepartament: FormGroup;
    listResultDepartament: number = -1;
    mensageDepartament: string = "";

    departament = new Departaments();

    constructor(private departamentService: DepartamentService) {
        this.listFormDepartament = new FormGroup({
            descricao: new FormControl(''),
            id : new FormControl('')
        });
    }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log('teste anelisa');
        console.log('teste', this.listFormDepartament.controls.descricao?.value, this.listFormDepartament.controls.id?.value);
        this.departamentService.list(
            this.listFormDepartament.get('descricao')?.value,
            this.listFormDepartament.controls.id?.value
        ).subscribe((response) => {
            this.departament = response;
            if (this.departament.resultado.erro === false) {
                this.listResultDepartament = this.departament.conteudo.length;
            } else {
                this.listResultDepartament = -2;
                this.mensageDepartament = response.resultado.mensageDepartament;
            }
        });
    }
}