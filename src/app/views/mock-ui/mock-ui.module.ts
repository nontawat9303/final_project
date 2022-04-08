import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockUIRoutingModule } from './mock-ui-routing.module';
import { MockUIComponent } from './mock-ui.component';
import { AddressModule } from 'app/components/address/address.module';
import { TransferModule } from 'app/components/transfer/transfer.module';
import { CheckTransferModule } from 'app/components/check-transfer/check-transfer.module'
import { OpenBillModule } from 'app/components/open-bill/open-bill.module';
import { SummaryBillModule } from 'app/components/summary-bill/summary-bill.module';
import { SummaryOrderModule } from 'app/components/summary-order/summary-order.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AddressModule,
        MockUIRoutingModule,
        TransferModule,
        CheckTransferModule,
        OpenBillModule,
        SummaryBillModule,
        SummaryOrderModule
    ],
    exports: [],
    declarations: [
        MockUIComponent,
        // AddressComponent
    ]
})
export class MockUIModule {

}