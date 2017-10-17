import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { SettingsService } from './settings.service';
import { UserService } from './user.service';

import { Environment } from './api/model/Environment';
import { Credentials } from './api/model/Credentials';
import { RuntimeTechnology } from './api/model/RuntimeTechnology';
import { ManagementLayer } from './api/model/ManagementLayer';


const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
}

const headerObj = {
    headers: new Headers(headerDict),
};

@Injectable()
export class EnvironmentService {

    constructor(private http: Http, private settingsService: SettingsService, private userService: UserService) { }

    getList(): Promise<Environment[]> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth()
        });
        return this.http.get(this.settingsService.getApiurl() + '/environments', { headers: headers })
            .toPromise()
            .then((response) => {
                return response.json() as Environment[]
            }).catch(this.handleError);
    }

    getStub(): Environment {
        var credentials: Credentials = {
            specifics: {}
        };
        var runtimetechnology: RuntimeTechnology = {
        };
        var managementlayer: ManagementLayer = {
        };
        var environment: Environment = {
            id: '',
            userid: '',
            credentials: credentials,
            runtimetechnology: runtimetechnology,
            managementlayer: managementlayer
        };
        return environment;
    }

    store(environment: Environment): Promise<Environment> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
            'Content-type': 'application/json'
        });
        if (environment.id) {
            // update
            return this.http.put(this.settingsService.getApiurl() + '/environments', JSON.stringify(environment), { headers: headers })
                .toPromise()
                .then((response) => {
                    return response.json() as Environment
                }).catch(this.handleError);
        } else {
            // create
            return this.http.post(this.settingsService.getApiurl() + '/environments', JSON.stringify(environment), { headers: headers })
                .toPromise()
                .then((response) => {
                    return response.json() as Environment
                }).catch(this.handleError);
        }
    }

    delete(environment: Environment): Promise<any> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
        });

        return this.http.delete(this.settingsService.getApiurl() + '/environment/' + environment.id, { headers: headers })
            .toPromise()
            .then((response) => {
                return response
            }).catch(this.handleError);

    }    

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}