import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarlpComponent } from './navbarlp/navbarlp.component';
import { FooterlpComponent } from './footerlp/footerlp.component';
import { ContactslpComponent } from './contactslp/contactslp.component';
import { InicioSesionlpComponent } from './inicio-sesionlp/inicio-sesionlp.component';
import { RegistrarselpComponent } from './registrarselp/registrarselp.component';
import { PrincipallpComponent } from './principallp/principallp.component';
import { PrincipalAdminlpComponent } from './principal-adminlp/principal-adminlp.component';
import { HomelpComponent } from './homelp/homelp.component';
import { NoticiaslpComponent } from './noticiaslp/noticiaslp.component';
import {DataUserService} from "./data-user.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarlpComponent,
    FooterlpComponent,
    ContactslpComponent,
    InicioSesionlpComponent,
    RegistrarselpComponent,
    PrincipallpComponent,
    PrincipalAdminlpComponent,
    HomelpComponent,
    NoticiaslpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
