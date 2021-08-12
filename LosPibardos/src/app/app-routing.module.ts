import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: "", component: HomelpComponent},
  {path: "contacts", component: ContactslpComponent},
  {path: "inicioSesion", component: InicioSesionlpComponent},
  {path: "registrar", component: RegistrarselpComponent},
  {path: "main", component: PrincipallpComponent},
  {path: "mainAdmin", component: PrincipalAdminlpComponent},
  {path: "noticias", component: NoticiaslpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
