import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {ConnectToChatRoom} from "./connect-to-chat-room.component"
import {ChatRoom} from "./chat-room.component"

@Component({
  selector: 'my-app',
  template: `
    <h1>My very SECOND angular 2 app</h1>
    <a [routerLink]="['ConnectToChatRoom']">Connect To Chat Room</a>
    <a [routerLink]="['ChatRoom']">Chat Room</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/connect', name: 'ConnectToChatRoom', component: ConnectToChatRoom, useAsDefault: true},
  {path: '/chat-room', name: 'ChatRoom', component: ChatRoom}
])
export class AppComponent{  }
