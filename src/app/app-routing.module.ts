import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard.component';
import { ImageComponent }      from './image.component';
import { EnvironmentComponent }      from './environment.component';
import { DeploymentComponent }      from './deployment.component';
import { RuntimestatsComponent }      from './runtimestats.component';
import { LoginComponent } from './login.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'images',     component: ImageComponent },
  { path: 'environments',     component: EnvironmentComponent },
  { path: 'deployments',     component: DeploymentComponent },
  { path: 'runtimestats',     component: RuntimestatsComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'about',     component: AboutComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}