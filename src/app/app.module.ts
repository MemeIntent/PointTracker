import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomePageComponent } from './home-page/home-page.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TeacherPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
