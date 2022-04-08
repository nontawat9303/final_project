import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Showbill } from './show-orders.interface';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.scss']
})
export class ShowOrdersComponent implements OnInit {

  

  displayedColumns: string[] = ['name', 'price', 'amount' , 'action'];

  dataSource = undefined;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get<any>(`http://localhost:3000/openbill`).subscribe(response => {
      console.log(response);
      this.dataSource = response.data ;
      console.log("show Data" , this.dataSource);

      
    })
  }

}
