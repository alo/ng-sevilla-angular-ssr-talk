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

```bash
ng g service my-data
```

and return sync demo data

**my-data.service.ts**

```typescript
  getData(): ngSevillaWebData {
    return {
      groupInfo: {
        name: 'ngSevilla',
        description: `
          Trabajas con Angular o ...
        `,
        imgSrc: 'ngSevilla.jpg'
      },
      meetups: [
        {
          title: 'Server-side rendering con Angular',
          date: new Date(2019, 1, 21, 19, 0),
          description: `
            Angular SSR, Performance + SEO Diferencias entre renderizado en cliente y SSR
          `,
          imgSrc: ''
        },
        {
          title: 'Formularios reactivos con Angular 7',
          date: new Date(2019, 0, 23, 19, 0),
          description: `
            Hoy en día no podemos negar que el ...
          `,
          imgSrc: ''
        },
        ...
      ]
    };
  }

```

Create some interfaces for our data

**models/ngSevillaWebData.ts**

```typescript
import { GroupInfo } from './groupInfo';
import { Meetup } from './meetup';

export interface ngSevillaWebData {
  groupInfo: GroupInfo;
  meetups: Meetup[];
}
```

**models/groupInfo.ts**

```typescript
export interface GroupInfo {
  name: string;
  description: string;
  imgSrc: string;
}
```

**models/meetup.ts**

```typescript
export interface Meetup {
  title: string;
  date: Date;
  description: string;
  imgSrc: string;
}
```
