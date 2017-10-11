import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { GravatarModule } from 'ng2-gravatar-directive';

import { AppComponent } from './app.component';
import { ImageComponent } from './image.component';
import { EnvironmentComponent } from './environment.component';
import { RuntimestatsComponent } from './runtimestats.component';
import { DeploymentComponent } from './deployment.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { AboutComponent } from './about.component';

import { EnvironmentService } from './environment.service';
import { ImageService } from './image.service';
import { DeploymentService } from './deployment.service';
import { RuntimestatsService } from './runtimestats.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ImageComponent,
    EnvironmentComponent,
    DeploymentComponent,
    RuntimestatsComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    GravatarModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [
    ImageService,
    EnvironmentService,
    DeploymentService,
    RuntimestatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
