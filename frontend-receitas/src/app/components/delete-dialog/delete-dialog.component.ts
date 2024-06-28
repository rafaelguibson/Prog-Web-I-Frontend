import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RecipeHttpServiceService} from "../../service/recipe-http-service.service";
import {Receita} from "../../model/receita";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              private httpService : RecipeHttpServiceService,
              @Inject(MAT_DIALOG_DATA) public data: { receita: Receita },) {}

  fecharModal() {
    this.dialogRef.close();
  }

  deleteMonitorador(receita: Receita) {
    this.httpService.excluir(this.data.receita.id).subscribe(
      (response) => {
        console.log('Receita excluído com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao excluir o monitorador:', error);
      }
    );
    this.dialogRef.close();
  }
}
