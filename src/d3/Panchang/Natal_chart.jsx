import React, { Component } from "react";
import * as d3 from "d3";
import { GlobalProvider, GlobalContext } from "../../mycontext";
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

  rashi_placement(){
   
    var data = 
    [
      { 
      house: "11", 
      value: ["Su", "Ma", "Sa"] 
      },
      
      { house: "12", value: ["Su", "Ma", "Sa"] },
      { house: "1", value: ["Su", "Ma", "Sa"] },
      { house: "2", value: ["Su", "Ma", "Sa"] },
      { house: "3", value: ["Su", "Ma", "Sa"] },
      { house: "4", value: ["Su", "Ma", "Sa"] },
      { house: "5", value: ["Su", "Ma", "Sa"] },
      { house: "6", value: ["Su", "Ma", "Sa"] },
      { house: "7", value: ["Su", "Ma", "Sa"] },
      { house: "8", value: ["Su", "Ma", "Sa"] },
      { house: "9", value: ["Su", "Ma", "Sa"] },
      { house: "10", value: ["Su", "Ma", "Sa"] }
    ];

    var container2 = d3.select("#container");

    container2
      .selectAll(".rashiText")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "rashiClass")
      .attr("transform", function (d,i) {
        var house1_x = 540;
        var house1_y = 400;
        if(i == 0){
          return "translate("+house1_x+","+house1_y+")";
    
        }
        else if(i==1){
          return "translate("+ (house1_x - 100)+","+(house1_y - 100)+")";
        }
        else if(i==2){
          return "translate("+ (house1_x - 120)+","+(house1_y - 80)+")";
        }
        else if(i==3){
          return "translate("+ (house1_x - 20)+","+(house1_y + 18)+")";
        }
        else if(i==4){
          return "translate("+ (house1_x - 120)+","+(house1_y + 120)+")";
        }
        else if(i==5){
          return "translate("+ (house1_x - 100)+","+(house1_y + 140)+")";
        }
        else if(i==6){
          return "translate("+ (house1_x )+","+(house1_y + 40)+")";
        }
        else if(i==7){
          return "translate("+ (house1_x +100 )+","+(house1_y + 140)+")";
        }
        else if(i==8){
          return "translate("+ (house1_x +120 )+","+(house1_y + 120)+")";
        }
        else if(i==9){
          return "translate("+ (house1_x + 20 )+","+(house1_y + 18)+")";
        }
        else if(i==10){
          return "translate("+ (house1_x + 120 )+","+(house1_y - 80)+")";
        }
        else if(i==11){
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
        return d.house;
      });


  }

  planet_positions(){
    var data = 
    [
      { 
      house: "11", 
      value: ["Su1", "Ma1", "Sa1", "Ve", "Ur"] 
      },
      
      { house: "12", value: ["Su2", "Ma2", "Sa2", "Ve", "Ur" ] },
      { house: "1", value: ["Su3", "Ma3", "Sa3" , "Ve", "Ur"] },
      { house: "2", value: ["Su4", "Ma4", "Sa" , "Ve", "Ur"] },
      { house: "3", value: ["Su7", "Ma7", "Sa" , "Ve", "Ur"] },
      { house: "4", value: ["Su7", "Ma7", "Sa" , "Ve", "Ur"] },
      { house: "5", value: ["Su7", "Ma7", "Sa" , "Ve", "Ur"] },
      { house: "6", value: ["Su7", "Ma7", "Sa" , "Ve", "Ur"] },
      { house: "7", value: ["Su9", "Ma9", "Sa" , "Ve", "Ur"] },
      { house: "8", value: ["Su10", "Ma10", "Sa" , "Ve", "Ur"] },
      { house: "9", value: ["Su11", "Ma11", "Sa" , "Ve", "Ur"] },
      { house: "10", value: ["Su12", "Ma12", "Ur"] }
    ];

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

    planet_container
      .selectAll(".planetText1")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "planetClass1")
      .attr("transform", function (d,i) {
        if(i == 0){
          return "translate("+house1_x+","+(house1_y-50)+")";
        }
        else if(i==1){
          return "translate("+ (house1_x - 100)+","+(house1_y - 70)+")";
        }
        else if(i==2){
          return "translate("+ (house1_x - 180)+","+(house1_y )+")";
        }
        else if(i==3){
          return "translate("+ (house1_x - 100)+","+(house1_y + 100)+")";
        }
        else if(i==4){
          return "translate("+ (house1_x - 180)+","+(house1_y + 200)+")";
        }
        else if(i==5){
          return "translate("+ (house1_x - 100)+","+(house1_y + 250)+")";
        }
        else if(i==6){
          return "translate("+ (house1_x )+","+(house1_y + 200)+")";
        }
        else if(i==7){
          return "translate("+ (house1_x +100 )+","+(house1_y + 250)+")";
        }
        else if(i==8){
          return "translate("+ (house1_x +180 )+","+(house1_y + 200)+")";
        }
        else if(i==9){
          return "translate("+ (house1_x + 100 )+","+(house1_y + 100)+")";
        }
        else if(i==10){
          return "translate("+ (house1_x + 180 )+","+(house1_y)+")";
        }
        else if(i==11){
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
        return d.value[0];
      });


      // second planet placement 
      planet_container
      .selectAll(".planetText2")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "planetClass2")
      .attr("transform", function (d,i) {
       
        
        if(i == 0){

          return "translate("+(house1_x - 50)+","+house1_y+")";
    
        }
        else if(i==1){
          return "translate("+ (house1_x - 120)+","+(house1_y - 50)+")";
        }
        else if(i==2){
          return "translate("+ (house1_x - 180)+","+(house1_y - 40)+")";
        }
        else if(i==3){
          return "translate("+ (house1_x - 100)+","+(house1_y + 80)+")";
        }
        else if(i==4){
          return "translate("+ (house1_x - 180)+","+(house1_y + 160)+")";
        }
        else if(i==5){
          return "translate("+ (house1_x - 100)+","+(house1_y + 270)+")";
        }
        else if(i==6){
          return "translate("+ (house1_x )+","+(house1_y + 240)+")";
        }
        else if(i==7){
          return "translate("+ (house1_x +100 )+","+(house1_y + 270)+")";
        }
        else if(i==8){
          return "translate("+ (house1_x +180 )+","+(house1_y + 220)+")";
        }
        else if(i==9){
          return "translate("+ (house1_x + 100 )+","+(house1_y + 80)+")";
        }
        else if(i==10){
          return "translate("+ (house1_x + 180 )+","+(house1_y - 30 )+")";
        }
        else if(i==11){
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
        return d.value[1];
      });


      // Third Planet 
      planet_container
      .selectAll(".planetText3")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "planetClass3")
      .attr("transform", function (d,i) {
        if(i == 0){
          return "translate("+(house1_x+50)+","+(house1_y)+")";
        }
        else if(i==1){
          return "translate("+ (house1_x - 80)+","+(house1_y - 90)+")";
        }
        else if(i==2){
          return "translate("+ (house1_x - 180)+","+(house1_y + 20)+")";
        }
        else if(i==3){
          return "translate("+ (house1_x - 140)+","+(house1_y + 100)+")";
        }
        else if(i==4){
          return "translate("+ (house1_x - 180)+","+(house1_y + 220)+")";
        }
        else if(i==5){
          return "translate("+ (house1_x - 100)+","+(house1_y + 230)+")";
        }
        else if(i==6){
          return "translate("+ (house1_x + 50 )+","+(house1_y + 200)+")";
        }
        else if(i==7){
          return "translate("+ (house1_x +100 )+","+(house1_y + 235)+")";
        }
        else if(i==8){
          return "translate("+ (house1_x +180 )+","+(house1_y + 180)+")";
        }
        else if(i==9){
          return "translate("+ (house1_x + 140 )+","+(house1_y + 100)+")";
        }
        else if(i==10){
          return "translate("+ (house1_x + 180 )+","+(house1_y + 20)+")";
        }
        else if(i==11){
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
        return d.value[2];
      });

      // fourth Planet 
      planet_container
      .selectAll(".planetText4")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "planetClass4")
      .attr("transform", function (d,i) {
        if(i == 0){
          return "translate("+house1_x+","+(house1_y + 50)+")";
        }
        else if(i==1){
          return "translate("+ (house1_x - 140)+","+(house1_y - 90)+")";
        }
        else if(i==2){
          return "translate("+ (house1_x - 180)+","+(house1_y + 40)+")";
        }
        else if(i==3){
          return "translate("+ (house1_x - 100)+","+(house1_y + 160)+")";
        }
        else if(i==4){
          return "translate("+ (house1_x - 180)+","+(house1_y + 240)+")";
        }
        else if(i==5){
          return "translate("+ (house1_x - 140)+","+(house1_y + 280)+")";
        }
        else if(i==6){
          return "translate("+ (house1_x )+","+(house1_y + 150)+")";
        }
        else if(i==7){
          return "translate("+ (house1_x +140 )+","+(house1_y + 270)+")";
        }
        else if(i==8){
          return "translate("+ (house1_x +180 )+","+(house1_y + 150)+")";
        }
        else if(i==9){
          return "translate("+ (house1_x + 100 )+","+(house1_y + 140)+")";
        }
        else if(i==10){
          return "translate("+ (house1_x + 180 )+","+(house1_y + 40)+")";
        }
        else if(i==11){
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
        return d.value[3];
      });
      
// fiveth Planet 

planet_container
.selectAll(".planetText5")
.data(data)
.enter()
.append("text")
.attr("class", "planetClass5")
.attr("transform", function (d,i) {
  if(i == 0){
    return "translate("+house1_x+","+(house1_y-30)+")";
  }
  else if(i==1){
    return "translate("+ (house1_x - 60)+","+(house1_y - 70)+")";
  }
  else if(i==2){
    return "translate("+ (house1_x - 140)+","+(house1_y )+")";
  }
  else if(i==3){
    return "translate("+ (house1_x - 50)+","+(house1_y + 100)+")";
  }
  else if(i==4){
    return "translate("+ (house1_x - 180)+","+(house1_y + 180)+")";
  }
  else if(i==5){
    return "translate("+ (house1_x - 60)+","+(house1_y + 280)+")";
  }
  else if(i==6){
    return "translate("+ (house1_x - 50 )+","+(house1_y + 200)+")";
  }
  else if(i==7){
    return "translate("+ (house1_x + 60 )+","+(house1_y + 270)+")";
  }
  else if(i==8){
    return "translate("+ (house1_x +180 )+","+(house1_y + 240)+")";
  }
  else if(i==9){
    return "translate("+ (house1_x + 50 )+","+(house1_y + 100)+")";
  }
  else if(i==10){
    return "translate("+ (house1_x + 150 )+","+(house1_y)+")";
  }
  else if(i==11){
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
  return d.value[4];
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
      .attr("viewBox", "0 80 " + w + " " + h + "");

    var container = svg.append("g").attr("id", "container");

    var rectangle = container
      .append("rect")
      .style("stroke", "black")
      .style("fill", "none")
      .attr("x", x - 200)
      .attr("y", y - 100)
      .attr("width", 400)
      .attr("height", 400);

    var rectangle2 = container
      .append("rect")
      .style("stroke", "black")
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
      .style("stroke_width", 2);

    var line2 = container
      .append("line")
      .attr("x1", x + 200)
      .attr("x2", x - 200)
      .attr("y1", y - 100)
      .attr("y2", y + 300)
      .style("stroke", "black")
      .style("stroke_width", 2);

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
    //     return d.value;
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
