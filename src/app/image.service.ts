import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './models';
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
export class ImageService {

    constructor(private http: Http, private settingsService: SettingsService, private userService: UserService) { }
    
    getList(): Promise<Image[]> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth()
        });
        return this.http.get(this.settingsService.getApiurl()+'/images', {headers: headers})
                .toPromise()
                .then((response) => {
                    return response.json() as Image[]
                }).catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
  
}