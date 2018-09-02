// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDW9de7GnP7LTkTmeZbQyWt7J4IhzN6nfo",
    authDomain: "restaurant-system-9c921.firebaseapp.com",
    databaseURL: "https://restaurant-system-9c921.firebaseio.com",
    projectId: "restaurant-system-9c921",
    storageBucket: "restaurant-system-9c921.appspot.com",
    messagingSenderId: "754589913461"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
