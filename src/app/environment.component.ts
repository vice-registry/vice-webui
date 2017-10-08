import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Environment } from './models';
import { EnvironmentService } from './environment.service';
import 'rxjs/add/operator/toPromise';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'environment-list',
    templateUrl: './environment.component.html',
})

export class EnvironmentComponent implements OnInit {

    displayedColumns = ['id'];
    environmentsDataSource;

    constructor(private environmentService: EnvironmentService) { }

    ngOnInit(): void {
        this.environmentsDataSource = new EnvironmentDataSource(this.environmentService);
    }
}

export class EnvironmentDataSource extends DataSource<Environment> {

    constructor(private environmentService: EnvironmentService) {
        super();
    }

    subject: BehaviorSubject<Environment[]> = new BehaviorSubject<Environment[]>([]);

    connect(): Observable<Environment[]> {
        if (!this.subject.isStopped)
            this.environmentService.getList().then(res => {
                this.subject.next(res)
            });
        return Observable.merge(this.subject);
    }

    disconnect() {
        this.subject.complete();
        this.subject.observers = [];
    }
}