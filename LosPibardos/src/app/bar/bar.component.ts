import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  private data;
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  constructor() { 
    
  }
    private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
   buscarDatos=
   fetch('http://localhost:3000/users')
   .then(response=> response.json()).then(data=>{
    var edades = [{"rango":"15-30","cant":0},{"rango":"30-45","cant":0},{"rango":"45-60","cant":0}];
    for(let persona of data){
      if(persona.edad>=15 && persona.edad<=30){
       edades[0].cant +=1;
      }else if(persona.edad>=30 && persona.edad<=45){
         edades[1].cant +=1;
      }else if(persona.edad>=45 && persona.edad<=60){
         edades[2].cant +=1;
      }
    }
    return edades;
   });

   syncronizar= async() =>{
    const resultadoDatos = await this.buscarDatos;
    this.data=resultadoDatos;
     this.createSvg();
    this.drawBars(this.data);

  }
  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.rango))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 50])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.rango))
    .attr("y", d => y(d.cant))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.cant))
    .attr("fill", "#d04a35");
}

  ngOnInit(): void {
    this.syncronizar();

  }



}
