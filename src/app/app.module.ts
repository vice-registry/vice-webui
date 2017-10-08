import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ImageService }          from './image.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [ ImageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
