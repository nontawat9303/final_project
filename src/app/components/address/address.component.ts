import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { split } from 'lodash';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @ViewChild('addressNgForm') addressNgForm: NgForm;
  // @ViewChild('deliveryForm') deliveryNgForm: NgForm;

  fullAdress: string = undefined;
  alert: any;
  addressForm: FormGroup;
  deliveryForm: FormGroup;
  name: string;
  phone: string;
  province: string;
  subdistrict: string;
  zipcode: string;
  district: string;
  singleAddress: string;
  default: ""
  deliveryFormSubmit: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    // this.name = "";
    // this.phone = "";
    // this.province = "";
    // this.subdistrict = "";
    // this.zipcode = "";
    // this.district = "";
    // this.singleAddress = "";

    this.addressForm = this._formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.maxLength(10)]],
      province: ['', Validators.required],
      subdistrict: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.maxLength(5), Validators.minLength(5)],],
      district: ['', Validators.required],
      singleAddress: ['', Validators.required]
    });

    this.deliveryForm = this._formBuilder.group({
      typeDelivery: [undefined, Validators.required],
      delivery: [undefined, Validators.required],
      typePrint: [undefined, Validators.required]
    });

  }

  splitAddress() {
    debugger;
    if (!this.fullAdress) return;
    const Splitter = require('./splitter');
    const result = Splitter.split(this.fullAdress);
    // console.log('result :', { address, result });
    console.log({ result });

    this.addressForm.controls.name.setValue(result.name);
    this.addressForm.controls.singleAddress.setValue(result.address);
    this.addressForm.controls.phone.setValue(result.phone);
    this.addressForm.controls.subdistrict.setValue(result.subdistrict);
    this.addressForm.controls.district.setValue(result.district);
    this.addressForm.controls.province.setValue(result.province);
    this.addressForm.controls.zipcode.setValue(result.zipcode);
    // this.addressNgForm.ngSubmit();
    //text input
    this.name = result.name
    this.singleAddress = result.address
    this.phone = result.phone
    this.zipcode = result.zipcode
    this.subdistrict = result.subdistrict
    this.province = result.province
    this.district = result.district

  }

  addressSubmit(): void {
    if (this.addressForm.invalid) {
      console.log('form submitted', this.addressForm);
      return;
    }
    // this.isSubmitted = true;
  }

  clearForm(): void {
    // Reset the form
    // this.addressNgForm.resetForm();
    this.fullAdress = undefined;
    this.addressForm.reset();
  }


  onDeliveryFormSubmit(): void {
    this.addressNgForm.onSubmit(undefined);
    this.deliveryFormSubmit = true;
    console.log('form submitted', this.addressForm.value);
    if (this.addressForm.valid && this.deliveryForm.valid) {
      this.http.put(`http://localhost:3000/address`,this.addressForm.value).subscribe(()=>
      {
        console.log('form submitted', this.addressForm);
        console.log('success!');
        alert('pack');
        this.router.navigate(['/summary-order', ]);
      })     

    } else {

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
