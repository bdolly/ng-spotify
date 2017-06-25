import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

	private projectName:string;

  constructor() { 
  	this.projectName = 'ngSpotify';
  }

  ngOnInit() {
  }

}
