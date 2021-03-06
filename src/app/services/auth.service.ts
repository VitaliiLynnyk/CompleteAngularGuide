import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { UserModel } from '../models/user.model';

import { AuthResponse } from '../interfases/auth.response';

@Injectable()
export class AuthService {
  user = new BehaviorSubject<UserModel>(null);
  private tokenExpTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  signUp(email: string, pwd: string) {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.fireBaseAPIKey}`, {
      email,
      password: pwd,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError),
      tap(resData => this.handleAuth(resData.expiresIn, resData.localId, resData.idToken, +resData.expiresIn))
    );
  }

  signIn(email: string, pwd: string) {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.fireBaseAPIKey}`, {
      email,
      password: pwd,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError),
      tap(resData => this.handleAuth(resData.expiresIn, resData.localId, resData.idToken, +resData.expiresIn))
    );
  }

  autoLogIn() {
    const userData: {
      email: string,
      id: string,
      token: string,
      tokenExpDate: string
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    const loadedUser = new UserModel(
      userData.email,
      userData.id,
      userData.token,
      new Date(userData.tokenExpDate)
    );

    if (loadedUser.getToken) {
      this.user.next(loadedUser);
      const expDuration = new Date(userData.tokenExpDate).getTime() - new Date().getTime();
      this.autoLogOut(expDuration);
    }
  }

  logOut() {
    this.user.next(null);
    this.router.navigate([ '/auth' ]);
    localStorage.removeItem('userData');

    if (this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
    }
    this.tokenExpTimer = null;
  }

  autoLogOut(expDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.logOut();
      }, expDuration
    );
  }

  private handleAuth(email: string, userId: string, token: string, expIn: number) {
    const expDate = new Date(new Date().getTime() + expIn * 1000);
    const user = new UserModel(email, userId, token, expDate);

    this.user.next(user);
    this.autoLogOut(expIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'Error';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMsg);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'This email exist already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'not found email';
        break;
      default:
        errorMsg = 'Error';
    }

    return throwError(errorMsg);
  }
}
