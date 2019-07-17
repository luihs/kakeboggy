import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeKkboggyComponent } from './component/home-kkboggy/home-kkboggy.component';
import { FontsKkboggyComponent } from './component/fonts-kkboggy/fonts-kkboggy.component';
import { NavindexKkboggyComponent } from './component/navindex-kkboggy/navindex-kkboggy.component';
import { NavhomeKkboggyComponent } from './component/navhome-kkboggy/navhome-kkboggy.component';
import { ContainerKkboggyComponent } from './component/container-kkboggy/container-kkboggy.component';

const routes: Routes = [
 { path: '', component: HomeKkboggyComponent },
 { path: 'fonts', component: FontsKkboggyComponent },
 { path: 'navindex', component: NavindexKkboggyComponent },
 { path: 'navhome', component: NavhomeKkboggyComponent },
 { path: 'containerkkboggy', component: ContainerKkboggyComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
