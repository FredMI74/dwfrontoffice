import { resultado } from "./resultado";

class Wish {
    cidade: string = "";
    desc_situacao: string = "";
    desc_tp_produto: string = "";
    descricao: string = "";
    icone_tp_produto: string = "";
    id: number = 0;
    id_situacao: number = 0;
    id_tipo_produto: number = 0;
    qtd_ofertas: number = 0;
    uf: string = "";
}

export class Wishes extends resultado{
    conteudo: Wish[] = [];
}