import { resultado } from "./resultado";

class Product {
    desc_grp_produto: string = "";
    desc_situacao: string = "";
    descricao: string = "";
    icone: string = "";
    id: number = 0;
    id_grp_prod: number = 0;
    id_situacao: number = 0;
    ordem: number = 0;
    preenchimento: string = "";
  }

export class Products extends resultado{
    conteudo: Product[] = [];
}