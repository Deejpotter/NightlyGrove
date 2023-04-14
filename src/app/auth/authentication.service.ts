import { Injectable } from '@angular/core';

import { from, Observable, tap, throwError } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';
import GoTrue, { User } from 'gotrue-js';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

export interface LoginContext {
  email: string;
  password: string;
  remember?: boolean;
}

export interface SignupContext {
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl: string = 'https://tranquil-halva-766b1c.netlify.app/.netlify/identity';
  private authClient: GoTrue;

  constructor(
    private credentialsService: CredentialsService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.authClient = new GoTrue({
      APIUrl: this.apiUrl,
      setCookie: false,
    });
  }

  login(context: LoginContext): Observable<Credentials> {
    return new Observable((observer) => {
      this.authClient
        .login(context.email, context.password, context.remember)
        .then((user) => {
          const data: Credentials = {
            email: user.email,
            token: user.token.access_token,
          };
          this.credentialsService.setCredentials(data, context.remember);
          observer.next(data);
          observer.complete();

          // Redirect to the desired page after login
          const redirectUrl = this.route.snapshot.queryParams['redirect'] || '/';
          this.router.navigateByUrl(redirectUrl);
        })
        .catch((error) => {
          console.error('Login error:', error);
          observer.error(error);
          observer.complete();
        });
    });
  }

  signup(context: SignupContext): Observable<any> {
    return new Observable((observer) => {
      this.authClient
        .signup(context.email, context.password)
        .then((user) => {
          observer.next(user);
          observer.complete();
        })
        .catch((error) => {
          console.error('Signup error:', error);
          observer.error(error);
          observer.complete();
        });
    });
  }

  logout(): Observable<boolean> {
    return new Observable((observer) => {
      const user = this.authClient.currentUser();
      if (user) {
        user
          .logout()
          .then(() => {
            this.credentialsService.setCredentials();
            observer.next(true);
            observer.complete();
          })
          .catch((error) => {
            observer.error(error);
            observer.complete();
          });
      } else {
        this.credentialsService.setCredentials();
        observer.next(true);
        observer.complete();
      }
    });
  }

  requestPasswordReset(email: string): Observable<any> {
    return new Observable((observer) => {
      this.authClient
        .requestPasswordRecovery(email)
        .then(() => {
          observer.next(true);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  confirmPasswordReset(token: string, newPassword: string): Observable<any> {
    const apiUrl = this.apiUrl;
    const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };

    return this.http.put(apiUrl, { password: newPassword }, { headers: headers });
  }

  updateUser(user: User, attributes: object): Observable<any> {
    return new Observable((observer) => {
      user
        .update(attributes)
        .then((updatedUser) => {
          observer.next(updatedUser);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  getToken(): Observable<string> {
    const user = this.authClient.currentUser();
    if (!user) {
      return throwError('No user is currently logged in.');
    }

    return from(user.jwt()).pipe(
      tap((jwt: string) => this.credentialsService.setToken(jwt)),
      catchError((error: any) => throwError(error))
    );
  }
}
