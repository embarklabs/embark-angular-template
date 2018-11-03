import 'Embark/EmbarkJS';

import { enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  EmbarkJS.onReady(err => {
    if (err) {
      return console.error(err);
    }

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch(bsErr => console.error(bsErr));
  });
});
