import {Ingredientes} from "./ingredientes";

export interface Receita {
  id?: number;
  nome: string;
  descricao: string;
  modoPreparo: string;
  tempoPreparo: number;
  rendimento: string;
  categoria: number;
  dataCadastro?: Date;
  ingredientes: Ingredientes[];
}
