import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'error-404',
    templateUrl: './error-404.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error404Component {
    /**
     * Constructor
     */
    constructor(router: Router) {
        // router.events.subscribe((val) => {
        //     // see also 
        //     console.log(val)
        // });
        debugger;
    }
}
