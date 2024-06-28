import {Component, OnInit} from '@angular/core';
import {Receita} from "../../model/receita";
import {RecipeHttpServiceService} from "../../service/recipe-http-service.service";
import {AddRecipeComponent} from "../add-recipe/add-recipe.component";
import {MatDialog} from "@angular/material/dialog";
import {RecipeComponent} from "../recipe/recipe.component";
import {Router} from "@angular/router";
import {DeleteDialogComponent} from "../../components/delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  recipe:Receita[] = [];

  constructor(private recipeService:RecipeHttpServiceService,
              public dialog:MatDialog, router: Router
  ) { }

  ngOnInit(): void {
    this.recipeService.listarTodos().subscribe((data: Receita[]) => {
      console.log(data);
      this.recipe = data;
    });
  }

  openDialogRecipe(receita: Receita): void {
    this.dialog.open(RecipeComponent, {
      width: '800px',
      height: '650px',
      data: { receita }
    });
  }

  deleteRecipe(receita: Receita){
    const dialogRef = this.dialog.open(DeleteDialogComponent,
      {
        height: '200px',
        width: '400px',
        data: {receita}
      });
    dialogRef.afterClosed().subscribe(result => {
      this.recipeService.listarTodos().subscribe((data: Receita[]) => {
      });
    });
  }

  editRecipe(receita:Receita) {
    const dialogRef =  this.dialog.open(AddRecipeComponent, {
      width: '800px',
      height: '650px',
      data: receita
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.openDialogSucsess();
      this.recipeService.listarTodos().subscribe((data: Receita[]) => {
      });
    });
  }
}
