import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkService } from 'app/shared/services/network.service'; 
import { HttpErrorHandler } from 'app/shared/services/http-error-handler.service';
import { ResponseApi , Criteria } from 'app/shared/interfaces/common.interface';
import { Observable , Subject} from 'rxjs';
import { Router } from '@angular/router';
import { AddProduct, OpenBill } from './open-bill.interface';
import { Server } from '../../../../backend/server.js';



@Injectable({
  providedIn: 'root'
})
export class OpenBillService extends NetworkService {

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }
  
  //กำหนด URL API ที่ต้องการดึงข้อมูล
  apiUrl = `openbill`;
  

  

  constructor(
    private http : HttpClient,
    protected router: Router,
    protected errorHandler: HttpErrorHandler
    ) { super('OpenBillService', router, http, errorHandler);}
  

    //สร้าง function สำหรับเรียกดูข้อมูลทั้งหมด
    fetchAll():Observable<any> {
      return this.get(`${this.apiUrl}`);
    }

    //สร้าง function สำหรับเรียกดูข้อมูลครั้งละ 1 รายการ
    fetchOne(id: string): Observable<any> {
      return this.get(`${this.apiUrl}/${id}`);
    }

    create = (item: AddProduct): Observable<any> => {
      // const request = this.cleanData(item);
      return this.post(`${this.apiUrl}`, item);
    }
  
    // update = (item: ): Observable<ResponseApi> => {
    //   const request = this.cleanData(item);
    //   return this.put(`${this.apiUrl}/${request._id}`, request);
    // }
  
    // remove = (request: ): Observable<ResponseApi> => {
    //   return this.delete(`${this.apiUrl}/${request._id}`);
    // }

    // private cleanData(item: Job): Job {
    //   if (item._id === undefined) {
    //     delete item._id;
    //   }
    //   delete item.created;
    //   delete item.updated;
    //   return item;
    // }
    // delete(id:number){
    //   return this.http.delete(`${this.URL_API}?id=${id}`);
    // }
    
}