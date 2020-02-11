import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { AuthSignUpResponse } from '../interfases/auth.sign-up.response';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(email: string, pwd: string) {
    return this.http.post<AuthSignUpResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.fireBaseAPIKey}`, {
      email,
      password: pwd,
      returnSecureToken: true
    });
  }
}
