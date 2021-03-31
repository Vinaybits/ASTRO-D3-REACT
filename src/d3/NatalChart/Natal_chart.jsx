import React, { Component } from "react";
import * as d3 from "d3";

import {  GlobalContext } from "../../mycontext";
import './Natal.css';

class NatalChart extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.d3_Chart_ref = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    this.draw_chart_layout();
    this.rashi_placement();
    this.planet_positions();
  }

  componentDidUpdate(){
     d3.select("#container").selectAll("planetClass1").remove()
    this.planet_positions();

  }

  rashi_placement(){
 
    var container2 = d3.select("#container");

    container2
      .selectAll(".rashiText")
      .data(this.props.data)
      .enter()
      .append("text")
      .attr("class", "rashiClass")
      .attr("transform", function (d,i) {
        var house1_x = 540;
        var house1_y = 400;
        if(i === 0){
          return "translate("+house1_x+","+house1_y+")";
    
        }
        else if(i===1){
          return "translate("+ (house1_x - 100)+","+(house1_y - 100)+")";
        }
        else if(i===2){
          return "translate("+ (house1_x - 120)+","+(house1_y - 80)+")";
        }
        else if(i===3){
          return "translate("+ (house1_x - 20)+","+(house1_y + 18)+")";
        }
        else if(i===4){
          return "translate("+ (house1_x - 120)+","+(house1_y + 120)+")";
        }
        else if(i===5){
          return "translate("+ (house1_x - 100)+","+(house1_y + 140)+")";
        }
        else if(i===6){
          return "translate("+ (house1_x )+","+(house1_y + 40)+")";
        }
        else if(i===7){
          return "translate("+ (house1_x +100 )+","+(house1_y + 140)+")";
        }
        else if(i===8){
          return "translate("+ (house1_x +120 )+","+(house1_y + 120)+")";
        }
        else if(i===9){
          return "translate("+ (house1_x + 20 )+","+(house1_y + 18)+")";
        }
        else if(i===10){
          return "translate("+ (house1_x + 120 )+","+(house1_y - 80)+")";
        }
        else if(i===11){
          return "translate("+ (house1_x + 100 )+","+(house1_y - 100)+")";
        }
        else{
          return "translate(530,500)";
    
        }
        
        
      })
      .attr("text-anchor", "middle")
      // .attr("xlink:href", function (d, i) {
      //     return "#SunSign_Arc_" + i;
      // })
      .text(function (d, i) {
        return d.rashi;
      });


  }

  planet_positions(){
    var planet_container = d3.select("#container");
    var house1_x = 540;
    var house1_y = 320;

    planet_container
      .append("text")
      .text("Asc")
      .attr("dy", house1_y)
      .attr("dx", house1_x-10)
      .attr("font-size", 15)
      .attr("font-family", "monospace")
      .attr("fill", "black");
    // Define the div for the tooltip
    var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);
    planet_container
      .selectAll(".planetText1")
      .data(this.props.data)
      .enter()
      .append("text")
      .attr("class", "planetClass1")
      .on("mouseover", function (d) {
                        div.transition()				
                        .style("opacity", .9)
                        .style("width","auto")		
                        div.html(d.planets[0])	
                        .style("left", (d3.event.clientX-20) + "px")		
                        .style("top", (d3.event.clientY +20) + "px");
      })
      .on("mouseout", function (d) {
                        div.transition()		
                        .duration(200)		
                        .style("opacity", 0)
                        .style("width","auto")			
       })

      .attr("transform", function (d,i) {
        if(i === 0){
          return "translate("+house1_x+","+(house1_y-50)+")";
        }
        else if(i===1){
          return "translate("+ (house1_x - 100)+","+(house1_y - 70)+")";
        }
        else if(i===2){
          return "translate("+ (house1_x - 180)+","+(house1_y )+")";
        }
        else if(i===3){
          return "translate("+ (house1_x - 100)+","+(house1_y + 100)+")";
        }
        else if(i===4){
          return "translate("+ (house1_x - 180)+","+(house1_y + 200)+")";
        }
        else if(i===5){
          return "translate("+ (house1_x - 100)+","+(house1_y + 250)+")";
        }
        else if(i===6){
          return "translate("+ (house1_x )+","+(house1_y + 200)+")";
        }
        else if(i===7){
          return "translate("+ (house1_x +100 )+","+(house1_y + 250)+")";
        }
        else if(i===8){
          return "translate("+ (house1_x +180 )+","+(house1_y + 200)+")";
        }
        else if(i===9){
          return "translate("+ (house1_x + 100 )+","+(house1_y + 100)+")";
        }
        else if(i===10){
          return "translate("+ (house1_x + 180 )+","+(house1_y)+")";
        }
        else if(i===11){
          return "translate("+ (house1_x + 100 )+","+(house1_y - 70)+")";
        }
        else{
          return "translate(530,500)";
    
        }
        
        
      })
      .attr("text-anchor", "middle")
      // .attr("xlink:href", function (d, i) {
      //     return "#SunSign_Arc_" + i;
      // })
      .text(function (d, i) {
        if(typeof d.planets[0]!== "undefined")
          return d.planets[0].substring(0,2);
      });


      // second planet placement 
      planet_container
      .selectAll(".planetText2")
      .data(this.props.data)
      .enter()
      .append("text")
      .attr("class", "planetClass2")
      .on("mouseover", function (d) {
                        div.transition()			
                        .style("opacity", .9)
                        .style("width","auto")			
                        div.html(d.planets[1])	
                        .style("left", (d3.event.clientX-20) + "px")		
                        .style("top", (d3.event.clientY +20) + "px");
      })
      .on("mouseout", function (d) {
                        div.transition()		
                        .duration(200)		
                        .style("opacity", 0)
                        .style("width","auto")			
       })
      .attr("transform", function (d,i) {
        if(i === 0){

          return "translate("+(house1_x - 50)+","+house1_y+")";
    
        }
        else if(i===1){
          return "translate("+ (house1_x - 120)+","+(house1_y - 50)+")";
        }
        else if(i===2){
          return "translate("+ (house1_x - 180)+","+(house1_y - 40)+")";
        }
        else if(i===3){
          return "translate("+ (house1_x - 100)+","+(house1_y + 80)+")";
        }
        else if(i===4){
          return "translate("+ (house1_x - 180)+","+(house1_y + 160)+")";
        }
        else if(i===5){
          return "translate("+ (house1_x - 100)+","+(house1_y + 270)+")";
        }
        else if(i===6){
          return "translate("+ (house1_x )+","+(house1_y + 240)+")";
        }
        else if(i===7){
          return "translate("+ (house1_x +100 )+","+(house1_y + 270)+")";
        }
        else if(i===8){
          return "translate("+ (house1_x +180 )+","+(house1_y + 220)+")";
        }
        else if(i===9){
          return "translate("+ (house1_x + 100 )+","+(house1_y + 80)+")";
        }
        else if(i===10){
          return "translate("+ (house1_x + 180 )+","+(house1_y - 30 )+")";
        }
        else if(i===11){
          return "translate("+ (house1_x + 100 )+","+(house1_y - 90)+")";
        }
        else{
          return "translate(530,500)";
    
        }
        
        
      })
      .attr("text-anchor", "middle")
      // .attr("xlink:href", function (d, i) {
      //     return "#SunSign_Arc_" + i;
      // })
      .text(function (d, i) {
        if(typeof d.planets[1]!== "undefined")
          return d.planets[1].substring(0,2);
      });


      // Third Planet 
      planet_container
      .selectAll(".planetText3")
      .data(this.props.data)
      .enter()
      .append("text")
      .attr("class", "planetClass3")
      .on("mouseover", function (d) {
                        div.transition()		
                        .duration(200)		
                        .style("opacity", .9)
                        .style("width","auto")			
                        div.html(d.planets[2])	
                        .style("left", (d3.event.clientX-20) + "px")		
                        .style("top", (d3.event.clientY +20) + "px");
      })
      .on("mouseout", function (d) {
                        div.transition()		
                        .duration(200)		
                        .style("opacity", 0)
                        .style("width","auto")			
       })
      .attr("transform", function (d,i) {
        if(i === 0){
          return "translate("+(house1_x+50)+","+(house1_y)+")";
        }
        else if(i===1){
          return "translate("+ (house1_x - 80)+","+(house1_y - 90)+")";
        }
        else if(i===2){
          return "translate("+ (house1_x - 180)+","+(house1_y + 20)+")";
        }
        else if(i===3){
          return "translate("+ (house1_x - 140)+","+(house1_y + 100)+")";
        }
        else if(i===4){
          return "translate("+ (house1_x - 180)+","+(house1_y + 220)+")";
        }
        else if(i===5){
          return "translate("+ (house1_x - 100)+","+(house1_y + 230)+")";
        }
        else if(i===6){
          return "translate("+ (house1_x + 50 )+","+(house1_y + 200)+")";
        }
        else if(i===7){
          return "translate("+ (house1_x +100 )+","+(house1_y + 235)+")";
        }
        else if(i===8){
          return "translate("+ (house1_x +180 )+","+(house1_y + 180)+")";
        }
        else if(i===9){
          return "translate("+ (house1_x + 140 )+","+(house1_y + 100)+")";
        }
        else if(i===10){
          return "translate("+ (house1_x + 180 )+","+(house1_y + 20)+")";
        }
        else if(i===11){
          return "translate("+ (house1_x + 100 )+","+(house1_y - 50)+")";
        }
        else{
          return "translate(530,500)";
    
        }
        
        
      })
      .attr("text-anchor", "middle")
      // .attr("xlink:href", function (d, i) {
      //     return "#SunSign_Arc_" + i;
      // })
      .text(function (d, i) {
        if(typeof d.planets[2]!== "undefined")
          return d.planets[2].substring(0,2);
      });

      // fourth Planet 
      planet_container
      .selectAll(".planetText4")
      .data(this.props.data)
      .enter()
      .append("text")
      .attr("class", "planetClass4")
      .on("mouseover", function (d) {
                        div.transition()		
                        .duration(200)		
                        .style("opacity", .9)
                        .style("width","auto")			
                        div.html(d.planets[3])	
                        .style("left", (d3.event.clientX-20) + "px")		
                        .style("top", (d3.event.clientY +20) + "px");
      })
      .on("mouseout", function (d) {
                        div.transition()		
                        .duration(200)		
                        .style("opacity", 0)
                        .style("width","auto")			
       })
      .attr("transform", function (d,i) {
        if(i === 0){
          return "translate("+house1_x+","+(house1_y + 50)+")";
        }
        else if(i===1){
          return "translate("+ (house1_x - 140)+","+(house1_y - 90)+")";
        }
        else if(i===2){
          return "translate("+ (house1_x - 180)+","+(house1_y + 40)+")";
        }
        else if(i===3){
          return "translate("+ (house1_x - 100)+","+(house1_y + 160)+")";
        }
        else if(i===4){
          return "translate("+ (house1_x - 180)+","+(house1_y + 240)+")";
        }
        else if(i===5){
          return "translate("+ (house1_x - 140)+","+(house1_y + 280)+")";
        }
        else if(i===6){
          return "translate("+ (house1_x )+","+(house1_y + 150)+")";
        }
        else if(i===7){
          return "translate("+ (house1_x +140 )+","+(house1_y + 270)+")";
        }
        else if(i===8){
          return "translate("+ (house1_x +180 )+","+(house1_y + 150)+")";
        }
        else if(i===9){
          return "translate("+ (house1_x + 100 )+","+(house1_y + 140)+")";
        }
        else if(i===10){
          return "translate("+ (house1_x + 180 )+","+(house1_y + 40)+")";
        }
        else if(i===11){
          return "translate("+ (house1_x + 140 )+","+(house1_y - 70)+")";
        }
        else{
          return "translate(530,500)";
    
        }
        
        
      })
      .attr("text-anchor", "middle")
      // .attr("xlink:href", function (d, i) {
      //     return "#SunSign_Arc_" + i;
      // })
      .text(function (d, i) {
        if(typeof d.planets[3]!== "undefined")
          return d.planets[3].substring(0,2);
      });
      
// fiveth Planet 

planet_container
.selectAll(".planetText5")
.data(this.props.data)
.enter()
.append("text")
.attr("class", "planetClass5")
.on("mouseover", function (d) {
                        div.transition()		
                        .duration(200)		
                        .style("opacity", .9)
                        .style("width","auto")			
                        div.html(d.planets[4])	
                        .style("left", (d3.event.clientX-20) + "px")		
                        .style("top", (d3.event.clientY +20) + "px");
})
.on("mouseout", function (d) {
                        div.transition()		
                        .duration(200)		
                        .style("opacity", 0)
                        .style("width","auto")			
       })
.attr("transform", function (d,i) {
  if(i === 0){
    return "translate("+house1_x+","+(house1_y-30)+")";
  }
  else if(i===1){
    return "translate("+ (house1_x - 60)+","+(house1_y - 70)+")";
  }
  else if(i===2){
    return "translate("+ (house1_x - 140)+","+(house1_y )+")";
  }
  else if(i===3){
    return "translate("+ (house1_x - 50)+","+(house1_y + 100)+")";
  }
  else if(i===4){
    return "translate("+ (house1_x - 180)+","+(house1_y + 180)+")";
  }
  else if(i===5){
    return "translate("+ (house1_x - 60)+","+(house1_y + 280)+")";
  }
  else if(i===6){
    return "translate("+ (house1_x - 50 )+","+(house1_y + 200)+")";
  }
  else if(i===7){
    return "translate("+ (house1_x + 60 )+","+(house1_y + 270)+")";
  }
  else if(i===8){
    return "translate("+ (house1_x +180 )+","+(house1_y + 240)+")";
  }
  else if(i===9){
    return "translate("+ (house1_x + 50 )+","+(house1_y + 100)+")";
  }
  else if(i===10){
    return "translate("+ (house1_x + 150 )+","+(house1_y)+")";
  }
  else if(i===11){
    return "translate("+ (house1_x + 60 )+","+(house1_y - 70)+")";
  }
  else{
    return "translate(530,500)";

  }
  
  
})
.attr("text-anchor", "middle")
// .attr("xlink:href", function (d, i) {
//     return "#SunSign_Arc_" + i;
// })
.text(function (d, i) {
  if(typeof d.planets[4]!== "undefined")
          return d.planets[4].substring(0,2);
});



  }
    

   
  draw_chart_layout() {
    
    var json = [
      {
        chart: "D1",
        Asc: 11,
        rashi: {
          11: ["Su", "Ma", "Sa"],
          12: ["Me"],
          1: ["Mo"],
          2: ["Ra", "Ju"],
          3: [],
          6: [],
          7: [],
          8: [],
          9: [],
          10: ["Ke"],
          11: [],
          12: ["Ve"],
        },
      },
    ];
    var w = 1080;
    var h = 630;
    var x = w / 2;
    var y = h / 2;
    var svg = d3
      .select(this.d3_Chart_ref.current)
      .append("svg")
      // .attr("width", w)
      // .attr("height", h)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "300 80 " + w + " " + h + "");

    var container = svg.append("g").attr("id", "container");

    var rectangle = container
      .append("rect")
      .style("stroke", "black")
      .style("stroke-width", "2px")
      .style("fill", "none")
      .attr("x", x - 200)
      .attr("y", y - 100)
      .attr("width", 400)
      .attr("height", 400);

    var rectangle2 = container
      .append("rect")
      .style("stroke", "black")
      .style("stroke-width", "2px")
      .style("fill", "none")
      .attr("x", x - 5)
      .attr("y", y - 545)
      .attr("width", 281)
      .attr("height", 281)
      .attr("transform", "rotate(45)");

    var line1 = container
      .append("line")
      .attr("x1", x + 200)
      .attr("x2", x - 200)
      .attr("y1", y + 300)
      .attr("y2", y - 100)
      .style("stroke", "black")
      .style("stroke-width", "2px")

    var line2 = container
      .append("line")
      .attr("x1", x + 200)
      .attr("x2", x - 200)
      .attr("y1", y - 100)
      .attr("y2", y + 300)
      .style("stroke", "black")
      .style("stroke-width", "2px")

    var house1_x = 540;
    var house1_y = 400;
    // planet group
    // container
    //   .append("text")
    //   .text("Su")
    //   .attr("dy", house1_y)
    //   .attr("dx", house1_x)
    //   .attr("font-size", 15)
    //   .attr("font-family", "monospace")
    //   .attr("fill", "white");

    var text = svg.append("g").attr("id", "text_");

    //Append the month names to each slice
    // container
    //   .selectAll(".monthT")
    //   .data(data)
    //   .enter()
    //   .append("text")
    //   .attr("class", "monT")
    //   .attr("x", house1_x) //Move the text from the start angle of the arc
    //   .attr("y", house1_y) //Move the text down
    //   .attr("text-anchor", "middle")
    //   // .attr("xlink:href", function (d, i) {
    //   //     return "#SunSign_Arc_" + i;
    //   // })
    //   .text(function (d, i) {
    //     return d.planets;
    //   });

      
  }

  render() {
    return (
      <>
        <div ref={this.d3_Chart_ref}></div>
      
      </>
    );
  }
}

export default NatalChart;