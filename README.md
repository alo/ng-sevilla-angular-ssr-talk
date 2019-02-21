# NgSevilla

This proyect is for the talk "Angular SSR" at ngSevilla 2019/02

```bash
➜ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 7.3.1
Node: 10.10.0
OS: darwin x64
Angular: 7.2.4
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.13.1
@angular-devkit/build-angular     0.13.1
@angular-devkit/build-optimizer   0.13.1
@angular-devkit/build-webpack     0.13.1
@angular-devkit/core              7.3.1
@angular-devkit/schematics        7.3.1
@angular/cdk                      7.3.1
@angular/cli                      7.3.1
@angular/flex-layout              7.0.0-beta.23
@angular/material                 7.3.1
@ngtools/webpack                  7.3.1
@schematics/angular               7.3.1
@schematics/update                0.13.1
rxjs                              6.3.3
typescript                        3.2.4
webpack                           4.29.0
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Step-1

At this point we have only generated our app with @angular/cli and added @angular/material and @angular/flex-layout

```bash
ng new ngSevilla
ng add @angular/material
yarn add @angular/flex-layout
```

**src/app/app.module.ts**

```typescript
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// other imports
@NgModule({
  imports: [FlexLayoutModule],
  ...
})
export class PizzaPartyAppModule {}
```

## Step-2

We've added our components and some styles. If you are interested you can go a liitle deeper in this [repo](https://github.com/AlmeriaJS/angular6-web-ssr)

![web preview](https://user-images.githubusercontent.com/234613/52913499-1f7def00-32bf-11e9-92fe-39e424fa62b2.png)

## Step-3

Adding SSR using Universal!

```bash
ng generate universal --clientProject ngSevilla
# output
CREATE src/main.server.ts (220 bytes)
CREATE src/app/app.server.module.ts (318 bytes)
CREATE src/tsconfig.server.json (219 bytes)
UPDATE package.json (1519 bytes)
UPDATE angular.json (4807 bytes)
UPDATE src/main.ts (451 bytes)
UPDATE src/app/app.module.ts (1421 bytes)
```

Lets see whats just happend...

**angular.josn**
Here we have the config to compile the Universal bundle, this new object uses a different main.ts file and ts config

```json
...
"server": {
  "builder": "@angular-devkit/build-angular:server",
  "options": {
    "outputPath": "dist/ngSevilla-server",
    "main": "src/main.server.ts",
    "tsConfig": "src/tsconfig.server.json"
  },
  "configurations": {
    "production": {
      "fileReplacements": [
        {
          "replace": "src/environments/environment.ts",
          "with": "src/environments/environment.prod.ts"
        }
      ],
      "sourceMap": false,
      "optimization": {
        "scripts": false,
        "styles": true
      }
    }
  }
}
...
```

**tsconfig.server.json**
We set the output to commonjs so nodeJS can understand it
In angularCompilerOptions we have a new module **AppServerModule**

```json
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app-server",
    "baseUrl": ".",
    "module": "commonjs"
  },
  "angularCompilerOptions": {
    "entryModule": "app/app.server.module#AppServerModule"
  }
}
```

**main.server.ts**
This module is used to bootstrap our app on the server

```typescript
import { enableProdMode } from '@angular/core';

import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
```

**AppServerModule**
Imports AppModule and ServerModule and bootstrap AppComponent.
We added **FlexLayoutServerModule** from ```import { FlexLayoutServerModule } from '@angular/flex-layout/server';``` [explanation](https://github.com/angular/flex-layout/blob/master/guides/SSR.md)

```typescript
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@NgModule({
  imports: [AppModule, ServerModule, FlexLayoutServerModule],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
```
*Note: if we want to use lazy loading we should import **ModuleMapLoaderModule** from ```@nguniversal/module-map-ngfactory-loader```


## Step-4

Create a simple express server

```bash
npm i --save @nguniversal/express-engine
```

```typescript
import * as express from 'express';
import { join } from 'path';

import { ngExpressEngine } from '@nguniversal/express-engine';
// import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const PORT = process.env.PORT || 8080;
const staticRoot = join(process.cwd(), 'dist', 'ngSevilla');
const { AppServerModuleNgFactory } = require('./ngSevilla-server/main');

const app = express();

// html engine
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  // providers: [
  //   provideModuleMap(LAZY_MODULE_MAP)
  // ]
}));

app.set('view engine', 'html');
app.set('views', staticRoot);

app.get('*.*', express.static(staticRoot));
app.get('*', (req, res) => res.render('index', { req }));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
```

Add some scripts to **package.josn**

```json
...
"scripts": {
  ...
  "start:server": "node ./dist/server.js",
  "build:server": "ng build --prod && ng run ngSevilla:server:production",
  "tsc:server": "tsc -p server/tsconfig.server.json",
  ...
},
...
```

