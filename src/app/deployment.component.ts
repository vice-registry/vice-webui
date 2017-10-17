import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { Deployment } from './api/model/Deployment';
import { DeploymentService } from './deployment.service';
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

    displayedColumns = ['id'];
    deploymentDataSource;

    constructor(private deploymentService: DeploymentService, public snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.deploymentDataSource = new DeploymentDataSource(this.deploymentService, this.snackBar);
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