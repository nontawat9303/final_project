import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CheckTransferComponent } from './check-transfer.component';

const routes: Routes = [
  {
      path: '',
      component: CheckTransferComponent,
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
export class CheckTransferRoutingModule { }
