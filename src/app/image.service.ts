import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './models';


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
    private apiUrl = 'http://localhost:8080/v1/images/';  // URL to web api
    private headers = new Headers({
        'Accept': 'application/json',
        'Authorization': 'Basic YWRtaW46YWRtaW4='
    });

    constructor(private http: Http) { }
    
    getImages(): Promise<Image[]> {
        return this.http.get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then((response) => {
                    return response.json() as Image[]
                    //console.info(response.json());
                }).catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
  
}