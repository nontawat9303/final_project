import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table' 
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import { ShowOrdersComponent } from './show-orders.component';
import { ShowOrdersRoutingModule } from './show-orders-routing.module';
import { MatCardModule} from '@angular/material/card';


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
    ShowOrdersComponent
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
    ShowOrdersRoutingModule,
    MatCardModule,
    MatTableModule,


  ],
  exports: [
    ShowOrdersComponent,
  ],
})
export class ShowOrdersModule { }
