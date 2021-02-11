import { resultado } from "./resultado";

class Departament {
    desc_situacao: string = "";
    descricao: string = "";
    icone: string = "";
    id: number = 0;
    id_situacao: number = 0;
    ordem: number = 0;
    token:  string = "";
}

export class Departaments extends resultado {
    conteudo: Departament[] = [];
}