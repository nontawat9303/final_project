import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'; 

@Component({
  selector: 'app-check-transfer',
  templateUrl: './check-transfer.component.html',
  styleUrls: ['./check-transfer.component.scss']
})
export class CheckTransferComponent implements OnInit {
 

  data : any;
  bank : string = undefined;
  date: any;
  payAmount: number;
  paySlip: ArrayBuffer;
  slip: any;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer, 
  ) { }

    

  

  ngOnInit(): void {
    
    this.http.get<any>(`http://localhost:3000/transfer`).subscribe(response => {
      console.log(response);
      this.data = response.data ;
      console.log("show Data" , this.data);
      this.setModel();
      
    })
    
  }

   _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
       binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }

  sanitize( url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  setModel(){
    this.bank = this.data[0].bank;
    this.date = this.data[0].createdate;
    // this.date.moment().format('YYYY-MM-DD')
    this.payAmount = this.data[0].payAmount;
    this.paySlip = this.data[0].paySlip;
    this.slip = this._arrayBufferToBase64(this.paySlip)
    console.log(this.slip);
    // this.paySlip = 'data:image/png;base64' + this.paySlip;
    // this.paySlip = this.domSanitizer.bypassSecurityTrustUrl( this.data[0].paySlip);
  }

}
