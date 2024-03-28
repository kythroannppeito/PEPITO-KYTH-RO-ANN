import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AnotherPage } from './another/another.page';
import { NthPagePage } from './nth-page/nth-page.page';
import { AnotherPageWithFetch } from './another-page/another-page-with-fetch/another-page-with-fetch';

@NgModule({
  declarations: [AppComponent, AnotherPage, NthPagePage, AnotherPageWithFetch ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
