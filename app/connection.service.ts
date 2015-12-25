import {Injectable} from 'angular2/core';

@Injectable()
export class ConnectionService{
  checkNicknameAvailabality(pseudo){
    return Promise.resolve(false);
  }
}
