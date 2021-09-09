import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footerlp',
  templateUrl: './footerlp.component.html',
  styleUrls: ['./footerlp.component.css']
})
export class FooterlpComponent implements OnInit {

  constructor() { }


  scrollToElement(){
    var element = document.getElementById("team");
    element!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  
  ngOnInit(): void {
  }

}
