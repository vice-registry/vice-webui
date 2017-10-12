import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models';
import { LoginService } from './login.service';
import { UserService } from './user.service';

export class Credentials {
  username: string;
  password: string;
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  hide = true;
  storeCredentials = true;

  loginCredentials: Credentials = new Credentials();
  registerUser: User = new User();

  constructor(
    private loginService: LoginService, 
    private userService: UserService,
    private router: Router
  ) { 
    
  }

  login(): void {
    var user = this.loginService.login(
      this.loginCredentials.username,
      this.loginCredentials.password)
      .then(user => {
        this.userService.change(user, this.storeCredentials);
        this.router.navigate(['/']);
      });
  }

  register(): void {
    console.info("register!", this.registerUser);
    this.loginService.create(this.registerUser).
      then(user => {
        this.userService.change(user, true);
        this.router.navigate(['/']);
      });
  }

}