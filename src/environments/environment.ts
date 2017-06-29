// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  SPOTIFY_API:{
		BASE: 'https://api.spotify.com/v1',
		AUTH: {
			BASE:          'https://accounts.spotify.com/authorize',
			CLIENT_ID:     '59adf672905342f69034265ae9726b08',
			RESPONSE_TYPE: 'token',
			REDIRECT_URI:  'http://localhost:4200/artist/11/'
		}

	}
};
