import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { throwError } from 'rxjs';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =
    <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable({
    providedIn: 'root'
})
export class HttpErrorHandler {
    constructor(private messageService: MessageService, private router: Router) { }

    createHandleError = (serviceName = '') => <T>
        (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result)

    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
        return (error: HttpErrorResponse): Observable<T> => {
            console.error('handleError error:', error); // log to console instead
            if (error.status === 401 || error.status === 403) {
                this.router.navigate(['/login']);
            }
            return throwError(error);
            // if (error.status === 401) {
            //     this.router.navigate(['/login']);
            // }
            // const message = (error.error instanceof ErrorEvent) ?
            //     error.error.message :
            //     `server returned code ${error.status} with body "${error.error}"`;

            // this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);

            // return of(result);
        };

    }
}
