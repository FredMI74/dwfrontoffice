import { resultado } from "./resultado";

class Departament {
    id: number = 0;
    descricao: string = "";
    id_situacao: number = 0;
    token:  string = "";
}

export class Departaments extends resultado {
    conteudo: Departament[] = [];
}