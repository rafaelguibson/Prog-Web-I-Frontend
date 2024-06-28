import {Component, OnInit} from '@angular/core';
import {Receita} from "../../model/receita";
import {RecipeHttpServiceService} from "../../service/recipe-http-service.service";
import {AddRecipeComponent} from "../add-recipe/add-recipe.component";
import {MatDialog} from "@angular/material/dialog";
import {RecipeComponent} from "../recipe/recipe.component";
import {Router} from "@angular/router";

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

  openDialogRecipe(): void {
    const dialogRef =  this.dialog.open(RecipeComponent, {
      width: '800px',
      height: '650px',
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.openDialogSucsess();
      this.recipeService.listarTodos().subscribe((data: Receita[]) => {
      });
    });
  }

  deleteRecipe(receita: Receita){
    this.recipeService.deletar(receita.id).subscribe(
      (data: Receita) => {
        this.recipeService.listarTodos().subscribe((data: Receita[]) => {
          console.log(data);
          this.recipe = data;
        });
      },
      error => {
        console.log(error);
      }
    )
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
