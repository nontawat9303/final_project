import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OpenBillComponent } from './open-bill.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import { AddProductDetailComponent } from './components/add-product-detail/add-product-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpenBillRoutingModule } from './open-bill-routing.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { OpenBillService } from './open-bill.service';
import {MatTableModule} from '@angular/material/table';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


// const Addressroutes: Routes = [
//   {
//       path: '',
//       component: AddressComponent,
//       // data: {
//       //     title: 'Address',
//       //     hidePageHeader: true
//       // }
//   }
// ];

@NgModule({
  declarations: [
    OpenBillComponent,
    AddProductDetailComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(Addressroutes),
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    OpenBillRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    MatTableModule
    
  ],
  exports: [
    OpenBillComponent 
  ],
  providers: [
    OpenBillService
  ]

})
export class OpenBillModule { }
