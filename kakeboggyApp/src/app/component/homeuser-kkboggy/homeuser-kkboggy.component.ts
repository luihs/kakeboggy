import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeuser-kkboggy',
  templateUrl: './homeuser-kkboggy.component.html',
  styleUrls: ['./homeuser-kkboggy.component.css']
})
export class HomeuserKkboggyComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    this.setUserHome();
  }

  setUserHome(){
    sessionStorage.setItem('navbar', 'user');
  }

}
