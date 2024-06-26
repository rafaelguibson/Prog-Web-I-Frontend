import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    CustomSidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
