import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Image } from './models';
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

    displayedColumns = ['id', 'environmentReference', 'imported'];
    imagesDataSource;

    constructor(private imageService: ImageService) { }

    ngOnInit(): void {
        this.imagesDataSource = new ImagesDataSource(this.imageService);
    }
}

export class ImagesDataSource extends DataSource<Image> {

    constructor(private imageService: ImageService) {
        super();
    }

    subject: BehaviorSubject<Image[]> = new BehaviorSubject<Image[]>([]);

    connect(): Observable<Image[]> {
        if (!this.subject.isStopped)
            this.imageService.getList().then(res => {
                this.subject.next(res)
            });
        return Observable.merge(this.subject);
    }

    disconnect() {
        this.subject.complete();
        this.subject.observers = [];
    }
}