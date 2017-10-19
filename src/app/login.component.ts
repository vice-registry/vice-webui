import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './api/model/User';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import {MatSnackBar} from '@angular/material';

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
  registerUser: User = {
    username: "",
    password: "",
    email: "",
    fullname: ""
  };

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router, 
    public snackBar: MatSnackBar
  ) {

  }

  login(): void {
    var user = this.loginService.login(
      this.loginCredentials.username,
      this.loginCredentials.password)
      .then(user => {
        this.userService.change(user, this.storeCredentials);
        this.router.navigate(['/']);
      },
      error => {
        {
          this.snackBar.open("Server Error: " + error, "OK");
        }
      });
  }

  register(): void {
    this.loginService.create(this.registerUser).
      then(user => {
        this.userService.change(user, true);
        this.router.navigate(['/']);
      },
      error => {
        {
          this.snackBar.open("Server Error: " + error, "OK");
        }
      });
  }

}