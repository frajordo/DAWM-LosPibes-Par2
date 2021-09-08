import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  nombre:string;
  precio:string;
  categoria:string;
  imagen:string;
  cantidad:string;
  direccion:string;

  newProduct(){
    if (this.nombre==="" || this.precio==="" || this.categoria==="" || this.imagen==="" || this.cantidad==="" || this.direccion===""){
      alert("Llene todos los campos")
    } else {
      const prod={
        nombre:this.nombre,
        precio:this.precio,
        categoria:this.categoria,
        imagen:this.imagen,
        direccion:this.direccion,
        cantidad:this.cantidad
      }
      this.http.post<any>("http://localhost:3005/productos/"+this.cookieService.get("username"),prod)
      .subscribe(
        data => console.log('success', data),
        error=>console.log("oops",error)
      );
      this.hideNewProductForm()

      
    }
  }

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.nombre=""; this.precio=""; this.categoria=""; 
    this.imagen="https://dummyimage.com/136x176.png/ff4444/ffffff"; this.direccion=""; this.cantidad="";
   }

  hideNewProductForm(){

    var formContainer = document.getElementsByTagName("newproduct")[0];
    formContainer.setAttribute("id","hideForm");

    var inventarioContainer = document.getElementsByClassName("page")[0];
    inventarioContainer.setAttribute("id","contractContainer");
  }

  ngOnInit(): void {
  }

}
