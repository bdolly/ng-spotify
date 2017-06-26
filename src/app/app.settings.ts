export class AppSettings{
	public static APP = {
		NAME:    'ngSpotify',
		VERSION: '0.0.0'
	};

	public static SPOTIFY_API ={
		BASE: 'https://api.spotify.com/v1',
		AUTH: {
			BASE:          'https://accounts.spotify.com/authorize',
			CLIENT_ID:     '59adf672905342f69034265ae9726b08',
			RESPONSE_TYPE: 'token',
			REDIRECT_URI:  'http://localhost:4200'
		}

	}
	

}