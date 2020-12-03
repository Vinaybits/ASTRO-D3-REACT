import React, { Component } from 'react';
import Plotly from 'plotly.js';
import moment from 'moment';
import { GlobalProvider, GlobalContext } from '../mycontext';
import '../d3/plotly.css';

class Plotly_NAKS extends Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props);
        this.state = { 
            view_type:'rashi',
            display_value_rashi : '',
            display_value_naks : '',
            display_value_combined:'',
            currentClass: 'col-lg-10 col-md-12'
         }
    }
    componentDidMount() {
       
            this.apidate_format_rashi();
            this.apidate_format();
            this.apidate_format_combined();
      
       
            
        }


   
        
        apidate_format =() =>{
            var gd1 = document.getElementById('myDiv_NAKS');
            var api_data = this.context.newState_apidata;
            // console.log(api_data)
            this.view_name = 'Nakshatra';
        
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
            //console.log("Superman -"+ x_dates+ "- deg-" + y_planet1[0]); 
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
        
        
              var trace2 = {
  x: [x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],
  x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],
  x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],
  x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],
  x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length]],
  y: [6.66,19.99,33.32,46.65,59.98,73.31,
    86.64,99.9,113.30, 126.63, 139.96, 153.29, 166.62, 179.95, 193.28, 206.61, 219.94, 233.27, 246.605, 259.93, 273.26, 286.59, 299.92, 313.255, 326.58, 339.91, 353.245],
  name: 'Nakshatras',
  yaxis: 'y2',
  type: 'scatter'
}

             
              var layout = {
                  
                showlegend: true,
                legend: {"orientation": "h",x: 0.01,y: 1.05},
                autosize:true,
               // width:1080,
               // height:720,
                title: "Path Tracing of Planets",
                hovermode:"x|y",
                hoverdistance:100,
                spikedistance:1000,
                
                
                
        
                xaxis:{
                    title:"Dates",
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
                yaxis2: {
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
                        size:9,
                        color:'rgb(82, 82, 82)',
                    },
                    rangemode: 'nonnegative',
                    autorange: true,
                    ticks:'outside',
                    overlaying: 'y1',
                    side:'right',
                    //tickmode : 'array',
                    // tickangle: 45, rangemode: 'nonnegative',
                    tickvals : [6.66,19.99,33.32,46.65,59.98,73.31,
                                86.64,99.9,113.30, 126.63, 139.96, 153.29, 166.62, 179.95, 193.28, 206.61, 219.94, 233.27, 246.605, 259.93, 273.26, 286.59, 299.92, 313.255, 326.58, 339.91, 353.245],
                    ticktext : [
                        "Ashwini","Bharani", "Krittika","Rohini","Mrigashīrsha","Ārdrā","Punarvasu",
                        "Pushya", "Āshleshā","Maghā","Pūrva",
                        "Uttara","Hasta","Chitra","Svātī","Viśākhā","Anurādhā","Jyeshtha","Mula","P.Āshādhā","U.Āṣāḍhā","Śrāvaṇa","Śrāviṣṭha","Shatabhisha","P.Bhādrapadā","U.Bhādrapadā","Revati"],
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
                                y1: 13.66,
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
                                y0: 13.66,
                                x1: x_dates[x_dates.length-1],
                                y1: 26.66,
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
                                y0: 26.66,
                                x1: x_dates[x_dates.length-1],
                                y1: 39.99,
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
                                y0: 39.99,
                                x1: x_dates[x_dates.length-1],
                                y1: 53.32,
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
                                y0: 53.32,
                                x1: x_dates[x_dates.length-1],
                                y1: 66.65,
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
                                y0: 66.65,
                                x1: x_dates[x_dates.length-1],
                                y1: 79.98,
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
                                y0: 79.98,
                                x1: x_dates[x_dates.length-1],
                                y1: 93.31,
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
                                y0: 93.31,
                                x1: x_dates[x_dates.length-1],
                                y1: 106.64,
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
                                y0: 106.64,
                                x1: x_dates[x_dates.length-1],
                                y1: 119.97,
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
                                y0: 119.97,
                                x1: x_dates[x_dates.length-1],
                                y1: 133.3,
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
                                y0: 133.3,
                                x1: x_dates[x_dates.length-1],
                                y1: 146.63,
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
                                y0: 146.63,
                                x1: x_dates[x_dates.length-1],
                                y1: 159.96,
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
                                y0: 159.96,
                                x1: x_dates[x_dates.length-1],
                                y1: 173.29,
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
                                y0: 173.29,
                                x1: x_dates[x_dates.length-1],
                                y1: 186.62,
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
                                y0: 182.62,
                                x1: x_dates[x_dates.length-1],
                                y1: 199.95,
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
                                y0: 199.95,
                                x1: x_dates[x_dates.length-1],
                                y1: 213.28,
                                fillcolor:"#F3F7F9",
                                //opacity:0.9,
                                layer:'below',
                                line: {
                                    width: 0
                                }
                            },
  // y:[226.61,239.94,253.27,266.6,279.93,293.26,306.59,319.92,333.25,346.58,359.91],
                            {
                                type: 'rect',
                                xref: 'x',
                                yref: 'y',
                                x0: x_dates[0],
                                y0: 213.28,
                                x1: x_dates[x_dates.length-1],
                                y1: 226.61,
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
                                y0: 226.61,
                                x1: x_dates[x_dates.length-1],
                                y1: 239.94,
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
                                y0: 239.94,
                                x1: x_dates[x_dates.length-1],
                                y1: 253.27,
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
                                y0: 253.27,
                                x1: x_dates[x_dates.length-1],
                                y1: 266.6,
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
                                y0: 266.6,
                                x1: x_dates[x_dates.length-1],
                                y1: 279.93,
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
                                y0: 279.93,
                                x1: x_dates[x_dates.length-1],
                                y1: 293.26,
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
                                y0: 293.26,
                                x1: x_dates[x_dates.length-1],
                                y1: 306.59,
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
                                y0: 306.59,
                                x1: x_dates[x_dates.length-1],
                                y1: 319.92,
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
                                y0: 319.92,
                                x1: x_dates[x_dates.length-1],
                                y1: 333.25,
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
                                y0: 333.25,
                                x1: x_dates[x_dates.length-1],
                                y1: 346.58,
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
                                y0: 346.58,
                                x1: x_dates[x_dates.length-1],
                                y1: 359.91,
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
                                y0: 359.91,
                                x1: x_dates[x_dates.length-1],
                                y1: 372,
                                fillcolor:"#F3F7F9",
                                //opacity:0.9,
                                layer:'below',
                                line: {
                                    width: 0
                                }
                            },

                            
                        ],
                        
                
              };
              
              var data = [sun_data,moon_data,mercury_data,venus_data,mars_data,jupiter_data,saturn_data,rahu_data,ketu_data,trace2];
              var config = {responsive: true , displaylogo: false}
              
              Plotly.newPlot(gd1, data, layout, config);
            
        }


apidate_format_rashi =() =>{
    var gd1 = document.getElementById('myDiv');
    var api_data = this.context.newState_apidata;
    this.view_name = 'Rashi';

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
   // console.log("Superman -"+ x_dates+ "- deg-" + y_planet1[0]); 
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


              var trace2 = {
  x: [x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length]],
  y: [15,45,75,105,135,165,195,225,255,285,315,345],
  name: 'Rashi',
  yaxis: 'y2',
  type: 'scatter'
}

      var layout = {
          
        showlegend: true,
        legend: {"orientation": "h",x: 0.01,y: 1.04},
        autosize:true,
       // width:1080,
       // height:720,
        title: "Path Tracing of Planets",
        hovermode:"x|y",
        hoverdistance:100,
        spikedistance:1000,
        
        
        

        xaxis:{
            title:"Dates",
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
         yaxis2:{
                    
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
                    overlaying: 'y1',
                    side:'right',
                    // tickangle: 45, rangemode: 'nonnegative',
                    tickvals : [15,45,75,105,135,165,195,225,255,285,315,345],
                    ticktext : ["Aries","Taurus","Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
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
      
      var data = [sun_data,moon_data,mercury_data,venus_data,mars_data,jupiter_data,saturn_data,rahu_data,ketu_data,trace2];
      var config = {responsive: true , displaylogo: false}
      
      Plotly.newPlot(gd1, data, layout, config);
    
}

apidate_format_combined =() =>{
    var gd1 = document.getElementById('myDiv_combined');
    var api_data = this.context.newState_apidata;
    this.view_name = 'combined';

     
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
    // console.log("Superman -"+ x_dates+ "- deg-" + y_planet1[0]); 
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


      var trace2 = {
        x: [x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],
        x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],
        x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],
        x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length],
        x_dates[x_dates.length],x_dates[x_dates.length],x_dates[x_dates.length]],
        y: [6.66,19.99,33.32,46.65,59.98,73.31,
          86.64,99.9,113.30, 126.63, 139.96, 153.29, 166.62, 179.95, 193.28, 206.61, 219.94, 233.27, 246.605, 259.93, 273.26, 286.59, 299.92, 313.255, 326.58, 339.91, 353.245],
        name: 'Nakshatras',
        yaxis: 'y2',
        type: 'scatter'
      }

       var layout = {
                  
                showlegend: true,
                legend: {"orientation": "h",x: 0.01,y: 1.05},
                autosize:true,
                title: "Path Tracing of Planets",
                hovermode:"x|y",
                hoverdistance:100,
                spikedistance:1000,
                
                
                
        
                xaxis:{
                    title:"Dates",
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
        
                yaxis:{
                    
                    showgrid:true,
                   // zeroline:false,
                    showspikes:true, 
            
                spikethickness:1,
                spikedash:"dot",
                spikecolor:"red",
                spikemode:"across",
                    gridcolor:'silver',
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
                    tickvals : [30,60,90,120,150,180,210,240,270,300,330,360],
                    ticktext : ["Aries","Taurus","Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
                },
                yaxis2: {
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
                        size:9,
                        color:'rgb(82, 82, 82)',
                    },
                    rangemode: 'nonnegative',
                    autorange: true,
                    ticks:'outside',
                    overlaying: 'y1',
                    side:'right',
                    tickmode : 'array',
                    // tickangle: 45, rangemode: 'nonnegative',
                    tickvals : [6.66,19.99,33.32,46.65,59.98,73.31,
                        86.64,99.9,113.30, 126.63, 139.96, 153.29, 166.62, 179.95, 193.28, 206.61, 219.94, 233.27, 246.605, 259.93, 273.26, 286.59, 299.92, 313.255, 326.58, 339.91, 353.245],
            ticktext : [
                "Ashwini","Bharani", "Krittika","Rohini","Mrigashīrsha","Ārdrā","Punarvasu",
                "Pushya", "Āshleshā","Maghā","Pūrva",
                "Uttara","Hasta","Chitra","Svātī","Viśākhā","Anurādhā","Jyeshtha","Mula","P.Āshādhā","U.Āṣāḍhā","Śrāvaṇa","Śrāviṣṭha","Shatabhisha","P.Bhādrapadā","U.Bhādrapadā","Revati"],
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
                        y1: 13.66,
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
                        y0: 13.66,
                        x1: x_dates[x_dates.length-1],
                        y1: 26.66,
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
                        y0: 26.66,
                        x1: x_dates[x_dates.length-1],
                        y1: 39.99,
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
                        y0: 39.99,
                        x1: x_dates[x_dates.length-1],
                        y1: 53.32,
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
                        y0: 53.32,
                        x1: x_dates[x_dates.length-1],
                        y1: 66.65,
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
                        y0: 66.65,
                        x1: x_dates[x_dates.length-1],
                        y1: 79.98,
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
                        y0: 79.98,
                        x1: x_dates[x_dates.length-1],
                        y1: 93.31,
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
                        y0: 93.31,
                        x1: x_dates[x_dates.length-1],
                        y1: 106.64,
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
                        y0: 106.64,
                        x1: x_dates[x_dates.length-1],
                        y1: 119.97,
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
                        y0: 119.97,
                        x1: x_dates[x_dates.length-1],
                        y1: 133.3,
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
                        y0: 133.3,
                        x1: x_dates[x_dates.length-1],
                        y1: 146.63,
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
                        y0: 146.63,
                        x1: x_dates[x_dates.length-1],
                        y1: 159.96,
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
                        y0: 159.96,
                        x1: x_dates[x_dates.length-1],
                        y1: 173.29,
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
                        y0: 173.29,
                        x1: x_dates[x_dates.length-1],
                        y1: 186.62,
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
                        y0: 182.62,
                        x1: x_dates[x_dates.length-1],
                        y1: 199.95,
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
                        y0: 199.95,
                        x1: x_dates[x_dates.length-1],
                        y1: 213.28,
                        fillcolor:"#F3F7F9",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },
// y:[226.61,239.94,253.27,266.6,279.93,293.26,306.59,319.92,333.25,346.58,359.91],
                    {
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: x_dates[0],
                        y0: 213.28,
                        x1: x_dates[x_dates.length-1],
                        y1: 226.61,
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
                        y0: 226.61,
                        x1: x_dates[x_dates.length-1],
                        y1: 239.94,
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
                        y0: 239.94,
                        x1: x_dates[x_dates.length-1],
                        y1: 253.27,
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
                        y0: 253.27,
                        x1: x_dates[x_dates.length-1],
                        y1: 266.6,
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
                        y0: 266.6,
                        x1: x_dates[x_dates.length-1],
                        y1: 279.93,
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
                        y0: 279.93,
                        x1: x_dates[x_dates.length-1],
                        y1: 293.26,
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
                        y0: 293.26,
                        x1: x_dates[x_dates.length-1],
                        y1: 306.59,
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
                        y0: 306.59,
                        x1: x_dates[x_dates.length-1],
                        y1: 319.92,
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
                        y0: 319.92,
                        x1: x_dates[x_dates.length-1],
                        y1: 333.25,
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
                        y0: 333.25,
                        x1: x_dates[x_dates.length-1],
                        y1: 346.58,
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
                        y0: 346.58,
                        x1: x_dates[x_dates.length-1],
                        y1: 359.91,
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
                        y0: 359.91,
                        x1: x_dates[x_dates.length-1],
                        y1: 372,
                        fillcolor:"#F3F7F9",
                        //opacity:0.9,
                        layer:'below',
                        line: {
                            width: 0
                        }
                    },

                    
                ],
                        
                
              };
      
      var data = [sun_data,moon_data,mercury_data,venus_data,mars_data,jupiter_data,saturn_data,rahu_data,ketu_data,trace2];
      var config = {responsive: true , displaylogo: false}
      
      Plotly.newPlot(gd1, data, layout, config);

}


switch_rasiview =()=>{
        this.setState({view_type: 'rasi'});
        this.setState({display_value_rashi:''});
        this.setState({display_value_naks:'none'});
        this.setState({display_value_combined:'none'});
}
switch_combinedview = ()=>{
    this.setState({view_type: 'combined'});
        this.setState({display_value_rashi:'none'});
        this.setState({display_value_naks:'none'});
        this.setState({display_value_combined:''});

}
switch_naksview = ()=>{
    this.setState({view_type: 'naks'});
        this.setState({display_value_rashi:'none'});
        this.setState({display_value_naks:''});
        this.setState({display_value_combined:'none'});

}

  toggleClass = () => {
        (this.state.currentClass === 'col-lg-10 col-md-12') ? this.setState({currentClass:'fullscreen'}) : this.setState({currentClass:'col-lg-10 col-md-12'});
    };



    render() { 
        return (  <> 
            {/* <button onClick={this.apidate_format}>click me</button> */}
            <div className={this.state.currentClass}>
                    <div id="d3graph" className="col-lg-12"  >
                   
                        <div className="card">
                      
                        <div className="card-body" style={{ "padding": "10px" }}>
                                {/* <div class="card-widgets">
                                   
                                    <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                        data-toggle="fullscreen" href="/#">
                                        <i class="fe-maximize noti-icon"></i></a>
                                </div> */}
                                <span class="header-title" style={{ "color": "#fff" }}>

<div class="btn-group" >
<button className="btn btn-primary btn-sm" onClick={this.switch_rasiview}>Rashi View</button>
<button className="btn btn-primary btn-sm" onClick={this.switch_naksview}>Nakshatra View</button>
<button className="btn btn-primary btn-sm" onClick={this.switch_combinedview}> Combined View </button>

</div>
                                </span>
                                <div className="row">
                                    <div className="col-lg-12" style={{width:"80%", height:"700px"}}>
                                        <center>
                                        <div id="myDiv" style={{display:this.state.display_value_rashi}}>
                                       
                                        </div>
                                      
                                        <div id="myDiv_NAKS" style={{display:this.state.display_value_naks}}></div>
                                       <div id="myDiv_combined" style={{display:this.state.display_value_combined}}></div>
                                        </center>
                
                                        
                                    </div>
                                </div> 
    
                       </div>
                    </div>
                </div>
                </div>
            </>);
    }
}
 
export default Plotly_NAKS;