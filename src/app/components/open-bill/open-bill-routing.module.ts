import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OpenBillComponent } from './open-bill.component';

const routes: Routes = [
  {
      path: '',
      component: OpenBillComponent,
      data: {
          title: 'OpenBillUI',
          hidePageHeader: false
      }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenBillRoutingModule { }
