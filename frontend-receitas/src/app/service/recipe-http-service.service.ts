import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Receita} from "../model/receita";

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpServiceService {
  private baseUrl = 'http://localhost:8080/api/receitas';

  constructor(private http: HttpClient) { }

  salvar(receitaDTO: Receita): Observable<Receita> {
    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
    };

    return this.http.post<Receita>(this.baseUrl, receitaDTO, { headers });
  }

  atualizar(id: number, receitaDTO: Receita): Observable<Receita> {
    return this.http.put<Receita>(`${this.baseUrl}/${id}`, receitaDTO);
  }

  buscarPorId(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.baseUrl}/${id}`);
  }

  deletar(id:Number): Observable<Receita> {
    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
    };

    return this.http.delete<Receita>(`${this.baseUrl}/${id}`, { headers });
  }

  listarTodos(): Observable<Receita[]> {
    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
    };

    return this.http.get<Receita[]>(this.baseUrl + '/sorted', { headers });
  }


  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
