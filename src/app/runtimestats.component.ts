import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
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
    styleUrls: ['./runtimestats.component.css'],
    templateUrl: './runtimestats.component.html',
})

export class RuntimestatsComponent implements OnInit {

    displayedColumns = ['id'];
    runtimestats: Runtimestats;

    constructor(private runtimestatsService: RuntimestatsService, public snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.updateRuntimestats();
    }

    updateRuntimestats(): void{
        this.runtimestatsService.get().then(
            runtimestats => this.runtimestats = runtimestats,
            error => {{
                this.snackBar.open("Server Error: " + error, "OK");
            }}
        );
    }
}
