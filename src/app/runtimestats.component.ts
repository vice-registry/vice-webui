import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Runtimestats } from './models';
import { RuntimestatsService } from './runtimestats.service';
import 'rxjs/add/operator/toPromise';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'runtimestats',
    templateUrl: './runtimestats.component.html',
})

export class RuntimestatsComponent implements OnInit {

    displayedColumns = ['id'];
    runtimestatsDataSource;

    constructor(private runtimestatsService: RuntimestatsService) { }

    ngOnInit(): void {
        this.runtimestatsDataSource = new RuntimestatsDataSource(this.runtimestatsService);
    }
}

export class RuntimestatsDataSource extends DataSource<Runtimestats> {

    constructor(private runtimestatsService: RuntimestatsService) {
        super();
    }

    subject: BehaviorSubject<Runtimestats[]> = new BehaviorSubject<Runtimestats[]>([]);

    connect(): Observable<Runtimestats[]> {
        if (!this.subject.isStopped)
            this.runtimestatsService.get().then(res => {
                this.subject.next(res)
            });
        return Observable.merge(this.subject);
    }

    disconnect() {
        this.subject.complete();
        this.subject.observers = [];
    }
}