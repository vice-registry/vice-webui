import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Deployment } from './api/model/Deployment';
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
export class DeploymentService {
    
    constructor(private http: Http, private settingsService: SettingsService, private userService: UserService) { }
    
    getList(): Promise<Deployment[]> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth()
        });        
        return this.http.get(this.settingsService.getApiurl()+'/deployments', {headers: headers})
                .toPromise()
                .then((response) => {
                    return response.json() as Deployment[]
                }).catch(this.handleError);
    }
    
    
    getStub(): Deployment {
        var deployment: Deployment = {
            id: ''
        };
        return deployment;
    }

    store(deployment: Deployment): Promise<Deployment> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
            'Content-type': 'application/json'
        });
        if (deployment.id) {
            console.error("Option not allowed!");
            // update
            /*return this.http.put(this.settingsService.getApiurl() + '/deployments', JSON.stringify(deployment), { headers: headers })
                .toPromise()
                .then((response) => {
                    return response.json() as Deployment
                }).catch(this.handleError);*/
        } else {
            // create
            return this.http.post(this.settingsService.getApiurl() + '/deploy', JSON.stringify(deployment), { headers: headers })
                .toPromise()
                .then((response) => {
                    return response.json() as Deployment
                }).catch(this.handleError);
        }
    }

    delete(deployment: Deployment): Promise<any> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
        });

        return this.http.delete(this.settingsService.getApiurl() + '/deployment/' + deployment.id, { headers: headers })
            .toPromise()
            .then((response) => {
                return response
            }).catch(this.handleError);

    }    

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
  
}