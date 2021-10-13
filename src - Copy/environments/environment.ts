// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://avittii.herokuapp.com',
  serverUrl: 'https://avittii.herokuapp.com/#',
  SOCKET_ENDPOINT: 'https://avittii.herokuapp.com',
  apiTimeout: 60000,
  STRIP_PAYMENT_Publishable_key: 'pk_test_vfc6rPCbObD6Chgrgc4P8JBF',
  STRIP_PAYMENT_Secret_key_UAT: 'sk_test_r56cBMsofwawtQiEgqDzmkcM',
  isPaymentTestMode: true
};
//default timeout is 1 min
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
