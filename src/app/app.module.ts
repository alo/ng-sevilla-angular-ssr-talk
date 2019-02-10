import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import esEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(esEs);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
