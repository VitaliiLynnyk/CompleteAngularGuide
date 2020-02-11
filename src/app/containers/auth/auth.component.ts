import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html'
})
export class AuthComponent {
  isLogInMode = true;

  constructor(private authService: AuthService) {}

  switchMode() {
    this.isLogInMode = !this.isLogInMode;
  }

  submitAuthForm(form: NgForm) {
    if (!form.valid) {
      return;
    }

    if (this.isLogInMode) {

    } else {
      const email = form.value.email;
      const password = form.value.pwd;

      this.authService.signUp(email, password)
          .subscribe(resData => {
            console.log(resData);
          }, error => {
            console.log(error);
          });
    }

    form.reset();
  }
}
