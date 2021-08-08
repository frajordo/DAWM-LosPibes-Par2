import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarlpComponent } from './navbarlp/navbarlp.component';
import { FooterlpComponent } from './footerlp/footerlp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarlpComponent,
    FooterlpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
