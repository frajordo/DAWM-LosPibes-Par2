import { Component, OnInit } from '@angular/core';
import {DataUserService} from "../data-user.service";
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-principallp',
  templateUrl: './principallp.component.html',
  styleUrls: ['./principallp.component.css']
})
export class PrincipallpComponent implements OnInit {
  
  set dataUser(value: string){
    this.dataUserService.username=value;
  }

  get dataUser():string {
    return this.dataUserService.username;
  }
  
  inventoryScript(){
    
    if(this.dataUser!=""){
      console.log("http://localhost:3005/productos/"+this.dataUser)
      fetch(("http://localhost:3005/productos/"+this.dataUser))
      .then(response => response.json())
      .then(data=>{
        document.getElementById("articulos")!.innerHTML=""
        for(let articulo of data){
          document.getElementById("articulos")!.innerHTML +=
          `<div class="card mb-3 dark-pink text-white">
              <div class="row g-0">
                <div class="col-md-6 col-6">
                  <img class="element-img" src="${articulo.imagen}"img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-6 col-6 lefty">
                  <div class="card-body lefty">
                    <div class="buttonContainer"> <button class="cancelButton" onClick="deleteProduct('${articulo._id}')" ></button>   </div>
                    <h6 class="text-white element-title">${articulo.nombre}x${articulo.cantidad}</h6>
                    <p class="card-text">${articulo.categoria}</p>
                    <p class="card-text">$${articulo.precio}</p>
                  </div>
                </div>
              </div>
            </div>`
        }
        /* Para editar la funcion deleteProducto buscar al final de src/assets/js/inventoryScript.js */
      })
      .catch(console.error)
    }
    
  }

  deleteProduct(id){
    console.log(id)
    /*
    this.http.delete("http://localhost:3005/productos/delete/"+id)
    .subscribe(
      data => console.log('success', data),
      error=>console.log("oops",error)
    );*/
  }

  showNewProductForm(){
    var formContainer = document.getElementsByTagName("newproduct")[0];
    formContainer.setAttribute("id","showFrom");

    var inventarioContainer = document.getElementsByClassName("page")[0];
    inventarioContainer.setAttribute("id","expandContainer");

  }

  constructor(private dataUserService: DataUserService, private cookieService: CookieService, private http: HttpClient, private router: Router) { 
    this.dataUser=this.cookieService.get("username")
    if (this.dataUser==="" || this.cookieService.get("tipo")!="0"){
      router.navigateByUrl("/")
    }
    this.inventoryScript();
  }

  ngOnInit(): void {
  }

}
