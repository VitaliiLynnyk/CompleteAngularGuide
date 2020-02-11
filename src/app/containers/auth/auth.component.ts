import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html'
})
export class AuthComponent {
  isLogInMode = true;

  switchMode() {
    this.isLogInMode = !this.isLogInMode;
  }

  submitAuthForm(form: NgForm) {
    form.reset();
  }
}
