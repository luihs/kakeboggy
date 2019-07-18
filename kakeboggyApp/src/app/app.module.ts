import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeKkboggyComponent } from './component/home-kkboggy/home-kkboggy.component';
import { FontsKkboggyComponent } from './component/fonts-kkboggy/fonts-kkboggy.component';
import { NavindexKkboggyComponent } from './component/navindex-kkboggy/navindex-kkboggy.component';
import { NavhomeKkboggyComponent } from './component/navhome-kkboggy/navhome-kkboggy.component';
import { ContainerKkboggyComponent } from './component/container-kkboggy/container-kkboggy.component';
import { HomeuserKkboggyComponent } from './component/homeuser-kkboggy/homeuser-kkboggy.component';
import { CalendarKkboggyComponent } from './component/calendar-kkboggy/calendar-kkboggy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeKkboggyComponent,
    FontsKkboggyComponent,
    NavindexKkboggyComponent,
    NavhomeKkboggyComponent,
    ContainerKkboggyComponent,
    HomeuserKkboggyComponent,
    CalendarKkboggyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
