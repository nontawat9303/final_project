import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  apiUrl = `transdfer`;


  // fetchAll():Observable<any> {
  //   return this.get(`${this.apiUrl}`);
  // }


  // fetchOne(id: string): Observable<any> {
  //   return this.get(`${this.apiUrl}/${id}`);
  // }

  // create = (item: AddProduct): Observable<any> => {
  //   // const request = this.cleanData(item);
  //   return this.post(`${this.apiUrl}`, item);
  // }

  // update = (item: ): Observable<ResponseApi> => {
  //   const request = this.cleanData(item);
  //   return this.put(`${this.apiUrl}/${request._id}`, request);
  // }

  // remove = (request: ): Observable<ResponseApi> => {
  //   return this.delete(`${this.apiUrl}/${request._id}`);
  // }
}
