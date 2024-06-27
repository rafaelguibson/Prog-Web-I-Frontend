import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeComponent} from "./pages/recipe/recipe.component";

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'home'},
  { path:'home', component: RecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
