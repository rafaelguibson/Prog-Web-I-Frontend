import {Ingrediente} from "./ingrediente";

export interface Receita {
  id?: number;
  nome: string;
  descricao: string;
  modoPreparo: string;
  tempoPreparo: number;
  rendimento: string;
  categoria: number;
  dataCadastro?: Date;
  ingredientes: Ingrediente[];
}
