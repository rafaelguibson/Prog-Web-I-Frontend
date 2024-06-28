import {Component, computed, signal} from '@angular/core';
import {AddRecipeComponent} from "./pages/add-recipe/add-recipe.component";
import {Receita} from "./model/receita";
import {RecipeHttpServiceService} from "./service/recipe-http-service.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private recipeService:RecipeHttpServiceService, public dialog:MatDialog,private router:Router) { }


  collapsed = signal(true);

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px')

  openDialog(): void {
    const dialogRef =  this.dialog.open(AddRecipeComponent, {
      width: '800px',
      height: '650px',
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.openDialogSucsess();
      this.recipeService.listarTodos().subscribe((data: Receita[]) => {
      });
    });
  }

  private openDialogSucsess() {

  }

  navigateToHome() {
    if(localStorage.getItem('auth-tkon')) {
      this.router.navigate(['home']);
    }
    this.router.navigate(['home']);
  }

  logout() {
    localStorage.removeItem('auth-token');
    this.router.navigate(['']);
  }

  protected readonly localStorage = localStorage;
}
