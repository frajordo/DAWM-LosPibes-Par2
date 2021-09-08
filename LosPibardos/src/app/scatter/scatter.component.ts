import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {
  private data;
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  constructor() { }
   buscarDatos=
   fetch('http://localhost:3000/users')
   .then(response=> response.json()).then(data=>{
    var razones = [{"razon":"NF","cant":0,"edadProm":0},{"razon":"NP","cant":0,"edadProm":0},{"razon":"TC","cant":0,"edadProm":0},{"razon":"O","cant":0,"edadProm":0}];
    for(let persona of data){
      if(persona.why=="NF"){
       razones[0].cant +=1;
       razones[0].edadProm+=persona.edad;
      }else if(persona.why=="NP"){
         razones[1].cant +=1;
         razones[1].edadProm+=persona.edad;
      }else if(persona.why=="TC"){
         razones[2].cant +=1;
         razones[2].edadProm+=persona.edad;
      }else if(persona.why=="O"){
          razones[3].cant +=1;
          razones[3].edadProm+=persona.edad;
      }
    }
    for(let dato of razones){
      dato.edadProm= dato.edadProm/dato.cant;
    }
    return razones;
   });

   syncronizar= async() =>{
    const resultadoDatos = await this.buscarDatos;
    this.data=resultadoDatos;
     this.createSvg();
    this.drawPlot();

  }
  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
    .domain([20, 40])
    .range([ 0, this.width ]);
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([10, 30])
    .range([ this.height, 0]);
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
    .data(this.data)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.edadProm))
    .attr("cy", d => y(d.cant))
    .attr("r", 7)
    .style("opacity", .5)
    .style("fill", "#69b3a2");

    // Add labels
    dots.selectAll("text")
    .data(this.data)
    .enter()
    .append("text")
    .text(d => d.razon)
    .attr("x", d => x(d.edadProm))
    .attr("y", d => y(d.cant))
}

  ngOnInit(): void {
    this.syncronizar();
  }

}
