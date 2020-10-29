import React, { Component } from 'react';
import Plotly from 'plotly.js';
import moment from 'moment';
import { GlobalProvider, GlobalContext } from '../mycontext';

class Ploty_1 extends Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props);
        this.state = {  }
    }

componentDidMount() {
this.apidate_format();
    
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
    var y_planet0 = [];
    var y_planet1 = [];
    var y_planet2 = [];
    var y_planet3 = [];
    var y_planet4 = [];
    var y_planet5 = [];
    var y_planet6 = [];
    var y_planet7 = [];
    var y_planet8 = [];

    for (let i = 0; i < api_data.p_dates.length; i++) {
        const api_date = api_data.p_dates[i].date;
        const planet_sun = api_data.p_dates[i].planets[0].deg;
        const planet_moon = api_data.p_dates[i].planets[1].deg;
        const planet_mercury = api_data.p_dates[i].planets[2].deg;
        const planet_venus = api_data.p_dates[i].planets[3].deg;
        const planet_mars = api_data.p_dates[i].planets[4].deg;
        const planet_jupiter = api_data.p_dates[i].planets[5].deg;
        const planet_saturn = api_data.p_dates[i].planets[6].deg;
        const planet_rahu = api_data.p_dates[i].planets[7].deg;
        const planet_ketu = api_data.p_dates[i].planets[8].deg;



        var moment_obj = moment(JSON.parse(JSON.stringify(api_date)),'DD-MM-YYYY');
        var date = moment(moment_obj).format('YYYY-MM-DD');
        x_dates.push(date);
        y_planet0.push(JSON.parse(JSON.stringify(planet_sun)));
        y_planet1.push(JSON.parse(JSON.stringify(planet_moon)));
        y_planet2.push(JSON.parse(JSON.stringify(planet_mercury)));
        y_planet3.push(JSON.parse(JSON.stringify(planet_venus)));
        y_planet4.push(JSON.parse(JSON.stringify(planet_mars)));
        y_planet5.push(JSON.parse(JSON.stringify(planet_jupiter)));
        y_planet6.push(JSON.parse(JSON.stringify(planet_saturn)));
        y_planet7.push(JSON.parse(JSON.stringify(planet_rahu)));
        y_planet8.push(JSON.parse(JSON.stringify(planet_ketu)));
    }
    console.log("Superman -"+ x_dates+ "- deg-" + y_planet1[0]); 
    var date_end = x_dates[x_dates.length-1];
    var minDate_ = moment(x_dates[0],'DD-MM-YYYY');
    var minDate = moment(minDate_).format('YYYY-MM-DD');
    var maxDate_ = moment(date_end,'DD-MM-YYYY');
    var maxDate = moment(maxDate_).format('YYYY-MM-DD');

   // console.log("Dates " + minDate + "-" + (date_end) +"---- " + maxDate);



    var sun_data = {
        x: x_dates,
        y: y_planet0,
        name: "Sun",
        type: "scatter",
        mode:"lines",
        line: {
            color: '#FFE05D',
        
          }
      };
      var moon_data = {
        x: x_dates,
        y: y_planet1,
        name: "Moon",
        type: "scatter",
        mode:"lines",
        line: {
            color: '#00BCD4',
        
          }
      };

      var mercury_data = {
        x: x_dates,
        y: y_planet2,
        name: "Mercury",
        type: "scatter",
        mode:"lines",
        line: {
            color: '#335D2D',
        
          }
      };
      var venus_data = {
        x: x_dates,
        y: y_planet3,
        name: "Venus",
        type: "scatter",
        mode:"lines",
        line: {
            color: '#F4ABC4',
        
          }
      };
      var mars_data = {
        x: x_dates,
        y: y_planet4,
        name: "Mars",
        type: "scatter",
        mode:"lines",
        line: {
            color: '#DD2C00',
        
          }
      };
      var jupiter_data = {
        x: x_dates,
        y: y_planet5,
        name: "Jupiter",
        type: "scatter",
        mode:"lines",
        line: {
            color: '#F6830F',
        
          }
      };
      var saturn_data = {
        x: x_dates,
        y: y_planet6,
        name: "Saturn",
        type: "scatter",
        mode:"lines",
        line: {
            color: '#005086',
        
          }
      };
      var rahu_data = {
        x: x_dates,
        y: y_planet7,
        name: "Rahu",
        type: "scatter",
        mode:"lines",
        line: {
            color: '#322F3D',
        
          }
      };
      var ketu_data = {
        x: x_dates,
        y: y_planet8,
        name: "Ketu",
        type: "scatter",
        mode:"lines",
        line: {
            color: '#4B5D67',
        
          }
      };


      var trace3 = {
      x:[x_dates[x_dates.length-1],x_dates[x_dates.length-1],x_dates[x_dates.length-1],x_dates[x_dates.length-1],x_dates[x_dates.length-1],x_dates[x_dates.length-1],x_dates[x_dates.length-1],x_dates[x_dates.length-1],x_dates[x_dates.length-1],x_dates[x_dates.length-1],x_dates[x_dates.length-1],x_dates[x_dates.length-1]],  
      y:[15, 45,75,105,135,165,195,225,255,285,315,345],
      text:["Aries","Taurus","Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
      mode:"text",
      name:"Rashi"
       //yaxis: 'y2',
      
      }
     
      var layout = {
          
        showlegend: true,
        legend: {"orientation": "h",x: 0.01,y: 1.04},
        autosize:true,
        width:1080,
        height:720,
        title: "Path Tracing of Planets",
        hovermode:"x|y",
        hoverdistance:100,
        spikedistance:1000,
        
        
        

        xaxis:{
            title:"X-Axis",
            range: [minDate, maxDate],
            type: 'date',
            showgrid:false,
           // zeroline:false,
            showticklabels:true,
            showspikes:true, 
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
        tickangle: 45,
        rangemode: 'tozero',
        autorange: true,
        ticks:'outside',
        tickformat :'%Y~%m~%d',
       
       
        },

        yaxis: {
            showgrid:false,
           // zeroline:false,
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
            rangemode: 'nonnegative',
            autorange: true,
            ticks:'outside',
            tickmode : 'array',
            // tickangle: 45, rangemode: 'nonnegative',
            tickvals : [0, 30, 60, 90, 120, 150,180,210,240,270,300,330,360],
        },
                  shapes: [
                    // 1st highlight during Feb 4 - Feb 6
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],//1-10-2020 (1-9-2020)
                        y0: 0,
                        x1: x_dates[x_dates.length-1],
                        y1: 30,
                        fillcolor:"#fff",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 30,
                        x1: x_dates[x_dates.length-1],
                        y1: 60,
                        fillcolor:"#F3F7F9",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 60,
                        x1: x_dates[x_dates.length-1],
                        y1: 90,
                        fillcolor:"#fff",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 90,
                        x1: x_dates[x_dates.length-1],
                        y1: 120,
                        fillcolor:"#F3F7F9",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 120,
                        x1: x_dates[x_dates.length-1],
                        y1: 150,
                        fillcolor:"#fff",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 150,
                        x1: x_dates[x_dates.length-1],
                        y1: 180,
                        fillcolor:"#F3F7F9",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 180,
                        x1: x_dates[x_dates.length-1],
                        y1: 210,
                        fillcolor:"#fff",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 210,
                        x1: x_dates[x_dates.length-1],
                        y1: 240,
                        fillcolor:"#F3F7F9",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 240,
                        x1: x_dates[x_dates.length-1],
                        y1: 270,
                        fillcolor:"#fff",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 270,
                        x1: x_dates[x_dates.length-1],
                        y1: 300,
                        fillcolor:"#F3F7F9",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 300,
                        x1: x_dates[x_dates.length-1],
                        y1: 330,
                        fillcolor:"#fff",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 330,
                        x1: x_dates[x_dates.length-1],
                        y1: 360,
                        fillcolor:"#F3F7F9",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
                ],
                
        
      };
      
      var data = [sun_data,moon_data,mercury_data,venus_data,mars_data,jupiter_data,saturn_data,rahu_data,ketu_data,trace3];
      var config = {responsive: true}
      
      Plotly.newPlot('myDiv', data, layout, config);
    
}




    
    render() { 
        return (  <> 
        {/* <button onClick={this.apidate_format}>click me</button> */}
        <div id="myDiv"></div>
        </>);
    }
}
 
export default Ploty_1;