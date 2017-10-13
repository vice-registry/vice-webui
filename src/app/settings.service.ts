import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from './models';

@Injectable()
export class SettingsService {

  private apiurlSource = new Subject<string>();
  apiurl$ = this.apiurlSource.asObservable();

  // Service message commands
  changeApiurl(apiurl: string) {
    this.apiurlSource.next(apiurl);
    localStorage.setItem('apiurl', apiurl)
  }

  getApiurl(): string {
    let data = localStorage.getItem('apiurl');
    if (!data) {
      return undefined;
    }
    return data;
  }


}