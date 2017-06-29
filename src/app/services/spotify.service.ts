import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/toPromise';
import {SpotifyAuthService} from './spotify-auth.service'; 




@Injectable()
export class SpotifyService {

  private searchUrl:string;
	private artistUrl:string;
	private accessToken:string;

	
  constructor(private _http:Http, private auth:SpotifyAuthService) { }

  private authHeader():any {
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', `Bearer ${this.auth.getAccessToken()}`);

    return new RequestOptions({ headers: headers });
  }
   

   /**
    * Get list of artist from Spotify API given user input
    * @param  {string}          str Search Query
    * @param  {string = 'artist'}    type Spotify Search domain
    * @return {Observable<any>}   
    */
  searchMusic(str:string, type:string = 'artist'):Observable<any>{

  	this.searchUrl = `${environment.SPOTIFY_API.BASE}/search?query=${str}&offset=0&limit=20&type=${type}&market=us`;
    

  	return this._http.get(this.searchUrl, this.authHeader()).map(res =>{
      console.log(res.json());
      return res.json();
    });
  }




  /**
   * Get a single artist object from the Spotify API 
   * @param  {string}          id Spotify Artist id
   * @return {Observable<any>}    
   */
  getArtist(id:string):Observable<any>{

    this.artistUrl = `${environment.SPOTIFY_API.BASE}/artists/${id}`;

    return this._http.get(this.artistUrl, this.authHeader()).map(res =>res.json());
  }

  


}
