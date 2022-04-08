import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShowOrdersComponent } from './show-orders.component';

const routes: Routes = [
  {
      path: '',
      component: ShowOrdersComponent,
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
export class ShowOrdersRoutingModule { }
