import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {DataUserService} from "../data-user.service";

@Component({
  selector: 'navbarlp',
  templateUrl: './navbarlp.component.html',
  styleUrls: ['./navbarlp.component.css']
})
export class NavbarlpComponent implements OnInit {
  isUserLoggedIn: boolean;
  salir(){
    if (this.cookieService.get("username")!=""){
      this.cookieService.set("username","");
      this.cookieService.set("tipo","")
      this.dataUserService.isUserLoggedIn.next(false);
      this.router.navigateByUrl("/inicioSesion")
    } 
  }
  
  scrollToElement(){
    var element = document.getElementById("team");
    element!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  showMap(){
    console.log("Mostarndo el mapa");

    var Container = document.getElementById("mapContainer");
    Container!.setAttribute("style","display:");
  }

  hidePanel(){
    
    var Container = document.getElementById("mapContainer");
    Container!.setAttribute("style","display:none");

  }


  constructor(private cookieService:CookieService, private router:Router, private dataUserService: DataUserService) {
    this.isUserLoggedIn=false;
    this.dataUserService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit(): void {
  }

}
