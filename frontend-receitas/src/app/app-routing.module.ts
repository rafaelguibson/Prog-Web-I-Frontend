import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AddRecipeComponent} from "./pages/add-recipe/add-recipe.component";

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'home'},
  { path:'home', component: AddRecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
