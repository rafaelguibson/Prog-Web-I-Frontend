import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Receita} from "../../model/receita";
import {RecipeHttpServiceService} from "../../service/recipe-http-service.service";
import {Ingrediente} from "../../model/ingrediente";
import {MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent{
  receitaForm: FormGroup;
  ingredientesList: Ingrediente[] = [];
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  constructor(private fb: FormBuilder, private receitaService: RecipeHttpServiceService) {
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

  avancarParaIngredientes() {
    this.tabGroup.selectedIndex = 1; // seleciona a segunda aba (ingredientes)
  }

  voltarParaReceita() {
    this.tabGroup.selectedIndex = 0; // seleciona a primeira aba (receita)
  }

}
