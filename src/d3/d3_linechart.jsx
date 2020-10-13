import React, { Component } from 'react';
import * as d3 from 'd3';

class D3_linechart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.myD3Ref = React.createRef();
    }
    componentDidMount() {
        this.new_function();
    }
    

    start=()=>{
        // var data = [
        //     [new Date(2014, 01, 10), 404],
        //     [new Date(2014, 01, 11), 123],
        //     [new Date(2014, 01, 12), 666]
        //     ];
        
        // var warnLine = { lineValue: 200, label: 'my important threshold' };
        
       // drawLineGraph(400, 800, data, 'awesomenes', warnLine);
    }

    new_function=()=>{

        // gridlines in x axis function
function make_x_gridlines() {		
    return d3.axisBottom(x)
        .ticks(12)
}

// gridlines in y axis function
function make_y_gridlines() {		
    return d3.axisLeft(y)
        .ticks(12)
}

      // create svg element
      var svg = d3.select("#D3_line").append("svg")
      .attr("width", 1000)
      .attr("height", 600);

      // Create the scale
      var x = d3.scaleTime()
      .domain([new Date(2019, 1, 1), new Date(2019, 12, 31)])
      // This is what is written on the Axis: from 0 to 100
        .range([100, 800]); // This is where the axis is placed: from 100px to 800px

      // Draw the axis X
      svg
        .append("g")
        .attr("transform", "translate(0,390)") // This controls the vertical position of the Axis
        .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m-%d")))
        .selectAll("text")	
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

// Draw the scale Y
        var y = d3.scaleBand()
        .domain(['SS-1', 'SS-2' , 'SS-3' , 'SS-4' , 'SS-5', 'SS-6','SS-7','SS-8','SS-9','SS-10','SS-11','SS-12'])         // This is what is written on the Axis: from 0 to 100
        .range([390, 10]);         // Note it is reversed

        var y2 = d3.scaleBand()
        .domain(['Naks-1', 'Naks-2' , 'Naks-3' , 'Naks-4' , 'Naks-5', 'Naks-6','Naks-7','Naks-8','Naks-9','Naks-10','Naks-11','Naks-12','Naks-13' , 'Naks-14' , 'Naks-15', 'Naks-16','Naks-17','Naks-18','Naks-19','Naks-20','Naks-21','Naks-22','Naks-23','Naks-24'])         // This is what is written on the Axis: from 0 to 100
        .range([390, 10]);         // Note it is reversed
       
       
        var y3 = d3.scaleLinear()
        .domain([0,108])
       .range([390, 10]);  


    // Draw the axis
    svg
      .append("g")
      .attr("transform", "translate(100,0)")      // This controls the vertical position of the Axis
      .call(d3.axisLeft(y));

      svg
      .append("g")
      .attr("transform", "translate(800,0)")      // This controls the vertical position of the Axis
      .call(d3.axisRight(y2));

      svg
      .append("g")
      .attr("transform", "translate(795,0)")      // This controls the vertical position of the Axis
      .call(d3.axisLeft(y3).ticks(108,''));


      // add the X gridlines
  svg.append("g")			
  .attr("class", "grid")
  .attr("transform", "translate(0,390)")
  .call(make_x_gridlines()
      .tickSize(-390)
      .tickFormat("")
  )

// add the Y gridlines
svg.append("g")			
  .attr("class", "grid")
  .attr("transform", "translate(100,0)")
  .call(make_y_gridlines()
      .tickSize(-700)
      .tickFormat("")
  )
    }
    





    render() { 
        return ( <> 
        {/* <button onClick={this.new_function}>D3_line</button> */}
        <div id="D3_line"></div>
        </> );
    }
}
 
export default D3_linechart;