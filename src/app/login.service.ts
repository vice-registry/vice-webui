import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './models';

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
    private apiUrl = 'http://localhost:8080/v1/user';

    constructor(private http: Http) { }
    
    login(username: string, password: string): Promise<User> {
        var headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + btoa(username + ':' + password)
        });
        return this.http.get(this.apiUrl, {headers: headers})
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
        return this.http.post(this.apiUrl, JSON.stringify(user), {headers: headers})
                .toPromise()
                .then((response) => {
                    return response.json() as User
                }).catch(this.handleError);
    }    
    
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
  
}