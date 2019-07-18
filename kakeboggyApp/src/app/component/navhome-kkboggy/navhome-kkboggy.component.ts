import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navhome-kkboggy',
  templateUrl: './navhome-kkboggy.component.html',
  styleUrls: ['./navhome-kkboggy.component.css']
})
export class NavhomeKkboggyComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

   logout(){
    sessionStorage.setItem('navbar', 'index')
    this.route.navigate(['/']);
  }
}
