import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeSectionComponent,
    InfoSectionComponent,
    FooterSectionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
