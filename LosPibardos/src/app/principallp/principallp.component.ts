import { Component, OnInit } from '@angular/core';
import {DataUserService} from "../data-user.service";

@Component({
  selector: 'app-principallp',
  templateUrl: './principallp.component.html',
  styleUrls: ['./principallp.component.css']
})
export class PrincipallpComponent implements OnInit {
  

  get dataUser():string {
    return this.dataUserService.username;
  }
  
  inventoryScript(){
    console.log("http://localhost:3005/productos/"+this.dataUser)
    console.log("caca")
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
                  <h6 class="text-white element-title">${articulo.nombre}x${articulo.cantidad}</h6>
                  <p class="card-text">${articulo.categoria}</p>
                  <p class="card-text">$${articulo.precio}</p>
                </div>
              </div>
            </div>
          </div>`
      }
    })
    .catch(console.error)
  }


  constructor(private dataUserService: DataUserService) { 
    this.inventoryScript();
  }

  ngOnInit(): void {
  }

}
