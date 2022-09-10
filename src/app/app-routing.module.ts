import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {TeacherPageComponent} from "./teacher-page/teacher-page.component";
import { AuthGuard } from './guards/auth.guard';
import {LogViewerComponent} from "./log-viewer/log-viewer.component";
import {canActivate} from "@angular/fire/auth-guard";
import {SuperAuthGuard} from "./guards/super-auth.guard";
import {ConfirmationComponent} from "./confirmation/confirmation.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'teacher',
    component: TeacherPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'logViewer',
    component: LogViewerComponent,
    canActivate:[SuperAuthGuard],

  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  }
  ]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
