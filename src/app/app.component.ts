import { Component, OnInit } from '@angular/core';
import {NavbarTopComponent} from './navbar-top/navbar-top.component';
import {SpotifyAuthService} from './services/spotify-auth.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
	constructor(private auth: SpotifyAuthService){}
	ngOnInit(){
		this.auth.login();
	}
}
