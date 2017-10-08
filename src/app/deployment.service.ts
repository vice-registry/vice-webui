import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Deployment } from './models';


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
    private apiUrl = 'http://localhost:8080/v1/deployments/';
    private headers = new Headers({
        'Accept': 'application/json',
        'Authorization': 'Basic YWRtaW46YWRtaW4='
    });

    constructor(private http: Http) { }
    
    getList(): Promise<Deployment[]> {
        return this.http.get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then((response) => {
                    return response.json() as Deployment[]
                }).catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
  
}