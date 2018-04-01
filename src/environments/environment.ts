// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCJkOhsNku9p2D2FFvZRq89FNx5Nt-UNq4',
    authDomain: 'visitdobresti.firebaseapp.com',
    databaseURL: 'https://visitdobresti.firebaseio.com',
    projectId: 'visitdobresti',
    storageBucket: 'visitdobresti.appspot.com',
    messagingSenderId: '653641321805'
  }
};
