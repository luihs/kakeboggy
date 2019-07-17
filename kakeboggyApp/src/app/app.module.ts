import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeKkboggyComponent } from './component/home-kkboggy/home-kkboggy.component';
import { FontsKkboggyComponent } from './component/fonts-kkboggy/fonts-kkboggy.component';
import { NavindexKkboggyComponent } from './component/navindex-kkboggy/navindex-kkboggy.component';
import { NavhomeKkboggyComponent } from './component/navhome-kkboggy/navhome-kkboggy.component';
import { ContainerKkboggyComponent } from './component/container-kkboggy/container-kkboggy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeKkboggyComponent,
    FontsKkboggyComponent,
    NavindexKkboggyComponent,
    NavhomeKkboggyComponent,
    ContainerKkboggyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
