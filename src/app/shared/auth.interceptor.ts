import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CredentialsService } from '@app/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private credentialsService: CredentialsService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the credentials service
    const authToken = this.credentialsService.credentials?.token;

    // If the token is not null or undefined, add the Authorization header with the token
    if (authToken) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${authToken}` },
      });
    }

    // Pass the request with the updated headers to the next interceptor
    return next.handle(req);
  }
}
