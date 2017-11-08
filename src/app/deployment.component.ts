import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { Deployment } from './api/model/Deployment';
import { DeploymentService } from './deployment.service';
import { Environment } from './api/model/Environment';
import { EnvironmentService } from './environment.service';
import { Image } from './api/model/Image';
import { ImageService } from './image.service';
import 'rxjs/add/operator/toPromise';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'deployment-list',
    templateUrl: './deployment.component.html',
})

export class DeploymentComponent implements OnInit {

    displayedColumns = ['title', 'imageid', 'environmentId', 'environmentReference', 'actions'];
    deploymentDataSource;
    deployment: Deployment;
    environments: Environment[];    
    images: Image[];

    constructor(private deploymentService: DeploymentService, private imageService: ImageService, private environmentService: EnvironmentService, public snackBar: MatSnackBar) { 
        this.clear();
    }

    ngOnInit(): void {
        this.deploymentDataSource = new DeploymentDataSource(this.deploymentService, this.snackBar);
        this.environmentService.getList().then(res => {
            this.environments = res;
        }, error => {
            {
                this.snackBar.open("Server Error: " + error, "OK");
            }
        });
        this.imageService.getList().then(res => {
            this.images = res;
        }, error => {
            {
                this.snackBar.open("Server Error: " + error, "OK");
            }
        });                   
    }

    store(): void {
        this.deploymentService.store(this.deployment).
            then(environment => {
                this.snackBar.open("Image stored successfully", "OK", { duration: 500 });
                this.deploymentDataSource = new DeploymentDataSource(this.deploymentService, this.snackBar);
                this.clear();                
            },
            error => {
                {
                    this.snackBar.open("Server Error: " + error, "OK");
                }
            });
    }

    delete(deployment: Deployment): void {
        this.deploymentService.delete(deployment).then(result => {
            this.snackBar.open("Image deleted successfully", "OK", { duration: 500 });
            this.deploymentDataSource = new DeploymentDataSource(this.deploymentService, this.snackBar);
        },
        error => {
            {
                this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    }

    clear(): void{
        this.deployment = this.deploymentService.getStub();
    }
    
    edit(deployment: Deployment): void {
        this.deployment = deployment;
    }      

    compareEnvironments(env1: Environment, env2: Environment) {
        return env1 && env2 && env1.id === env2.id;
    }

    compareImages(img1: Image, img2: Image) {
        console.info(img1, img2);
        return img1 && img2 && img1.id === img2.id;
    }

}

export class DeploymentDataSource extends DataSource<Deployment> {

    constructor(private deploymentService: DeploymentService, public snackBar: MatSnackBar) {
        super();
    }

    subject: BehaviorSubject<Deployment[]> = new BehaviorSubject<Deployment[]>([]);

    connect(): Observable<Deployment[]> {
        if (!this.subject.isStopped)
            this.deploymentService.getList().then(res => {
                this.subject.next(res)
            }, error => {
                {
                    this.snackBar.open("Server Error: " + error, "OK");
                }
            });
        return Observable.merge(this.subject);
    }

    disconnect() {
        this.subject.complete();
        this.subject.observers = [];
    }
}