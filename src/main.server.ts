import { enableProdMode } from '@angular/core';

import  'zone.js/dist/zone-node';
// import  'reflect-metadata';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
