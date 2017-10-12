import { Component, OnInit } from '@angular/core';
import { User } from './models';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  user: User;

  constructor(private userService: UserService, private router: Router) {
    userService.userchange$.subscribe(
      user => {
        this.user = user;
      });
  }

  ngOnInit(): void {
    this.user = this.userService.remember();
  }

  logout(): void {
    this.user = undefined;
    this.userService.forget();
    this.router.navigate(['/']);
  }

}