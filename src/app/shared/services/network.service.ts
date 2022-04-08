import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
// import { AuthService } from '../guard/auth.service';
import { ResponseApi } from '../interfaces/common.interface';
export const API_URI: string = environment.apiUrl;
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

export type UrlParams = Map<string, string>;

export class NetworkService {
    protected serviceName: string;
    protected handleError: HandleError;
    // protected authService: AuthService;
    perviousUrl;
    // protected headers = new HttpHeaders()
    //     .set('Content-Type', 'application/json')
    //     .set('Authorization', '');
    // .set('Access-Control-Allow-Headers',
    //     'Access-Control-Allow-Headers, Cache-Control, Pragma, Origin, Content-Type, Authorization, X-Requested-With')
    // .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE')
    // .set('Access-Control-Allow-Origin', '*')
    // .set('Access-Control-Allow-Credentials', 'true');


    constructor(
        serviceName: string,
        protected router: Router,
        protected httpClient: HttpClient,
        protected errorHandler: HttpErrorHandler) {
        // this.authService = new AuthService();
        this.serviceName = serviceName;
        this.handleError = errorHandler.createHandleError(this.serviceName);
    }

    protected get = (uri: string): Observable<ResponseApi> => {
        return this.httpClient.get<ResponseApi>(`${API_URI}/${uri}`, { observe: 'response' })
            .pipe(
                map(response => {
                    return {
                        code: response.body.code,
                        status: response.body.status,
                        message: response.body.message,
                        data: response.body.data || undefined
                    };
                }),
                // catchError(response => this.handleError('get', this.ErrorResponse(response.body)))
                catchError(error => {
                    if (error.status === 401 || error.status === 403) {
                        this.router.navigate(['/login']);
                        // this.router.events
                        //     .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
                        //     .subscribe((events: RoutesRecognized[]) => {
                        //         // console.log('previous url', events[0].urlAfterRedirects);
                        //         // console.log('current url', events[1].urlAfterRedirects);
                        //         debugger;
                        //         this.perviousUrl = events[0].urlAfterRedirects;
                        //         this.router.navigate(['login'], { queryParams: { 'redirectURL': this.perviousUrl } });
                        //     });
                    }

                    return throwError({
                        code: error.error?.code,
                        status: error.status,
                        message: error?.message,
                        data: error
                    });
                })
            );
    }

    protected post = (uri: string, data: any): Observable<ResponseApi> => {
        return this.httpClient.post<ResponseApi>(`${API_URI}/${uri}`, data, {observe: 'response' }).pipe(
            map(response => {
                return {
                    code: response.body.code,
                    status: response.body.status,
                    message: response.body.message,
                    data: response.body.data || undefined
                };
            }),
            // catchError(response => this.handleError('post', this.ErrorResponse(response.body)))
            catchError(error => {
                if (error.status === 401 || error.status === 403) {
                    // this.router.navigate(['/login']);
                }
                return throwError({
                    code: error.error?.code,
                    status: error.status,
                    message: error?.message,
                    data: error
                });
            })
        );
    }

    protected put = (uri: string, data: any): Observable<ResponseApi> => {
        return this.httpClient.put<ResponseApi>(`${API_URI}/${uri}`, data, { observe: 'response' }).pipe(
            map(response => {
                return {
                    code: response.body.code,
                    status: response.body.status,
                    message: response.body.message,
                    data: response.body.data || undefined
                };
            }),
            // catchError(response => this.handleError('put', this.ErrorResponse(response.body)))
            catchError(error => {
                if (error.status === 401 || error.status === 403) {
                    // this.router.navigate(['/login']);
                }

                return throwError({
                    code: error.error?.code,
                    status: error.status,
                    message: error?.message,
                    data: error
                });
            })
        );
    }
    

    protected delete = (uri: string): Observable<ResponseApi> => {
        return this.httpClient.delete<ResponseApi>(`${API_URI}/${uri}`, { observe: 'response' }).pipe(
            map(response => {
                return {
                    code: response.body.code,
                    status: response.body.status,
                    message: response.body.message,
                    data: { item: response.body.data || undefined }
                };
            }),
            // catchError(response => this.handleError('delete', this.ErrorResponse(response.body)))
            catchError(error => {
                if (error.status === 401 || error.status === 403) {
                    // this.router.navigate(['login'], { queryParams: { 'redirectURL': state.url } });
                }

                return throwError({
                    code: error.error?.code,
                    status: error.status,
                    message: error?.message,
                    data: error
                });
            })
        );
    }

    protected getNavigateUrl = (url: string, params: UrlParams) => {
        params.forEach((key: string, value: string) => {
            url = url.replace(`{${key}}`, value);
        });
        return url;
    }

    // private getHeaders = (): HttpHeaders => {
    //     const authToken = this.authService.getToken();
    //     let headers: HttpHeaders;
    //     if (authToken) {
    //         headers = new HttpHeaders()
    //             .set('Content-Type', 'application/json')
    //             .set('Authorization', `Bearer ${authToken}`);
    //     } else {
    //         headers = new HttpHeaders()
    //             .set('Content-Type', 'application/json');
    //     }
    //     return headers;
    // }

    protected ErrorResponse(body): ResponseApi {
        return {
            data: undefined,
            status: 'error',
            code: body?.code || 900,
            error: body?.error,
            message: ''
        };
    }
}
