import { Component, OnInit } from '@angular/core';
import {AppSettings} from '../app.settings';

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

	private projectName:string;

  constructor() { 
  	this.projectName = AppSettings.APP.NAME;
  }

  ngOnInit() {
  }

}
