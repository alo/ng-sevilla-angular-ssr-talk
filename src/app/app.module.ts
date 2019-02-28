import { registerLocaleData } from '@angular/common';
import esEs from '@angular/common/locales/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { HomeModule } from './home/home.module';

registerLocaleData(esEs);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    // FlexLayoutModule,
    ProjectsModule,
    HomeModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
