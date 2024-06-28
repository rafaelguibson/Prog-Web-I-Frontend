import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationHttpclientService} from "../../service/authentication-httpclient.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMensagem: string = '';
  showFeedbackPanel: boolean = false;

  constructor(private router: Router, private authService: AuthenticationHttpclientService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { 'mismatch': true };
  }

  submit() {
    if (this.registerForm.valid) {
      this.authService.register( this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password ).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.showErrorMensage(err.error);
        }
      });
    }
  }

  showErrorMensage(msg: string) {
    this.errorMensagem = msg;
    this.showFeedbackPanel = true;
    this.scheduleMessageClear();
  }

  private scheduleMessageClear() {
    setTimeout(() => {
      this.errorMensagem = '';
      this.showFeedbackPanel = false;
    }, 5000);
  }
}
