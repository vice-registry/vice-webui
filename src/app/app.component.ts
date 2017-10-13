import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { User } from './models';
import { UserService } from './user.service';
import { SettingsService } from './settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  user: User;
  apiurl: string;

  constructor(private userService: UserService, private settingsService: SettingsService, private router: Router, public dialog: MatDialog) {
    userService.userchange$.subscribe(
      user => {
        this.user = user;
      });
      settingsService.apiurl$.subscribe(
        apiurl => {
          this.apiurl = apiurl;
        });      
  }

  ngOnInit(): void {
    this.user = this.userService.remember();
    this.apiurl = this.settingsService.getApiurl();
  }

  logout(): void {
    this.user = undefined;
    this.userService.forget();
    this.router.navigate(['/']);
  }

  openSettings(): void {
    let url = "http://localhost:8080/v1"; // default URL
    if(this.settingsService.getApiurl() != null){
      url = this.settingsService.getApiurl();
    }
    let dialogRef = this.dialog.open(SettingsDialog, {
      width: '350px',
      data: { apiurl: url }
    });

    dialogRef.afterClosed().subscribe(apiurl => {
      if(apiurl)
        this.settingsService.changeApiurl(apiurl);
    });
  }

}


@Component({
  selector: 'settings-dialog',
  templateUrl: 'app.components.settings-dialog.html',
})
export class SettingsDialog {

  constructor(
    public dialogRef: MatDialogRef<SettingsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  /*onNoClick(): void {
    this.dialogRef.close();
  }*/

}