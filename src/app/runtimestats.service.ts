import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RuntimeStats } from './api/model/RuntimeStats';
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
export class RuntimestatsService {

    constructor(private http: Http, private settingsService: SettingsService, private userService: UserService) { }
    
    get(): Promise<RuntimeStats> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth()
        });        
        return this.http.get(this.settingsService.getApiurl()+'/runtimestats', {headers: headers})
                .toPromise()
                .then((response) => {
                    return response.json() as RuntimeStats
                }).catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
  
}