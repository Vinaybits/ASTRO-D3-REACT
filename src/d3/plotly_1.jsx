import React, { Component } from 'react';
import Plotly from 'plotly.js';
import { GlobalProvider, GlobalContext } from '../mycontext';

class Ploty_1 extends Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props);
        this.state = {  }
    }

componentDidMount() {

    
}

apidate_format =() =>{
    var api_data = this.context.newState_apidata;

    // var from_year = api_data.from_year;
    // var from_month = api_data.from_month;
    // var from_day =api_data.from_day;
    // var to_year = api_data.to_year;
    // var to_month = api_data.to_month;
    // var to_day = api_data.to_day;
    var x_dates = [];
    var y_planet1 = [];

    for (let i = 0; i < api_data.p_dates.length; i++) {
        const api_date = api_data.p_dates[i].date;
        const planet_1_deg = api_data.p_dates[i].planets[0].deg;

        x_dates.push(JSON.parse(JSON.stringify(api_date)));
        y_planet1.push(JSON.parse(JSON.stringify(planet_1_deg)));
    }
    console.log("Superman -"+ x_dates[0]+ "- deg-" + y_planet1[0]); 



    var trace1 = {
        x: x_dates,
        y: y_planet1,
        name: "Planet-1",
        type: "scatter",
        mode:"markers+lines"
      };
      var trace2 = {
        x: [0,10],
        y: [60,230],
        name: "Planet-2",
        type: "scatter"
      };
      var trace3 = {
      x:x_dates,  
      y:[15, 45,75,105,135,165,195,225,255,285,315,345],
      text:["Aries","Taurus","Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
      mode:"text",
      name:"Zodiac Signs"
      }
     
      var layout = {
          
        showlegend: true,
        autosize:false,
        width:1000,
        height:600,
        title: "Double Y Axis Example",
        hovermode:"x|y",
        hoverdistance:100,
        spikedistance:1000,
        

        xaxis:{
            title:"X-Axis",
            showgrid:false,
            zeroline:false,
            showticklabels:true,
            showspikes:true, 
    //         range: ['2020-01-01', '2020-12-31'],
    // type: 'date',
    
        spikethickness:1,
        spikedash:"dot",
        spikecolor:"#999999",
        spikemode:"across",
            
            
            tickfont:{
                family:'Arial',
                size:12,
                color:'rgb(82, 82, 82)',
        },
        linecolor:'rgb(204, 204, 204)',
        linewidth:2,
        ticks:'outside', tickcolor: '#000', tickangle: 45, rangemode: 'nonnegative',
        },

        yaxis: {
            showgrid:false,
            zeroline:false,
            showspikes:true, 
    
        spikethickness:1,
        spikedash:"dot",
        spikecolor:"red",
        spikemode:"across",
            gridcolor:'#efefef',
            showticklabels:true,
            linecolor:'rgb(204, 204, 204)',
            linewidth:2,
            tickfont:{
                family:'Arial',
                size:12,
                color:'rgb(82, 82, 82)',
            },
            rangemode: 'tozero',
            autorange: true,
            ticks:'outside',
            tickmode : 'array',
            tickvals : [0, 30, 60, 90, 120, 150,180,210,240,270,300,330,360],
        },
                  shapes: [
                    // 1st highlight during Feb 4 - Feb 6
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: -2,
                        y0: 0,
                        x1: x_dates[x_dates.length-1],
                        y1: 30,
                        fillcolor:"rgb(165,0,38)",
                        opacity:0.3,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 30,
                        x1: 10,
                        y1: 60,
                        fillcolor:"rgb(215,48,39)",
                        opacity:0.3,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 60,
                        x1: 10,
                        y1: 90,
                        fillcolor:"rgb(244,109,67)",
                        opacity:0.3,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 90,
                        x1: 10,
                        y1: 120,
                        fillcolor:"rgb(253,174,97)",
                        opacity:0.3,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 120,
                        x1: 10,
                        y1: 150,
                        fillcolor:"rgb(254,224,144)",
                        opacity:0.3,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 150,
                        x1: 10,
                        y1: 180,
                        fillcolor:"rgb(255,255,191)",
                        opacity:0.8,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 180,
                        x1: 10,
                        y1: 210,
                        fillcolor:"rgb(224,243,248)",
                        opacity:0.3,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 210,
                        x1: 10,
                        y1: 240,
                        fillcolor:"rgb(171,217,233)",
                        opacity:0.2,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 240,
                        x1: 10,
                        y1: 270,
                        fillcolor:"rgb(0,104,55)",
                        opacity:0.2,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 270,
                        x1: 10,
                        y1: 300,
                        fillcolor:"rgb(166,217,106)",
                        opacity:0.3,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 300,
                        x1: 10,
                        y1: 330,
                        fillcolor:"rgb(49,54,149)",
                        opacity:0.3,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: 0,
                        y0: 330,
                        x1: 10,
                        y1: 360,
                        fillcolor:"#efefef",
                        opacity:0.3,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                ],

        
      };
      
      var data = [trace1,trace3];
      var config = {responsive: true}
      
      Plotly.newPlot('myDiv', data, layout, config);
    
}




    
    render() { 
        return (  <> 
        <button onClick={this.apidate_format}>click me</button>
        <div id="myDiv"></div>
        </>);
    }
}
 
export default Ploty_1;