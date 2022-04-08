import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Picture } from '../../shared/interfaces/common.interface';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/ja';
import 'moment/locale/fr';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'TH'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class TransferComponent implements OnInit {

  @ViewChild('transferNgForm') transferNgForm: NgForm;

  alert: any;
  transferForm: FormGroup;
  transferSubmit: boolean = false;

  bankAccount : any;
  account : string;

  fileKbank: any;
  imageKbank: Picture;
  @ViewChild('fileKbank') inputFileKbank: ElementRef;

  yourFile: File;
  


  constructor(
    private cdr: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private _adapter: DateAdapter<any>
  ) {

  }

  ngOnInit(): void {
    // this._adapter.setLocale('En');

    this.http.get<any>(`http://localhost:3000/setBank`).subscribe(response => {
      console.log(response);
      this.bankAccount = response.data ;
      console.log("show Data" , this.bankAccount);
    })


    this.transferForm = this._formBuilder.group({
      bank: ['', Validators.required],
      createdate: ['', [Validators.required]],
      payAmount: ['', [Validators.required, Validators.pattern(/^-?\d*[.,]?\d{0,2}$/)]],
      paySlip: [undefined, Validators.required]
    });

  }



  getFile(fileInput) {
    this.yourFile = fileInput.target.files[0];
  }

  clickHandle(): void {
    this.inputFileKbank.nativeElement.click();
  }

  changeHandle(event: any): void {
    if (event.target && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileKbank = file;


      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = {
          base64: reader.result.toString(),
          name: file.name,
          contentType: file.type,
          size: file.size,
        };

        this.imageKbank = img;


        this.cdr.markForCheck();
      };
      reader.onerror = (error) => {
        console.error('Error: ', error);
      };
    } else {

      this.fileKbank = undefined;
      this.imageKbank = undefined;

      this.cdr.markForCheck();
    }
  }

  clearForm(): void {
    // Reset the form
    this.transferForm.reset();
  }

  transferFormSubmit(): void {
    this.transferNgForm.onSubmit(undefined);
    this.transferSubmit = true;
    console.log('form submitted', this.transferForm.value);
    if (this.transferForm.valid) {
      this.http.put(`http://localhost:3000/transfer`,this.transferForm.value).subscribe(()=>
      {
        console.log('form submitted', this.transferForm);
        console.log('success!');
        this.router.navigate(['/check-transfer', ]);
      })     

    } else {
      console.log('dont success!');

    }
    // Send your form here using an http request

    // Show a success message (it can also be an error message)
    // and remove it after 5 seconds
    this.alert = {
      type: 'success',
      message: 'Your request has been delivered! A member of our support staff will respond as soon as possible.'
    };

    setTimeout(() => {
      this.alert = null;
    }, 7000);

    // Clear the form
    // this.clearForm();
  }
}
