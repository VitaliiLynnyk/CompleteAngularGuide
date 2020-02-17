import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { AuthResponse } from '../../interfases/auth.response';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html'
})
export class AuthComponent {
  isLogInMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  switchMode() {
    this.isLogInMode = !this.isLogInMode;
  }

  submitAuthForm(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.pwd;
    let authObs: Observable<AuthResponse>;

    if (this.isLogInMode) {
      authObs = this.authService.signIn(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
    }, errorMsg => {
      this.error = errorMsg;
      this.isLoading = false;
    });

    form.reset();
  }
}
