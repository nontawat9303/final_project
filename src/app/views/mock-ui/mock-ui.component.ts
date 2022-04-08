import {
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    Component,
    ViewChild,
    ElementRef,
    OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-mock-ui',
    templateUrl: './mock-ui.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MockUIComponent implements OnInit {
    constructor(
        private cdr: ChangeDetectorRef,
        private formBuilder: FormBuilder,
        private router: Router,
        private actRoute: ActivatedRoute
    ) {

    }

    ngOnInit(): void {

    }

    ngAfterViewInit() {

    }
}
