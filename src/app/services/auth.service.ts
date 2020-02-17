import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from '../../environments/environment';

import { AuthResponse } from '../interfases/auth.response';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(email: string, pwd: string) {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.fireBaseAPIKey}`, {
      email,
      password: pwd,
      returnSecureToken: true
    }).pipe(catchError(errorRES => {
      let errorMsg = 'Error';
      if (!errorRES.error || !errorRES.error.error) {
        return throwError(errorMsg);
      }

      switch (errorRES.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMsg = 'This email exist already';
          break;
        default:
          errorMsg = 'Error';
      }

      return throwError(errorMsg);
    }));
  }

  signIn(email: string, pwd: string) {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.fireBaseAPIKey}`, {
      email,
      password: pwd,
      returnSecureToken: true
    });
  }
}
