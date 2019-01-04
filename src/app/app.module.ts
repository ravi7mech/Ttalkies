import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TmdbapiModule } from 'tmdbapi';
import { SharedModule } from './shared/shared.module';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,SharedModule, TmdbapiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
