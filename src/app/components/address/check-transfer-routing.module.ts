import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address.component';

const routes: Routes = [
  {
      path: '',
      component: AddressComponent,
      data: {
          title: 'TransferUI',
          hidePageHeader: false
      }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModule { }
