import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatCard, MatCardContent, MatCardFooter} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {RecipeHttpServiceService} from "./service/recipe-http-service.service";
import {HttpClientModule} from "@angular/common/http";
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSidenavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RecipeComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavContainer,
    MatSidenav,
    MatCard,
    MatCardContent,
    MatButton,
    MatIconButton,
    MatIcon,
    MatToolbar,
    MatNavList,
    MatListItem,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardFooter,
    MatMenuModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: `pt-BR`},
    provideAnimationsAsync(),
    provideNgxMask(),
    RecipeHttpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
