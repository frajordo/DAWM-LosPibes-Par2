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
      this.dataUserService.isUserLoggedIn.next(false);
      this.router.navigateByUrl("/inicioSesion")
    } 
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
