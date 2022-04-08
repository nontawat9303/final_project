import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AddProductDetailComponent } from "./components/add-product-detail/add-product-detail.component"
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OpenBillService } from './open-bill.service';
import { AddProduct } from './open-bill.interface';
import { Observable , Subject} from 'rxjs';



@Component({
  selector: 'app-open-bill',
  templateUrl: './open-bill.component.html',
  styleUrls: ['./open-bill.component.scss']
})
export class OpenBillComponent implements OnInit {

   _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  bsPermissionsModalRef: BsModalRef<AddProductDetailComponent>;


  alert : any;
  item : true;
  model : AddProductDetailComponent["model"];
  count: AddProductDetailComponent["count"];

  
  displayedColumns: string[] = ['name', 'price', 'amount' , 'action'];
  dataSource = undefined;
  data: any;

  // calculator
  sumPrice : number = 0;
  deliver : number = 0.0;
  discount : number = 0;


  constructor(
    private modalService: BsModalService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    private api: OpenBillService
  ) { }

  ngOnInit(){
    this.refreshNeeded$
    .subscribe(()=>{
      this.getList();
    })
    this.getList();


  }

  private getList(){
    this.http.get<any>(`http://localhost:3000/openbill`).subscribe(response => {
      console.log(response);
      this.dataSource = response.data ;
      console.log("show Data" , this.dataSource);
      // this.dataSource = this.data;
      // console.log(this.dataSource);
      // for (let i = 0; i < this.data.length ; i++) {
      //   this.sumPrice = (this.sumPrice + (this.data[i].price*this.data[i].amount));
      // }
      // if(this.sumPrice > 500){
      //   this.discount = 100;
      //   this.sumPrice =  this.sumPrice + this.deliver - this.discount
      //   if( this.sumPrice <= 0 ){
      //     this.sumPrice = 0
      // }

      // }
      console.log('price',this.sumPrice);
      
    })


  }
  


  addProduct(): void {
    this.bsPermissionsModalRef = this.modalService.show(
      AddProductDetailComponent,
      {
        class: "gray modal-lg",
        ignoreBackdropClick: true,
      }
    );
  }

  removeItem(id){
    this.data = this.data.filter(u => u.id !== id);
    this.http.delete<any>(`http://localhost:3000/openbill`, {body:id}).subscribe(response => {
      console.log('delete success');
    })

  }

  onSubmit(): void
  {
    if (this.data.length == 0) {
      console.log('dont success');
      alert ('กรุณาเพิ่มรายการ');
    } else {

      console.log('success');
      this.router.navigate(['/transfer', ]);

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

  

}
