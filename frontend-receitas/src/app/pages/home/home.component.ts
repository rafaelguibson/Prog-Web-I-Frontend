import {Component, OnInit} from '@angular/core';
import {Receita} from "../../model/receita";
import {RecipeHttpServiceService} from "../../service/recipe-http-service.service";
import {AddRecipeComponent} from "../add-recipe/add-recipe.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  recipe:Receita[] = [];

  constructor(private recipeService:RecipeHttpServiceService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.recipeService.listarTodos().subscribe((data: Receita[]) => {
      console.log(data);
      this.recipe = data;
    });
  }

}
