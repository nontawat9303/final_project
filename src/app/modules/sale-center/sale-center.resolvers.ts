import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SaleCenterService } from 'app/modules/sale-center/sale-center.service';
import { Chat, Contact, Profile } from 'app/modules/sale-center/sale-center.types';

@Injectable({
    providedIn: 'root'
})
export class SaleCenterChatsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _service: SaleCenterService,
        private _router: Router
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chat[]> | any {
        return this._service.getChats();
    }
}

@Injectable({
    providedIn: 'root'
})
export class SaleCenterChatResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _service: SaleCenterService,
        private _router: Router
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chat> {
        return this._service.getChatById(route.paramMap.get('id'))
            .pipe(
                // Error here means the requested chat is not available
                catchError((error) => {

                    // Log the error
                    console.error(error);

                    // Get the parent url
                    const parentUrl = state.url.split('/').slice(0, -1).join('/');

                    // Navigate to there
                    this._router.navigateByUrl(parentUrl);

                    // Throw an error
                    return throwError(error);
                })
            );
    }
}

@Injectable({
    providedIn: 'root'
})
export class SaleCenterContactsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _service: SaleCenterService,
        private _router: Router
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact[]> | any {
        return this._service.getContacts();
    }
}

@Injectable({
    providedIn: 'root'
})
export class SaleCenterProfileResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _service: SaleCenterService,
        private _router: Router
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> | any {
        return this._service.getProfile();
    }
}
