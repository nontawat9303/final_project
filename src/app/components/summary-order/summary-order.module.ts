import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SummaryOrderComponent } from './summary-order.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import { SummaryOrderRoutingModule } from './summary-order-routing.module';
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
    SummaryOrderComponent
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
    SummaryOrderRoutingModule
  ],
  exports: [
    SummaryOrderComponent
  ],
})
export class SummaryOrderModule { }
