import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-kkboggy',
  templateUrl: './container-kkboggy.component.html',
  styleUrls: ['./container-kkboggy.component.css']
})
export class ContainerKkboggyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.evaluteNav()
  }

  navIndexHome : boolean
  navUserHome: boolean

  evaluteNav(){
    var navindex = sessionStorage.getItem('navbar')
    console.log('nav select: ' + navindex)
    if ( navindex === 'index'){
      this.navIndexHome = true
    }else {
      this.navUserHome = true
    }
  }
}
