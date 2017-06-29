import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {Artist} from '../Artist';
import {Album} from '../Album';
import { ActivatedRoute, Router, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {

	artist: Artist[];
	id:     string;
	albums: Album[];

  constructor(
  	private _spotifyService: SpotifyService,
  	private _router:Router,
  	private _route:ActivatedRoute
  	) { }


  ngOnInit():void {
    
    this._route.params
      .switchMap((params: Params) => this._spotifyService.getArtist(params['id']))
      .subscribe(artist =>this.artist = artist );  	

  }

  // routerOnActivate(curr:RouteSegment):void{}

}
