import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

let config: FirebaseAppConfig = {
  apiKey: 'AIzaSyBroy5H2G2YEuxqF1xo4Gg-11q4Mjcia48',
  authDomain: 'smartsensorhouses.firebaseapp.com',
  databaseURL: 'https://smartsensorhouses.firebaseio.com',
  storageBucket: 'smartsensorhouses.appspot.com'
};

let angularFireModule = AngularFireModule.initializeApp(config);

export { angularFireModule as FirebaseModule }
