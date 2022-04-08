import { Route } from '@angular/router';
import { SaleCenterChatResolver, SaleCenterChatsResolver, SaleCenterContactsResolver, SaleCenterProfileResolver } from 'app/modules/sale-center/sale-center.resolvers';
import { SaleCenterComponent } from 'app/modules/sale-center/sale-center.component';
import { ChatsComponent } from 'app/modules/sale-center/chats/chats.component';
import { ConversationComponent } from 'app/modules/sale-center/conversation/conversation.component';

export const saleCenterRoutes: Route[] = [
    {
        path: '',
        component: SaleCenterComponent,
        resolve: {
            chats: SaleCenterChatsResolver,
            contacts: SaleCenterContactsResolver,
            profile: SaleCenterProfileResolver
        },
        children: [
            {
                path: '',
                component: ChatsComponent,
                children: [
                    {
                        path: '',
                        component: ConversationComponent,
                        children: [
                            {
                                path: ':id',
                                resolve: {
                                    conversation: SaleCenterChatResolver
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
