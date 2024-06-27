import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

export interface Ingrediente {
  nomeIngrediente: string;
  quantidade: number;
  unidadeMedida: string;
}



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  ELEMENT_DATA: Ingrediente[] = [
    {nomeIngrediente: 'Farinha de trigo', quantidade: 2, unidadeMedida: 'xícaras'},
    {nomeIngrediente: 'Açúcar', quantidade: 2, unidadeMedida: 'xícaras'},
    {nomeIngrediente: 'Cacau em pó', quantidade: 1, unidadeMedida: 'xícara'},
    {nomeIngrediente: 'Fermento em pó', quantidade: 1, unidadeMedida: 'colher de chá'},
    {nomeIngrediente: 'Sal', quantidade: 1, unidadeMedida: 'pitada'},
    {nomeIngrediente: 'Ovos', quantidade: 2, unidadeMedida: 'unidades'},
    {nomeIngrediente: 'Leite', quantidade: 1, unidadeMedida: 'xícara'},
    {nomeIngrediente: 'Óleo vegetal', quantidade: 1, unidadeMedida: 'xícara'},
    {nomeIngrediente: 'Essência de baunilha', quantidade: 1, unidadeMedida: 'colher de chá'},
    {nomeIngrediente: 'Água quente', quantidade: 1, unidadeMedida: 'xícara'}
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() { }


}
