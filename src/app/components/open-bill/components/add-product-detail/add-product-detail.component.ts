import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { OpenBillService } from '../../open-bill.service';
import { HttpClient } from '@angular/common/http';
import { OpenBill , AddProduct } from '../../open-bill.interface';

@Component({
  selector: 'app-add-product-detail',
  templateUrl: './add-product-detail.component.html',
  styleUrls: ['./add-product-detail.component.scss']
})
export class AddProductDetailComponent implements OnInit {
  
  @ViewChild('addProductNgForm') addProductNgForm: NgForm;
  
  addProductFrom: FormGroup;
  alert: any;
  data : any;
  // modal : OpenBill;

  amount: number;
  codeProduct: string;
  price: number;
  comment: string;
  model: AddProduct ;

  changePrice: number;

  count:number;
  
  
  constructor(
    private modalService: BsModalService,
    private _formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private api : OpenBillService,
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
    this.http.get<any>(`http://localhost:3000/setItem`).subscribe(response => {
      console.log(response);
      this.data = response.data ;
      console.log("show Data" , this.data);
    })



    this.addProductFrom = this._formBuilder.group({
      codeProduct  : [undefined,Validators.required],
      comment : [''],
      amount : ['',[Validators.min(1),Validators.max(1000),Validators.pattern(/^[0-9]*$/)]],
      price : ['',[Validators.min(1),Validators.pattern(/^-?\d*[.,]?\d{0,2}$/)]]
  });


  }

  initialModel(): void {
    this.model = {
      customerId : 1,
      codeProduct : this.codeProduct ,
      amount : this.amount,
      price : this.price,
      comment : this.comment,
    };
    this.count =this.count+1;

  }

  close(): void {
    this.modalService.hide();
  }

  clearForm(): void
  {
      // Reset the form
      this.addProductNgForm.resetForm();
  }


  openbillFormSubmit(): any
  {
    this.addProductNgForm.onSubmit(undefined);
    if (this.addProductNgForm.valid ) {
      console.log('form submitted', this.addProductNgForm.value);
      this.http.post(`http://localhost:3000/openbill`,this.addProductFrom.value).subscribe(()=>
      {
        console.log('success!');
        console.log('form submitted', this.addProductNgForm);
        // this.initialModel()
        this.modalService.hide();
      })     
    } else {
      console.log('dont success');
      // console.log(this.codeProduct,this.amount);

    }
      // Send your form here using an http request

      // Show a success message (it can also be an error message)
      // and remove it after 5 seconds
      this.alert = {
          type   : 'success',
          message: 'Your request has been delivered! A member of our support staff will respond as soon as possible.'
      };

      setTimeout(() => {
          this.alert = null;
      }, 7000);

      // // Clear the form
      // this.clearForm();
  }

  getPrice(id){
    console.log('test');
    // this.changePrice = this.
  }

}


