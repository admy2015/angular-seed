import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { FeatureOneRoutingModule } from './features/feature-one/feature-one-routing.module';
import { FeatureTwoRoutingModule } from './features/feature-two/feature-two-routing.module';
import { SvgPlaygroundRoutingModule } from './features/svg-playground/svg-playground-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FeatureOneRoutingModule,
    FeatureTwoRoutingModule,
    SvgPlaygroundRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
