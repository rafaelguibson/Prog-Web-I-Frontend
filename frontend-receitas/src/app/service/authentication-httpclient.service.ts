import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginResponse} from "../model/login-response";
import {Observable, pipe, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpclientService {
  apiUrl: string = "http://localhost:8080/auth";

  constructor(private httpClient: HttpClient, public router: Router) {
  }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", {email, password}).pipe(
      tap(value => {
        localStorage.setItem("auth-token", value.token);
        localStorage.setItem("username", value.name);
      })
    );
  }
}
