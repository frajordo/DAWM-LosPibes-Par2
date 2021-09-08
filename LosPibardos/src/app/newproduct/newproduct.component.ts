import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  constructor() { }

  hideNewProductForm(){

    var formContainer = document.getElementsByTagName("newproduct")[0];
    formContainer.setAttribute("id","hideForm");

    var inventarioContainer = document.getElementsByClassName("page")[0];
    inventarioContainer.setAttribute("id","contractContainer");
  }

  ngOnInit(): void {
  }

}
