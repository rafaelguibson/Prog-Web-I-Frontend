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
        console.log(err.error)
      }
    });
  }

}
