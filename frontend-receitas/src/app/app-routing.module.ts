import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeComponent} from "./pages/recipe/recipe.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'home'},
  { path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
