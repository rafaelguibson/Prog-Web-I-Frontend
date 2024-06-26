import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../model/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpServiceService {
  private baseUrl = 'http://localhost:8080/api/receitas';

  constructor(private http: HttpClient) { }

  salvar(receitaDTO: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.baseUrl, receitaDTO);
  }

  atualizar(id: number, receitaDTO: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.baseUrl}/${id}`, receitaDTO);
  }

  buscarPorId(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`);
  }

  listarTodos(): Observable<Recipe[]> {
    // const tokenString = localStorage.getItem('auth-token');
    // let token: { accessToken: string } = { accessToken: '' };
    //
    // if (tokenString) {
    //   token = JSON.parse(tokenString);
    //   console.log(token);
    // }

    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
    };

    return this.http.get<Recipe[]>(this.baseUrl, { headers });
  }


  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
