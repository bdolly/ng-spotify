import {AppSettings} from '../app.settings';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {SpotifyAuthService} from './spotify-auth.service'; 




@Injectable()
export class SpotifyService {

	private searchUrl:string;
	private accessToken:string;

	
  constructor(private _http:Http, private auth:SpotifyAuthService) { 
  	this.auth.login();
  }


 
  searchMusic(str:string, type:string = 'artist'){

  	this.searchUrl = `${AppSettings.SPOTIFY_API.BASE}/search?query=${str}&offset=0&limit=20&type=${type}&market=us`;

  	let headers = new Headers({ 'Accept': 'application/json' });
		headers.append('Authorization', `Bearer ${this.auth.getAccessToken()}`);

		let options = new RequestOptions({ headers: headers });

  	return this._http.get(this.searchUrl, options).map(res =>res.json());
  }


}
