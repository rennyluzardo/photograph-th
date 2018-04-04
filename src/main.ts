import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment, firebaseConf } from './environments/environment';

import * as firebase from "firebase";

if (environment.production) {
  enableProdMode();
}
firebase.initializeApp(firebaseConf)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
