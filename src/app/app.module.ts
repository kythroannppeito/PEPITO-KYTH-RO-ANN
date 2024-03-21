import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AnotherPagePage } from './another-page/another-page.page';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedFolder } from './shared-folder/custom-component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent,AnotherPagePage, SharedFolder],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
