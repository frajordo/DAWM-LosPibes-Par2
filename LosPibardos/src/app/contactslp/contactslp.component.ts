import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactslp',
  templateUrl: './contactslp.component.html',
  styleUrls: ['./contactslp.component.css']
})
export class ContactslpComponent implements OnInit {

  name:string;
  subject:string;
  html:string;

  enviar(){
    if(this.name==="" || this.subject==="" || this.html===""){
      alert("Complete todos los campos porfavor")
    } else{
      const email={
        subject:(this.name+"-"+this.subject),
        body:this.html
      }
      this.http.post<any>("http://localhost:3003/send-email",email)
      this.name=""; this.subject=""; this.html=""
      alert("Tu mensaje ha sido enviado exitosamente")
    }
  }

  constructor(private http: HttpClient) { 
    this.name=""
    this.subject=""
    this.html=""
  }

  ngOnInit(): void {
  }

}
