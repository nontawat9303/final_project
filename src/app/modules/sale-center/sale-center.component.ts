import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sale-center',
    templateUrl: './sale-center.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaleCenterComponent {
    /**
     * Constructor
     */
    constructor() {
    }
}
