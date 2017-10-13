import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { User } from './models';
 
@Injectable()
export class UserService {
 
   private userchangeSource = new Subject<User>();
   userchange$ = this.userchangeSource.asObservable();
 
  // Service message commands
  change(user: User, store: boolean = false) {
     this.userchangeSource.next(user);
     if(store){
      localStorage.setItem('user',JSON.stringify(user))
     }
  }

  forget(){
    localStorage.removeItem('user');
  }

  remember() : User{
    let data = JSON.parse(localStorage.getItem('user'));
    if(!data){
  		return undefined;
  	}
    var user = new User();
    user.email = data['email'];
    user.username = data['username'];
    user.password = data['password'];
    user.fullname = data['fullname'];
    user.id = data['id'];
    return user;
  }

  getBasicAuth(): string{
    let user = this.remember();
    return btoa(user.username + ':' + user.password);
  }

}