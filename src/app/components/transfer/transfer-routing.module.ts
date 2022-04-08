import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransferComponent } from './transfer.component';

const routes: Routes = [
  {
      path: '',
      component: TransferComponent,
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
export class TransferRoutingModule { }
