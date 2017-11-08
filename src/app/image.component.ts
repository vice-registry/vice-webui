import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { Injectable } from '@angular/core';
import { Image } from './api/model/Image';
import { Environment } from './api/model/Environment';
import { EnvironmentService } from './environment.service';
import { ImageService } from './image.service';
import 'rxjs/add/operator/toPromise';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'image-list',
    templateUrl: './image.component.html',
})

export class ImageComponent implements OnInit {

    displayedColumns = ['title', 'environmentReference', 'origin', 'managementlayer', 'runtimetechnology', 'imported', 'actions'];
    imagesDataSource;
    image: Image;
    environments: Environment[];

    constructor(private imageService: ImageService, public snackBar: MatSnackBar, private environmentService: EnvironmentService) {
        this.clear();
    }

    ngOnInit(): void {
        this.imagesDataSource = new ImagesDataSource(this.imageService, this.snackBar);
        this.environmentService.getList().then(res => {
            this.environments = res;
        }, error => {
            {
                this.snackBar.open("Server Error: " + error, "OK");
            }
        });        
        
    }

    store(): void {
        this.imageService.store(this.image).
            then(image => {
                this.snackBar.open("Image stored successfully", "OK", { duration: 500 });
                this.imagesDataSource = new ImagesDataSource(this.imageService, this.snackBar);
                this.clear();                
            },
            error => {
                {
                    this.snackBar.open("Server Error: " + error, "OK");
                }
            });
    }

    delete(image: Image): void {
        this.imageService.delete(image).then(result => {
            this.snackBar.open("Image deleted successfully", "OK", { duration: 500 });
            this.imagesDataSource = new ImagesDataSource(this.imageService, this.snackBar);
        },
        error => {
            {
                this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    }

    clear(): void{
        this.image = this.imageService.getStub();
    }
    
    edit(image: Image): void {
        this.image = image;
    }      

    compareEnvironments(env1: Environment, env2: Environment) {
        return env1 && env2 && env1.id === env2.id;
    }

}

export class ImagesDataSource extends DataSource<Image> {

    constructor(private imageService: ImageService,  public snackBar: MatSnackBar) {
        super();
    }

    subject: BehaviorSubject<Image[]> = new BehaviorSubject<Image[]>([]);

    connect(): Observable<Image[]> {
        if (!this.subject.isStopped)
            this.imageService.getList().then(res => {
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