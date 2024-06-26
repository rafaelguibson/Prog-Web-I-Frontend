import {Ingredients} from "./ingredients";

export interface Recipe {
  id?: number;
  nome: string;
  modoPreparo: string;
  tempoPreparo: number;
  rendimento: string;
  categoria: number;
  dataCadastro?: Date;
  ingredientes: Ingredients[];
}
