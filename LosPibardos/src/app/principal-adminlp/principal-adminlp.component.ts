import { Component, OnInit, ViewChild, AfterViewInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-principal-adminlp',
  templateUrl: './principal-adminlp.component.html',
  styleUrls: ['./principal-adminlp.component.css']
})



export class PrincipalAdminlpComponent implements OnInit {

  constructor(private elementRef:ElementRef) {}

  verGraphEdad() : void{
    this.changeDisplay('barGraph')
  }

  verGraphGen() : void{
    this.changeDisplay('pieGraph')
  }

    verGraphRaz() : void{
    this.changeDisplay('scatterGraph')
  }

  changeDisplay(id : string) : void{
    let graficasCont=this.elementRef.nativeElement.querySelector('#graficasCont').children;
    for( let grafica of graficasCont){
      if(id == grafica.getAttribute('id')){
         grafica.setAttribute('style','display:block');
      }else{
         grafica.setAttribute('style','display:none');
      }
    }
  }
  siftUsers(){
    let users = this.elementRef.nativeElement.querySelector('#usersByWhyContentTable').children;
    let selectedOptionWhy =  this.elementRef.nativeElement.querySelector('#usersSelect').selectedOptions[0].value;

    
    for (let i = 0; i < users.length; i++) {
      let userWhy = users[i].children[0].innerHTML;
      if ( userWhy === selectedOptionWhy){
        users[i].setAttribute("style","");
      }else{
        users[i].setAttribute("style","display:none");
      }

    }
  }

  ngAfterViewInit() {
    var table = this.elementRef.nativeElement.querySelector('#usersByWhyContentTable');

    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {

      for (let i = 0; i < data.length; i++) {
        table.insertAdjacentHTML('beforeend', `
        <tr>
          <td style="display:none" .why >`+ data[i]["why"] +`</td>
          <th>`+ data[i]["user"] +`</th>
          <td>`+ data[i]["edad"] +`</td>
          <td>`+ data[i]["email"] +`</td>
          <td>`+ data[i]["gender"] +`</td>
          <td>`+ data[i]["tipo"] +`</td>
        </tr>`
        );
      }
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });

  }
  ngOnInit(): void {


  }

}
