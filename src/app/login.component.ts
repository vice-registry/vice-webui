import { Component, OnInit } from '@angular/core';
import { User } from './models';

export class Credentials {
  username: string;
  password: string;
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  hide = true;

  loginCredentials: Credentials = new Credentials();
  registerUser: User = new User();

  ngOnInit(): void {

  }

  login(): void{
    console.info("login!", this.loginCredentials);
  }

  register(): void{
    console.info("register!", this.registerUser);
  }  

}