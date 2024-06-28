import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationHttpclientService} from "../../service/authentication-httpclient.service";
import {Receita} from "../../model/receita";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMensagem: string = '';
  showFeedbackPanel: boolean = false;
  constructor(private router: Router, private authService:AuthenticationHttpclientService,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

  submit(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/home'])
        // this.openSnackBar('Login successful!');
      }, error: (err) => {
        // this.showAlert(err.error);
        this.showErrorMensage(err.error)
      }
    });
  }

  showErrorMensage(msg: string) {
    this.errorMensagem = msg;
    this.showFeedbackPanel = true;
    this.scheduleMessageClear();
  }

  private scheduleMessageClear() {
    setTimeout(() => {
      this.errorMensagem = ''; // Limpar a mensagem após 5 segundos
      this.showFeedbackPanel = false;
    }, 5000); // 5000 milissegundos = 5 segundos
  }



}
