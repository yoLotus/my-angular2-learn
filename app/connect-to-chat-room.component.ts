import {Component} from 'angular2/core';
import {ConnectionService} from './connection.service';

@Component({
  templateUrl: 'static/templates/connect-to-chat-room.html',
  providers: [ConnectionService]
})
export class ConnectToChatRoom {
  clickMessage = '';

  constructor(private _connectionService: ConnectionService){}

  private nickname: string;

  enterChatRoom(){
    this.clickMessage = 'Please wait for connection...';
    this._connectionService.checkNicknameAvailabality(this.nickname)
      .then(availability => {
        if (availability)
          this.clickMessage = 'About to enter';
        else
          this.clickMessage = 'This nickname is already used, take an other one';
      });
  }
}
