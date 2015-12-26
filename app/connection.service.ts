import {Injectable} from 'angular2/core';
// import {Http} from 'angular2/http';
import {NICKNAMES} from './mock-pseudos';

declare var _:any;

@Injectable()
export class ConnectionService{
  // constructor(private _http: Http){}



  register(pseudo){
    // until I know how to use the http service, just mock it
    if (_.pluck(NICKNAMES, 'name').includes(pseudo)){
      return Promise.resolve(false); // reject ?
    }
    return Promise.resolve(true);
    // return Promise.resolve(false);
    // return this._http.get('/api/users/register?q=' + pseudo);
  }
}
