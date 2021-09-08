import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'navbarlp',
  templateUrl: './navbarlp.component.html',
  styleUrls: ['./navbarlp.component.css']
})
export class NavbarlpComponent implements OnInit {

  firstNav={name:"Iniciar Sesión",route:"inicioSesion"}
  lastNav={name:"Registrarse", route:"registrar"}

  salir(){
    if (this.cookieService.get("username")!=""){
      this.cookieService.set("username","");
      this.lastNav.name="Registrarse";
      this.lastNav.route="registrar";
      this.router.navigateByUrl("/inicioSesion")
      
    } 
  }
  

  constructor(private cookieService:CookieService, private router:Router) {
    if (this.cookieService.get("username")!=""){
      this.lastNav.name="Cerrar Sesión";
      this.lastNav.route="inicioSesion";
    } else{
      this.lastNav.name="Registrarse";
      this.lastNav.route="registrar";
    }
  }

  ngOnInit(): void {
  }

}
