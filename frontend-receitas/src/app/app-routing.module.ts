import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./pages/home/home.component";
import {AutGuardService} from "./service/aut-guard.service";
import {RecipeComponent} from "./pages/recipe/recipe.component";
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path:'home', component: HomeComponent, canActivate: [AutGuardService] },
  { path:'recipe', component: RecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
