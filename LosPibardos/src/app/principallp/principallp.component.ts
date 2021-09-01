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
  constructor(private dataUserService: DataUserService) { }

  ngOnInit(): void {
  }

}
