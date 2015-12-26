import {Component} from 'angular2/core';
import {ConnectionService} from './connection.service';
import {Router} from 'angular2/router';

@Component({
  templateUrl: 'static/templates/connect-to-chat-room.html',
  providers: [ConnectionService]
})
export class ConnectToChatRoom {
  clickMessage = '';

  constructor(private _connectionService: ConnectionService, private _router: Router){}

  private nickname: string;

  enterChatRoom(){
    this.clickMessage = 'Please wait for connection...';
    this._connectionService.register(this.nickname)
      .then(availability => {
        if (availability){
          this.clickMessage = 'About to enter';
          this._router.navigate( ['ChatRoom', {}]);
        }
        else
          this.clickMessage = 'This nickname is already used, take an other one';
      });
  }
}
