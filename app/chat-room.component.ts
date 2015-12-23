import {Component} from 'angular2/core'

interface Message {
  content: string;
}

@Component({
  // template: '<h1>Chat room</h1>'
  templateUrl: '/static/templates/chat-room.html'
})
export class ChatRoom{
  constructor(){}

  public messages:Message[] = MESSAGES;
  public editedMessage:string = '';

  sendMessage(){
    this.messages.push({content: this.editedMessage});
    this.editedMessage = '';
  }
}

var MESSAGES: Message[] = [{content: "oui"},
                          {content: "non"},
                          {content: "peut-être"}];
