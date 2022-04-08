import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SummaryOrderComponent } from './summary-order.component';

const routes: Routes = [
  {
      path: '',
      component: SummaryOrderComponent,
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
export class SummaryOrderRoutingModule { }
