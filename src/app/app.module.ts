import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@learnApp-modules/app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppMaterialModule } from '@learnApp-modules/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppLogoComponent } from '@learnApp-components/app-logo/app-logo.component';
import { ToolbarComponent } from '@learnApp-components/toolbar/toolbar.component';

import { environment } from '../environments/environment';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLogoComponent,
    ToolbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
