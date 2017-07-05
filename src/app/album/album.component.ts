import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {Artist} from '../Artist';
import {Album} from '../Album';
import { ActivatedRoute, Router, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {
	id:string;
	album:Album[];


  constructor(
  	private _spotifyService: SpotifyService,
  	private _router:Router,
  	private _route:ActivatedRoute) { }

  ngOnInit() {

  	// get the singular
    this._route.params
      .switchMap((params: Params) => this._spotifyService.getAlbum(params['id']))
      .subscribe(album =>{ this.album = album; } );    
  }

}
