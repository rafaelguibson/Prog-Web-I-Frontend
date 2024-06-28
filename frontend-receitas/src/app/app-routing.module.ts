import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./pages/home/home.component";
import {AutGuardService} from "./service/aut-guard.service";
import {RecipeComponent} from "./pages/recipe/recipe.component";
import {LoginComponent} from "./pages/login/login.component";
import {AddRecipeComponent} from "./pages/add-recipe/add-recipe.component";
import {RegisterComponent} from "./pages/register/register.component";


const routes: Routes = [
  { path: '', component: RecipeComponent },
  { path: 'register', component: RegisterComponent },
  { path:'home', component: HomeComponent, canActivate: [AutGuardService] },
  { path:'recipe', component: RecipeComponent , canActivate: [AutGuardService] },
  { path:'addRecipe', component: AddRecipeComponent , canActivate: [AutGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
