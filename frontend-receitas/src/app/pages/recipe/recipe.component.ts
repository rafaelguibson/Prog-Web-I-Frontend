import {Component, Inject, OnInit} from '@angular/core';

import {Receita} from "../../model/receita";

import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  receita: Receita;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.receita = data.receita;
  }

  ngOnInit(): void {}
}
