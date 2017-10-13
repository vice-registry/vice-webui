import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './models';
import { SettingsService } from './settings.service';
import { UserService } from './user.service';

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const headerObj = {                                                                                                                                                                                 
  headers: new Headers(headerDict), 
};

@Injectable()
export class LoginService {

    constructor(private http: Http, private settingsService: SettingsService, private userService: UserService) { }
    
    login(username: string, password: string): Promise<User> {
        var headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + btoa(username + ':' + password)
        });
        return this.http.get(this.settingsService.getApiurl()+'/user', {headers: headers})
                .toPromise()
                .then((response) => {
                    return response.json() as User
                }).catch(this.handleError);
    }

    create(user: User): Promise<User> {
        var headers = new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json'
        });
        return this.http.post(this.settingsService.getApiurl()+'/user', JSON.stringify(user), {headers: headers})
                .toPromise()
                .then((response) => {
                    return response.json() as User
                }).catch(this.handleError);
    }    
    
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
  
}