// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAAprCI6kRVC-e3r3XgRiDoPSCsKA2zUz8',
    authDomain: 'footed-pajamas.firebaseapp.com',
    databaseURL: 'https://footed-pajamas.firebaseio.com',
    projectId: 'footed-pajamas',
    storageBucket: 'footed-pajamas.appspot.com',
    messagingSenderId: '131791401424'
  },
  validCategoryValues: ['adult', 'kid', 'toddler', 'infant', 'pet'],

  screenBreakpoints: {
    phone: 0,
    tabletPortrait: 600,
    tabletLandscape: 900,
    computer: 1200,
    hugeComputer: 1600,
    asArray: [0, 600, 900, 1200, 1600]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
