import {Component} from 'angular2/core';
import {SocketService} from './socket.service';
import {Author} from './author.interface';

@Component({
  // template: '<h1>Chat room</h1>'
  templateUrl: '/static/templates/chat-room.html',
  providers: [SocketService]
})
export class ChatRoom{
  constructor(private _socket: SocketService){
    this.author = AUTHOR;
  }

  private author:Author;
  public editedMessage:string = '';

  sendMessage(){
    this._socket.emit(this.editedMessage);
    this.editedMessage = '';
  }

  messages(){
    return this._socket.getMessages();
  }
}

var AUTHOR: Author = {
  id: 1,
  name: 'etienne'
};
