import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './api/model/Image';
import { Environment } from './api/model/Environment';
import { Credentials } from './api/model/Credentials';
import { RuntimeTechnology } from './api/model/RuntimeTechnology';
import { ManagementLayer } from './api/model/ManagementLayer';
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
    
    getStub(): Image {
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
        var image: Image = {
            id: '',
            userid: ''
        };
        return image;
    }

    store(image: Image): Promise<Image> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
            'Content-type': 'application/json'
        });
        if (image.id) {
            // update
            return this.http.put(this.settingsService.getApiurl() + '/images', JSON.stringify(image), { headers: headers })
                .toPromise()
                .then((response) => {
                    return response.json() as Image
                }).catch(this.handleError);
        } else {
            // create
            return this.http.post(this.settingsService.getApiurl() + '/images', JSON.stringify(image), { headers: headers })
                .toPromise()
                .then((response) => {
                    return response.json() as Image
                }).catch(this.handleError);
        }
    }

    delete(image: Image): Promise<any> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
        });

        return this.http.delete(this.settingsService.getApiurl() + '/image/' + image.id, { headers: headers })
            .toPromise()
            .then((response) => {
                return response
            }).catch(this.handleError);

    }    

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
  
}