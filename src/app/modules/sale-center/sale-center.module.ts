import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'app/shared/shared.module';
import { ContactInfoComponent } from 'app/modules/admin/apps/chat/contact-info/contact-info.component';
import { ProfileComponent } from 'app/modules/admin/apps/chat/profile/profile.component';
import { saleCenterRoutes } from 'app/modules/sale-center/sale-center.routing';
import { SaleCenterComponent } from 'app/modules/sale-center/sale-center.component';
import { ChatsComponent } from 'app/modules/sale-center/chats/chats.component';
import { NewChatComponent } from 'app/modules/sale-center/new-chat/new-chat.component';
import { ConversationComponent } from 'app/modules/sale-center/conversation/conversation.component';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
    declarations: [
        SaleCenterComponent,
        ChatsComponent,
        // ContactInfoComponent,
        ConversationComponent,
        NewChatComponent,
        // ProfileComponent
    ],
    imports: [
        RouterModule.forChild(saleCenterRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatSidenavModule,
        MatStepperModule,
        SharedModule
    ]
})
export class SaleCenterModule {
}
