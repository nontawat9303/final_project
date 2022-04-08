import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { TransferComponent } from './transfer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransferRoutingModule } from './transfer-routing.module'


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
    TransferComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
     ReactiveFormsModule,
     TransferRoutingModule
  ],
  providers: [  
    MatDatepickerModule,  
  ],
  exports: [
    TransferComponent
  ],
})
export class TransferModule { }