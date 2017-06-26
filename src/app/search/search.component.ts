import { Component, OnInit, Input } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

	@Input() searchStr:string;

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(){
  	// console.log(this.searchStr);

  	this._spotifyService
  					.searchMusic(this.searchStr)
  					.subscribe(res=>{
  						console.log(res);
  					});
  }

}
