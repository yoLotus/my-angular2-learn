import {Injectable, OnInit} from 'angular2/core';
import {Message} from './message.interface';

declare var io: any;

@Injectable()
export class SocketService{

  private socket:any;
  private messages: Message[];

  constructor(){
    this.socket = io();
    this.messages = MESSAGES;
    this.socket.on('chat message', msg => {
      this.messages.push({
        content: msg,
        author: AUTHOR
      })
    });
  }

  getMessages(){
    return this.messages;
  }

  emit(msg){
    this.socket.emit('chat message', msg);
  }
}


var AUTHOR = {
  id: 1,
  name: 'etienne'
}

var OTHER = {
  id: 2,
  name: 'other'
}

var MESSAGES: Message[] = [{content: "oui", author: AUTHOR},
                          {content: "non", author: OTHER},
                          {content: "peut-être", author: AUTHOR}];
