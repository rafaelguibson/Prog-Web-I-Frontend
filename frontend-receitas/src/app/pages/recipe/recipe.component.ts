import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RecipeHttpServiceService} from "../../service/recipe-http-service.service";
import {Receita} from "../../model/receita";
import {Ingrediente} from "../../model/ingrediente";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent{
  receitaForm: FormGroup;
  ingredientesList: Ingrediente[] = [];

  constructor(private fb: FormBuilder, private receitaService: RecipeHttpServiceService,
              public dialogRef: MatDialogRef<RecipeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Receita
              ) {
    this.receitaForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      modoPreparo: ['', Validators.required],
      tempoPreparo: ['', Validators.required],
      rendimento: ['', Validators.required],
      categoria: ['', Validators.required],
      ingredientes: this.fb.array([])
    });
  }

  get ingredientes(): FormArray {
    return this.receitaForm.get('ingredientes') as FormArray;
  }

  addIngredienteForm() {
    const ingrediente = this.fb.group({
      nomeIngrediente: ['', Validators.required],
      quantidade: ['', Validators.required],
      unidadeMedida: ['', Validators.required]
    });
    this.ingredientes.push(ingrediente);
  }

  saveIngrediente(index: number) {
    const ingredienteForm = this.ingredientes.at(index);
    const ingrediente: Ingrediente = {
      id: 0, // id temporário, será gerado no backend
      nomeIngrediente: ingredienteForm.value.nomeIngrediente,
      quantidade: ingredienteForm.value.quantidade,
      unidadeMedida: ingredienteForm.value.unidadeMedida,
    };
    this.ingredientesList.push(ingrediente);
    this.ingredientes.removeAt(index);
  }

  removeIngrediente(index: number) {
    this.ingredientesList.splice(index, 1);
  }

  onSubmit() {
    if (this.receitaForm.valid) {
      const receita: Receita = {
        ...this.receitaForm.value,
        ingredientes: this.ingredientesList
      };
      this.receitaService.salvar(receita).subscribe(response => {
        console.log('Receita cadastrada com sucesso!', response);
        this.receitaForm.reset();
        this.ingredientesList = [];
      });
    }
  }
}
