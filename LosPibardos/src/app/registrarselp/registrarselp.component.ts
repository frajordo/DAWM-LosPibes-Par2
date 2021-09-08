import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrarselp',
  templateUrl: './registrarselp.component.html',
  styleUrls: ['./registrarselp.component.css']
})
export class RegistrarselpComponent implements OnInit {
  user: string;
  password: string;
  edad: number;
  email: string;
  gender: string;
  why: string;

  constructor(private http: HttpClient) { 
    this.user=""; this.password=""; this.edad=0 ;
    this.email=""; this.gender=""; this.why="";
  }

  registrar(){
    console.log(this.user+"-"+this.password+"-"+this.edad+"-"+this.email+"-"+this.gender+"-"+this.why)
    const json={
      user:this.user,
      password:this.password,
      edad:this.edad,
      email:this.email,
      gender:this.gender,
      why:this.why
    }
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {
      var flag=false;
      for (let i of data) {
        if (json.user===i.user){
          flag=true;
        }
      }
      console.log(flag)
      if (flag){
        alert("¡El usuario ya existe!")
      } else {
        if (json.user==="" || json.password==="" || json.gender==="" || json.email==="" || json.why==="" || json.edad===0 || json.edad===null){
          alert("Llene todos los datos porfavor")
        } else{
          this.http.post<any>("http://localhost:3000/users",json)
          .subscribe(
            data => console.log('success', data),
            error=>console.log("oops",error)
          );
          alert("Se ha creado el usuario correctamente")
          this.user=""; this.password=""; this.edad=0 ;
          this.email=""; this.gender=""; this.why="";
        }
      }
    })
  }

  
  
  ngOnInit(): void {
  }

}
