import { Component, OnInit } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Image } from './models';
import { ImageService } from './image.service';
import 'rxjs/add/operator/toPromise';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const data: Image[] = [ 
  { id: "11", environmentReference: 'Mr. Nice', imported: false }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  images: Image[] = [];

  displayedColumns = ['id', 'environmentReference', 'imported'];
  imagesDataSource; // = new ImagesDataSource();

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    //this.images = [ { id: 11, name: 'Mr. Nice' } ];
    //this.imageService.getImages().then(images => this.images = images);
    console.info("ngOnInit");
    this.imagesDataSource = new ImagesDataSource(this.imageService);
  }
     
}

export class ImagesDataSource extends DataSource<Image> {

    constructor(private imageService: ImageService) {
        super();
    }

    subject: BehaviorSubject<Image[]> = new BehaviorSubject<Image[]>([]);

    connect(): Observable<Image[]> {
        console.log('connect');
        if (!this.subject.isStopped)
            this.imageService.getImages().then(res => {
                  console.info(res);
                  this.subject.next(res)
                });
        return Observable.merge(this.subject);
    }

    disconnect() {
        this.subject.complete();
        this.subject.observers = [];
    }
}