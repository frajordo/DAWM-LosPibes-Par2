import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarlpComponent } from './navbarlp/navbarlp.component';
import { FooterlpComponent } from './footerlp/footerlp.component';
import { ContactslpComponent } from './contactslp/contactslp.component';
import { InicioSesionlpComponent } from './inicio-sesionlp/inicio-sesionlp.component';
import { RegistrarselpComponent } from './registrarselp/registrarselp.component';
import { PrincipallpComponent } from './principallp/principallp.component';
import { PrincipalAdminlpComponent } from './principal-adminlp/principal-adminlp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarlpComponent,
    FooterlpComponent,
    ContactslpComponent,
    InicioSesionlpComponent,
    RegistrarselpComponent,
    PrincipallpComponent,
    PrincipalAdminlpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
