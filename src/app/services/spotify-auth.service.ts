import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class SpotifyAuthService {

  public accessToken:string;
	private searchUrl:string;
	private SPOTIFY_API = environment.SPOTIFY_API;

	
  constructor(private _http:Http) {   }



  /**
   * Login using the Spotify API Client Credentials Flow 
   * @see https://developer.spotify.com/web-api/authorization-guide/#client-credentials-flow
   */
  login():void{

  	if(!window.location.href.includes('access_token') && !this.getAccessToken()){
  		let spotifyLoginWindow = window.location.href = this.getLoginURL();
  	}

    window.addEventListener("message", (event)=>{ this.setAccessToken(); }, false);
  	

  }


/**
 * Builds our Spotify API redirect url based on the Cleint Credentials flow 
 * @see https://developer.spotify.com/web-api/authorization-guide/#client-credentials-flow
 * @return {string} full auth url 
 */
 getLoginURL():string{
 	return `${this.SPOTIFY_API.AUTH.BASE}?client_id=${this.SPOTIFY_API.AUTH.CLIENT_ID}&redirect_uri=${ 
 			this.SPOTIFY_API.AUTH.REDIRECT_URI}&response_type=${this.SPOTIFY_API.AUTH.RESPONSE_TYPE}`;
 }


 /**
  * Utility mehtod to get the access token if set 
  * @return {string} access_token hash 
  */
 getAccessToken(){
   let storedToken = window.localStorage.getItem('ngSpotify-accessToken');
   if(storedToken){
     return storedToken;
   }else{
     new Error('No Spotify Access Token Set');
     return null;
   }
 }



 setAccessToken(){
   if(window.location.href.includes('access_token')){
      let hashBreakUrl = location.href.split('#');
       let url_params = hashBreakUrl[1]
                          .split('&')
                          .reduce((params, param) => {
                            let [ key, value ] = param.split('=');
                            params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                            return params;
                          }, { });

        window.localStorage.setItem('ngSpotify-accessToken', url_params['access_token']);
    }
 }





}
