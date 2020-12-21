import React, { Component } from 'react';
import * as d3 from 'd3';
import { GlobalProvider, GlobalContext } from '../../mycontext';


class NatalChart extends Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props);
        this.d3_Chart_ref = React.createRef();


        this.state = {  }
    }
    componentDidMount() {
        this.draw_chart_layout();
    }

    draw_chart_layout()
    {
        var w = 1080;
        var h = 630;
        var x = (w / 2);
        var y = (h / 2);
        var svg = d3.select(this.d3_Chart_ref.current).append("svg")
        // .attr("width", w)
        // .attr("height", h)
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 "+w+" "+h+"");
        

        var rectangle = svg.append("rect")
                              .style("stroke", "black")
                              .style("fill", "none")
                              .attr("x", x-200)
                              .attr("y", y-100)
                              .attr("width", 400)
                              .attr("height", 400);

         var rectangle2 = svg.append("rect")
                              .style("stroke", "red")
                              .style("fill", "none")
                              .attr("x", x-5)
                              .attr("y", y-545)
                              .attr("width", 281)
                              .attr("height", 281)
                              .attr("transform", "rotate(45)");


        var line1 =   svg.append("line") 
        .attr("x1", x+200)
        .attr("x2",  x-200)
        .attr("y1", y+300)
        .attr("y2", y-100)
        .style("stroke", "red")
        .style("stroke_width", 2);    
        
        
        var line2 =   svg.append("line") 
        .attr("x1", x+200)
        .attr("x2",  x-200)
        .attr("y1", y-100)
        .attr("y2", y+300)
        .style("stroke", "green")
        .style("stroke_width", 2);    
    }






    render() { 
        return <>

            <div ref={this.d3_Chart_ref} ></div>


        </>
    }
}
 
export default NatalChart;