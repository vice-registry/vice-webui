import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from './api/model/User';

@Injectable()
export class UserService {

  private userchangeSource = new Subject<User>();
  userchange$ = this.userchangeSource.asObservable();

  // Service message commands
  change(user: User, store: boolean = false) {
    this.userchangeSource.next(user);
    if (store) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  forget() {
    localStorage.removeItem('user');
  }

  remember(): User {
    let data = JSON.parse(localStorage.getItem('user'));
    if (!data) {
      var user: User = {
        email: "",
        username: "",
        password: "",
        fullname: "",
        id: ""
      };            
      return user;
    }

    var user: User = {
      email: data['email'],
      username: data['username'],
      password: data['password'],
      fullname: data['fullname'],
      id: data['id']
    };

    return user;
  }

  getBasicAuth(): string {
    let user = this.remember();
    return btoa(user.username + ':' + user.password);
  }

}