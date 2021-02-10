class resultado{
    resultado!: {
        erro: boolean;
        mensagem: string;
    }
  
    infoPagina!:{
        max_id: number;
        count_id: number;
    }
  };
  
  export class City {
      id: number = 0;
      nome: string = "";
      uf: string = "";

      constructor(id: number, nome: string){
        this.id = id;
        this.nome = nome;
      }
  };
  
  export class Cities extends resultado{
      conteudo: City[] = [];
  };