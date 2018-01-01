import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { DeveloperComponent } from './whoami/developer/developer.component';
import { DesignerComponent } from './whoami/designer/designer.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'whoami',
    component: WhoamiComponent,
  },
  {
    path: 'whoami/developer',
    component: DeveloperComponent,
  },
  {
    path: 'whoami/designer',
    component: DesignerComponent,
  },
  {
    path: 'projects/:name',
    component: ProjectComponent,
  },
  // {
  //   path: '**',
  //   component: NotFound404Component
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
