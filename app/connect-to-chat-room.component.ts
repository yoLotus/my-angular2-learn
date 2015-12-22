import {Component} from 'angular2/core'

@Component({
  templateUrl: 'static/templates/connect-to-chat-room.html'
})
export class ConnectToChatRoom {
  clickMessage = '';

  enterChatRoom(){
    this.clickMessage = 'Please wait for connection... nous sommes le ' +
      Date().toString();
  }
}
