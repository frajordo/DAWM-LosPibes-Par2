import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import {DataUserService} from "../data-user.service";
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio-sesionlp',
  templateUrl: './inicio-sesionlp.component.html',
  styleUrls: ['./inicio-sesionlp.component.css']
})
export class InicioSesionlpComponent implements OnInit {
  selectedOption: string;
  usernameCheck: string;
  passwordCheck: string;
  isUserLoggedIn: boolean;
  options=[
    {name:"Normal",value:"0"},
    {name:"Administrador",value:"1"}
  ]
  
  get dataUser():string {
    return this.dataUserService.username;
  }

  set dataUser(value: string){
    this.dataUserService.username=value;
  }

  ComprobarUsuarios(){
    var x=""
    if (this.selectedOption!="") {
      if (this.selectedOption==="0") {
        x="/users"
      } else {
        x="/admins"
      }
      fetch(("http://localhost:3000"+x))
      .then(response => response.json())
      .then(data => {
        var flag=false
        for(let i = 0; i < data.length; i++){
          
          let username=data[i].user
          if (username===this.usernameCheck){
            flag=true
            let password=data[i].password
            if (password===this.passwordCheck){
              this.dataUser=this.usernameCheck;
              this.cookieService.set("username",this.usernameCheck)
              this.dataUserService.isUserLoggedIn.next(true);
              if (x==="/users"){
                this.router.navigateByUrl("/main")
              } else {
                this.router.navigateByUrl("/mainAdmin")
              }
              
            } else{
              alert("Contraseña incorrecta.");
            }
          }
        }
        if (!flag){
          alert("No se ha encontrado el usuario")
        }

      })
      .catch(console.error);
    } else{
      alert("¡Escoja un tipo!")
    } 
  }
  constructor(private dataUserService: DataUserService, private router: Router, private cookieService: CookieService) {
    this.selectedOption="";
    this.passwordCheck="";
    this.usernameCheck="";
    this.isUserLoggedIn=false;
    this.dataUserService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });
   }

  ngOnInit(): void {
  }

}
