import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AlertService, AuthenticationService } from 'src/app/services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(catchError(err => {
            switch (err.status) {
                case 401:
                    // auto logout if 401 response returned from api
                    this.authenticationService.logout();
                    location.reload(true);
                    break;

                case 400:
                    return throwError({ error: { message: 'Email or Password is incorrect' } });
                    break;
            }



            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}