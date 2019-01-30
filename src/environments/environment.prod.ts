export const environment = {
  production: true,
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
