import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-kkboggy',
  templateUrl: './home-kkboggy.component.html',
  styleUrls: ['./home-kkboggy.component.css']
})
export class HomeKkboggyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setIndex();
  }

  setIndex(){
    sessionStorage.setItem('navbar', 'index');
    console.log(sessionStorage.getItem('navbar'));
  }
}
