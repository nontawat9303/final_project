import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MockUIComponent } from '../mock-ui/mock-ui.component';

const routes: Routes = [
    {
        path: '',
        component: MockUIComponent,
        data: {
            title: 'MockUI',
            hidePageHeader: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MockUIRoutingModule { }
