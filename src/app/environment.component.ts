import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import 'rxjs/add/operator/toPromise';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

import { Environment } from './api/model/Environment';

@Component({
    selector: 'environment-list',
    templateUrl: './environment.component.html',
})

export class EnvironmentComponent implements OnInit {

    displayedColumns = ['title', 'managementlayer', 'runtimetechnology', 'location', 'username', 'actions'];
    environmentsDataSource;
    environment: Environment;

    constructor(private environmentService: EnvironmentService, public snackBar: MatSnackBar, private router: Router) {
        this.clear();
    }

    ngOnInit(): void {
        this.environmentsDataSource = new EnvironmentDataSource(this.environmentService, this.snackBar);
    }

    store(): void {
        this.environmentService.store(this.environment).
            then(environment => {
                this.snackBar.open("Environment stored successfully", "OK", { duration: 500 });
                this.environmentsDataSource = new EnvironmentDataSource(this.environmentService, this.snackBar);
                this.clear();                
            },
            error => {
                {
                    this.snackBar.open("Server Error: " + error, "OK");
                }
            });
    }

    delete(environment: Environment): void {
        this.environmentService.delete(environment).then(result => {
            this.snackBar.open("Environment deleted successfully", "OK", { duration: 500 });
            this.environmentsDataSource = new EnvironmentDataSource(this.environmentService, this.snackBar);
        },
        error => {
            {
                this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    }

    clear(): void{
        this.environment = this.environmentService.getStub();
    }
    
    edit(environment: Environment): void {
        this.environment = environment;
    }    
}

export class EnvironmentDataSource extends DataSource<Environment> {

    constructor(private environmentService: EnvironmentService, public snackBar: MatSnackBar) {
        super();
    }

    subject: BehaviorSubject<Environment[]> = new BehaviorSubject<Environment[]>([]);

    public connect(): Observable<Environment[]> {
        if (!this.subject.isStopped)
            this.environmentService.getList().then(res => {
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