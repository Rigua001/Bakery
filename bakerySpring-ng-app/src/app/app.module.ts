import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';


import { LoginComponent } from './login/login.component';
import { ParagraphsComponent } from './paragraphs/paragraphs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CarouselComponent,
    WarningAlertComponent,
    LoginComponent,
    ParagraphsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
