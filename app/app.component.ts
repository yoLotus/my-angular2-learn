import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {ConnectToChatRoom} from "./connect-to-chat-room.component"
import {ChatRoom} from "./chat-room.component"

@Component({
  selector: 'my-app',
  templateUrl: '/static/templates/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/connect', name: 'ConnectToChatRoom', component: ConnectToChatRoom, useAsDefault: true},
  {path: '/chat-room', name: 'ChatRoom', component: ChatRoom}
])
export class AppComponent{  }
