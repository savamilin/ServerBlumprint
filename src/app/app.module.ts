import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerDataComponent } from './server-data/server-data.component';
import { ButtonElementComponent } from './button-element/button-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerDataComponent,
    ButtonElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
