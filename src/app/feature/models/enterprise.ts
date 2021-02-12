import { resultado } from "./resultado";

class Enterprise {
    bairro: string = "";
    bairro_cob: string = "";
    cep: string = "";
    cep_cob: string = "";
    cnpj: string = "";
    complemento: string = "";
    complemento_cob: string = "";
    desc_qualificacao: string = "";
    email_com: string = "";
    email_sac: string = "";
    endereco: string = "";
    endereco_cob: string = "";
    fantasia: string = "";
    fone_com: string = "";
    fone_sac: string = "";
    id: number = 0;
    id_cidade: number = 0;
    id_cidade_cob: number = 0;
    id_qualificacao: number = 0;
    insc_est: string= "";
    logo: string= "";
    nome_cidade: string= "";
    nome_cidade_cob: string= "";
    numero: string= "";    
    numero_cob: string= "";
    razao_social: string= "";
    uf: string= "";
    uf_cob: string= "";
    url: string= "";
  }

export class Enterprises extends resultado{
    conteudo: Enterprise[] = [];
}