import React, { Component } from 'react';
import * as d3 from 'd3';
import './d3.css';
import { GlobalProvider, GlobalContext } from '../mycontext';
import * as bg_img from '../components/bg_naks.jpg'


class BarChart extends Component {
    static contextType = GlobalContext;
    constructor(props) {

        super(props);
       

        this.myRef = React.createRef();



    }



    componentDidMount() {
        console.log("context");
        console.log(this.context.planet);
       
        this.astro_wheel(this.context.planet);
        this.draw_planets(this.context.planet);

        

    }

    astro_wheel(planets) {

        // Create dummy data
        var data = [{
            name: "Pis",
            value: 30
        }, {
            name: "Aqu",
            value: 30
        }, {
            name: "Cap",
            value: 30
        }, {
            name: "Sag",
            value: 30
        }, {
            name: "Sco",
            value: 30
        }, {
            name: "Lib",
            value: 30
        }, {
            name: "Vir",
            value: 30
        }, {
            name: "Leo",
            value: 30
        }, {
            name: "Can",
            value: 30
        }, {
            name: "Gem",
            value: 30
        }, {
            name: "Tau",
            value: 30
        }, {
            name: "Ari",
            value: 30
        },];

        var data2 = [{
            name: "Revati",
            value: 13.33
        }, {
            name: "   U.Bhādrapadā",
            value: 13.33
        }, {
            name: "   P.Bhādrapadā",
            value: 13.33
        }, {
            name: "Shatabhisha",
            value: 13.33
        }, {
            name: "Śrāviṣṭha",
            value: 13.33
        }, {
            name: "Śrāvaṇa",
            value: 13.33
        }, {
            name: "   U.Āṣāḍhā",
            value: 13.33
        }, {
            name: "  P.Āshādhā",
            value: 13.33
        }, {
            name: "Mula",
            value: 13.33
        }, {
            name: "Jyeshtha",
            value: 13.33
        }, {
            name: "Anurādhā",
            value: 13.33
        }, {
            name: "Viśākhā",
            value: 13.33
        }, {
            name: "Svātī",
            value: 13.33
        }, {
            name: "Chitra",
            value: 13.33
        }, {
            name: "Hasta",
            value: 13.33
        }, {
            name: "Uttara",
            value: 13.33
        }, {
            name: "Pūrva",
            value: 13.33
        }, {
            name: "Maghā",
            value: 13.33
        }, {
            name: "Āshleshā",
            value: 13.33
        }, {
            name: "Pushya",
            value: 13.33
        }, {
            name: "Punarvasu",
            value: 13.33
        }, {
            name: "Ārdrā",
            value: 13.33
        }, {
            name: "Mrigashīrsha",
            value: 13.33
        }, {
            name: "Rohini",
            value: 13.33
        }, {
            name: "Krittika",
            value: 13.33
        }, {
            name: "Bharani",
            value: 13.33
        }, {
            name: "Ashwini",
            value: 13.33
        }]

        var data3 = {
            a1: 30,
            b2: 30,
            c3: 30,
            d4: 30,
            e5: 30,
            f6: 30,
            g7: 30,
            h8: 30,
            i9: 30,
            j10: 30,
            k11: 30,
            l12: 30,
            a13: 30,
            b14: 30,
            c15: 30,
            d16: 30,
            e17: 30,
            f18: 30,
            g19: 30,
            h20: 30,
            i21: 30,
            j22: 30,
            k23: 30,
            l24: 30,
            a25: 30,
            b26: 30,
            c27: 30,
            a28: 30,
            b29: 30,
            c30: 30,
            d31: 30,
            e32: 30,
            f33: 30,
            g34: 30,
            h35: 30,
            i36: 30,
            j37: 30,
            k38: 30,
            l39: 30,
            a40: 30,
            b41: 30,
            c42: 30,
            d43: 30,
            e44: 30,
            f45: 30,
            g46: 30,
            h47: 30,
            i48: 30,
            j49: 30,
            k50: 30,
            l51: 30,
            a52: 30,
            b52: 30,
            c54: 30,

            a1444: 30,
            b2444: 30,
            c3444: 30,
            d4244: 30,
            e5244: 30,
            f61: 30,
            g71: 30,
            h81: 30,
            i91: 30,
            j101: 30,
            k111: 30,
            l121: 30,
            a131: 30,
            b141: 30,
            c151: 30,
            d161: 30,
            e171: 30,
            f181: 30,
            g191: 30,
            h201: 30,
            i211: 30,
            j221: 30,
            k231: 30,
            l241: 30,
            a251: 30,
            b261: 30,
            c271: 30,
            a281: 30,
            b291: 30,
            c301: 30,
            d311: 30,
            e321: 30,
            f331: 30,
            g341: 30,
            h351: 30,
            i361: 30,
            j371: 30,
            k381: 30,
            l391: 30,
            a401: 30,
            b411: 30,
            c421: 30,
            d431: 30,
            e441: 30,
            f451: 30,
            g461: 30,
            h471: 30,
            i481: 30,
            j491: 30,
            k501: 30,
            l511: 30,
            a521: 30,
            b521: 30,
            c541: 30

        }
        // -------------DATA ENDS--------------------

        // let accessRef = d3.select(this.myRef.current);
        // accessRef.style("background-color","red")

        // establish variables
        var w = 1080;
        var h = 630;
        var x = (w / 2);
        var y = (h / 2);
        //var t0 = new Date().setHours(0, 0, 0, 0);
        //var delta = (Date.now() - t0);

        // establish variables for AstroWheel
        var pie = d3.pie()
            .value(function (d) {
                return d.value;
            });



        //Sunshine wheel
        var first_inner_radius = (w / 30);
        var first_outer_radius = first_inner_radius + 30;
        // var gradient_color_sunsigns = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, 12 + 1));
        var data_ready_sunsigns = pie(data);
        var arc_sunsigns = d3.arc()
            .innerRadius(first_inner_radius)
            .outerRadius(first_outer_radius);



        //Naks Wheel
        var second_inner_radius = first_outer_radius + 20;
        var second_outer_radius = second_inner_radius + 90;
       // var gradient_color_naks = d3.scaleOrdinal(d3.quantize(d3.interpolateViridis, 27 + 1));
        var data_ready_naks = pie(data2);

        //sunshine_outer_wheel merge nkas wheel 

        var merge_inner_radius = first_outer_radius;
        var merge_outer_radius = second_inner_radius;
        //var gradient_color_sunsigns = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, 12 + 1));
        var data_ready_merge = pie(data);
        var arc_merge = d3.arc()
            .innerRadius(merge_inner_radius)
            .outerRadius(merge_outer_radius)




        //PADAS Wheel
        var third_inner_radius = second_outer_radius + 0.5;
        var third_outer_radius = third_inner_radius + 10;
        //colors
        // var gradient_color_padas = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, 108 + 1))
        var gradient_color_padas = d3.scaleOrdinal()
            .domain([0, 1, 2, 3])
            // .range(["#E57E38", "#F8A93F", "#F8A074", "#F5C6A3"]);
            //.range(["#F8A074", "#F5C6A3", "#F8A93F", ""]);
            // .range(["#2e687c", "#398099", "#3e8ca7", "#4398b5"]);
            //.range(["#355d67", "#3d6c78", "#467b89", "#5899aa"]);

            .range(["#4ea1be", "#6bb0c9", "#87bfd3", "#a4cfde"]);
        //.range(["#467b89", "#468976", "#89467b", "#895446"]);

        var data_ready_padas = pie(d3.entries(data3))
        // for animation purpose 
        var arc_padas = d3.arc()
            .innerRadius(third_inner_radius)
            .outerRadius(third_outer_radius);

        var svg = d3.select(this.myRef.current).append("svg")
            // .attr("width", w)
            // .attr("height", h)
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 "+w+" "+h+"")

           // .style("background-color", "#1E4452")
           // .style("background-image", "url("+bg_img+")")
            ;

        var tooltip = d3.select(this.myRef.current)
            .append('div')
            .attr('class', 'tooltip212 tooltip-top')
            .attr('id', 'tooltip_id');

        tooltip.append('div')
            .attr('class', 'label');

        tooltip.append('div')
            .attr('class', 'count');

        tooltip.append('div')
            .attr('class', 'percent');

        //sun
        svg.append("circle")
            .attr("r", 10)
            .attr("cx", x)
            .attr("cy", y)
            .style("fill", "#363538")
            .attr("id", "sun");

        // planet group
        var container = svg.append("g")
            .attr("id", "orbit_container")
           
            .attr("transform", "translate(" + x + "," + y + ")");
        //draw donuts 


        // Compute the position of each group on the pie:
        container.selectAll('sunsign_wheel_merge')
            .data(data_ready_merge)
            .enter()
            .append('path')
            .attr("class", "sunsign_merge")
            .attr("id", function (d, i) {
                return "SunSign_Arc_merge" + i;
            }) //Unique id for each slice
            .attr('d', arc_merge

            )
            // .attr('fill', function(d) {
            //     return gradient_color_sunsigns(d.data.key)
            // })
            .attr("fill", "#363538")
            .attr("stroke", "#fff")
            .style("stroke-width", "0.5px")
            .style("opacity", 0.7)


        // -----SUNSIGN WHEEL----------------
        container.selectAll('sunsign_wheel')
            .data(data_ready_sunsigns)
            .enter()
            .append('path')
            .attr("class", "sunsign")
            .attr("id", function (d, i) {
                return "SunSign_Arc_" + i;
            }) //Unique id for each slice
            .attr('d', arc_sunsigns

            )
            // .attr('fill', function(d) {
            //     return gradient_color_sunsigns(d.data.key)
            // })
            .attr("fill", "#467B89")
            .attr("stroke", "#fff")
            .style("stroke-width", "0.5px")
            .style("opacity", 0.7)
            .style("pointer-events", "all")
            .on('mouseover', function () {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .style('opacity', 1)
                    .style("stroke-width", "0px")
                    .attr("fill", "#E57E38");


            })
            .on('mouseout', function () {
                d3.select(this)
                    .transition()
                    .duration(40)
                    .style('opacity', 0.7)
                    .style("stroke-width", "0.5px")
                    .attr("fill", "#467B89");
            })
            .transition()
            .duration(700)
            .attrTween("d", function (d) {
                var i = d3.interpolate(d.startAngle, d.endAngle);
                return function (t) {
                    d.endAngle = i(t);
                    return arc_sunsigns(d);
                }
            });




        //Append the month names to each slice
        container.selectAll(".monthText")
            .data(data)
            .enter().append("text")
            .attr("class", "monthText")
            .attr("x", 15) //Move the text from the start angle of the arc
            .attr("dy", -4) //Move the text down
            .append("textPath")
            .attr("text-anchor", "middle")
            .attr("xlink:href", function (d, i) {
                return "#SunSign_Arc_" + i;
            })
            .text(function (d) {
                return d.name;
            });

        //-------NAKS WHEEL-----------------
        container.selectAll('naks_wheel')
            .data(data_ready_naks)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(second_inner_radius)
                .outerRadius(second_outer_radius))
            // .attr("fill", function(d) {
            //     return gradient_color_naks(d.data.key)

            // })
            .attr("fill", "#467B89")
            .attr("stroke", "#fff")
            .style("stroke-width", "0.5px")
            .style("opacity", 0.7)
            .attr("id", function (d, i) {
                return "NAKS_Arc_" + i;
            }) //Unique id for each slice
            .on('mouseover', function () {

                d3.select(this)
                    .transition()
                    .duration(500)
                    .style('opacity', 1)

                    .style("stroke-width", "0px")
                    .attr("fill", "#E57E38");


            })
            .on('mouseout', function () {
                d3.select(this)
                    .transition()
                    .duration(40)
                    .style('opacity', 0.7)
                    .style("stroke-width", "0.5px")
                    .attr("fill", "#467B89");
            });


        // Scales
        var x = d3.scaleBand()
            .range([0, 2 * Math.PI]) // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
            .align(0) // This does nothing
            .domain(data2.map(function (d) {
                return d.name;
            })); // The domain of the X axis is the list of states.
        var y = d3.scaleOrdinal()
            .range([second_inner_radius, second_outer_radius]) // Domain will be define later.
            .domain([0, 14000]); // Domain of Y is from 0 to the max seen in the data

        //------Adding NAKS NAME
        container.append("g")
            .selectAll("g")
            .data(data2)
            .enter()
            .append("g")
            .attr("class", "naksText")
            .attr("text-anchor", function (d) {
                return (x(d.name) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start";
            })
            .attr("transform", function (d) {
                return "rotate(" + ((x(d.name) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")" + "translate(" + (y(d['Value']) + 10) + ",0)";
            })
            .append("text")
            .text(function (d) {
                return (d.name)
            })
            .attr("transform", function (d) {
                return (x(d.name) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)";
            })
            .attr("alignment-baseline", "middle");
            

        // ----------PADAS WHEEL---------------
        container.selectAll('padas_wheel')
            .data(data_ready_padas)
            .enter()
            .append('path')
            .attr('d', arc_padas)
            .attr('fill', function (d) {
                //console.log("hi" + d);
                return gradient_color_padas(d.data.key)

            })
            .attr("stroke", "#8d8c8a")
            .style("stroke-width", "1.2px")
            .style("opacity", 1)
            .attr("id", function (d, i) {
                return "PADAS_Arc_" + i;
            });//Unique id for each slice

        //uncomment this section for PADAS animation 

        // .transition()
        // .duration(2000)
        // .attrTween("d", function (d) {
        //     var i = d3.interpolate(d.endAngle, d.startAngle);
        //     return function (t) {
        //         d.startAngle = i(t);
        //         return arc_padas(d);
        //     }
        // })
        ;

        //update will go here 

        // draw planets and moon clusters



    };


    draw_planets(planets) {
       


        d3.select("#orbit_container").selectAll("g.planet")
            .data(planets)
            .enter()
            .append("g")
            .attr("class", "planet_cluster")
            .each(function (d, i) {

                d3.select(this)

                .append("text")
                .attr("transform", "translate(" + (d.R - 4) + ",0)")
                .attr("y", 20)

                .attr("class", "Planet_Text")
                .text(function (d) {
                   // console.log(d.name);
                    return d.name;
                });

                d3.select(this).append("circle") // draw a circle
                    .attr("class", "orbit") // setting css class 

                    .attr("r", d.R); // setting the radius of ORBIT from data 




                d3.select(this)
                    .append("line")
                    .attr("x1", d.R)
                    .attr("y1", 0)
                    .attr("y2", 0)
                    .attr("x2", 0)
                    .attr("stroke", d.color)
                    .attr("stroke-width", 1)
                    .attr("class", "planet_line")


               

                // Show Degree Area 

                // d3.select(this)
                // .append("text")
                // .attr("transform", "translate(310,-12)")
                // .attr("y", 4)

                // .attr("class", "Planet_degree")
                // .text(function (d) {
                //    // console.log(d.degree);
                //     return d.degree ;
                // });

                var tooltip_ = d3.select("#tooltip_id");
                var htmlfor_tooltip = function (d) {
                    var sunshine_data = [{
                        name: "Pisces",
                        value: 30,
                        id: 11
                    }, {
                        name: "Aquarius",
                        value: 30,
                        id: 10
                    }, {
                        name: "Capricorn",
                        value: 30,
                        id: 9
                    }, {
                        name: "Sagittarius",
                        value: 30,
                        id: 8
                    }, {
                        name: "Scorpio",
                        value: 30,
                        id: 7
                    }, {
                        name: "Libra",
                        value: 30,
                        id: 6
                    }, {
                        name: "Virgo",
                        value: 30,
                        id: 5
                    }, {
                        name: "Leo",
                        value: 30,
                        id: 4
                    }, {
                        name: "Cancer",
                        value: 30,
                        id: 3
                    }, {
                        name: "Gemini",
                        value: 30,
                        id: 2
                    }, {
                        name: "Taurus",
                        value: 30,
                        id: 1
                    }, {
                        name: "Aries",
                        value: 30,
                        id: 0
                    },];

                    var naks_data = [{
                        name: "Revati",
                        value: 13.33
                    }, {
                        name: "   U. Bhādrapadā",
                        value: 13.33
                    }, {
                        name: "   P. Bhādrapadā",
                        value: 13.33
                    }, {
                        name: "Shatabhisha",
                        value: 13.33
                    }, {
                        name: "Śrāviṣṭha",
                        value: 13.33
                    }, {
                        name: "Śrāvaṇa",
                        value: 13.33
                    }, {
                        name: "   U. Āṣāḍhā",
                        value: 13.33
                    }, {
                        name: "  P. Āshādhā",
                        value: 13.33
                    }, {
                        name: "Mula",
                        value: 13.33
                    }, {
                        name: "Jyeshtha",
                        value: 13.33
                    }, {
                        name: "Anurādhā",
                        value: 13.33
                    }, {
                        name: "Viśākhā",
                        value: 13.33
                    }, {
                        name: "Svātī",
                        value: 13.33
                    }, {
                        name: "Chitra",
                        value: 13.33
                    }, {
                        name: "Hasta",
                        value: 13.33
                    }, {
                        name: "Uttara",
                        value: 13.33
                    }, {
                        name: "Pūrva",
                        value: 13.33
                    }, {
                        name: "Maghā",
                        value: 13.33
                    }, {
                        name: "Āshleshā",
                        value: 13.33
                    }, {
                        name: "Pushya",
                        value: 13.33
                    }, {
                        name: "Punarvasu",
                        value: 13.33
                    }, {
                        name: "Ārdrā",
                        value: 13.33
                    }, {
                        name: "Mrigashīrsha",
                        value: 13.33
                    }, {
                        name: "Rohini",
                        value: 13.33
                    }, {
                        name: "Krittika",
                        value: 13.33
                    }, {
                        name: "Bharani",
                        value: 13.33
                    }, {
                        name: "Ashwini",
                        value: 13.33
                    }]
                    
                    var sunshine_degree = 360 / 12;

                    var naks_degree = 360 / 27;

                    var padas_degree = 360 / 108;
                    var name = d.name;
                    var degree = d.degree;
                    var sunshine_name = "";
                    var naks_name = "";
                    var padas_number = "";
                    if (name === 'Mo') { name = 'Moon' };
                    if (name === 'Ve') { name = 'Venus' };
                    if (name === 'Ma') { name = 'Mars' };
                    if (name === 'Sa') { name = 'Saturn' };
                    if (name === 'Su') { name = 'Sun' };
                    if (name === 'Me') { name = 'Mercury' };
                    if (name === 'Ju') { name = 'Jupitor' };
                    if (name === 'Ra') { name = 'Rahu' };
                    if (name === 'Ke') { name = 'Ketu' };

                  


                    // this loop is for SUNSHINE HIGHLIGHT
                    for (var i = 0; i <= 11; i++) {

                        if (degree >= (sunshine_degree * i) && degree < (sunshine_degree * (i + 1))) {
                            //animate_color_arc("#SunSign_Arc_" + (11 - i), "red");
                           // console.log(i + "- " + degree);

                            sunshine_name = (sunshine_data[(11 - i)].name);
                        }
                    }

                    //  this loop is for NAKS highlight
                    for (var i = 0; i <= 26; i++) {
                        if (degree >= (naks_degree * i) && degree < (naks_degree * (i + 1))) {
                           // console.log(i + "- " + degree);
                            naks_name = naks_data[(26-i)].name;
                        }

                    }

                     // this loop is for PADAS highlight
                     //to calculate padas I am using this formula 
                     // var result = (degree * 60) divided by 800 (this also give naks)
                     // result decimal value * 800 
                     // If this values is within 
                     //0 to 200 it is 1st Pada, 
                     //within 200 to 400 it is 2nd Pada, 
                     //within 400 to 600 it is 3rd pada and 
                     //within 600 to 800 it is 4th pada.

                     var divide_result = (degree * 60) / 800;
                     divide_result = Math.abs(divide_result);
                     var decimal_value = divide_result - Math.floor(divide_result);
                     console.log(decimal_value);

                     var padas_no = decimal_value * 800;

                     if(padas_no < 200)
                        {
                         padas_number = 1
                        }
                        else if(padas_no >= 200 && padas_no < 400)
                        {
                            padas_number = 2
                        }
                        else if(padas_no >= 400 && padas_no < 600)
                        {
                            padas_number = 3
                        }
                        else if(padas_no >= 600 && padas_no < 800)
                        {
                            padas_number = 4
                        }
                    




                    return "<b>Planet </b> : " + name + "<br/> <b>Degree </b> :" + degree + "&#176" + "<br/> <b>Sunsign</b> :" + sunshine_name + "<br/> <b>Nak :</b>" + naks_name + "<br/> <b>Pada :</b>" + padas_number;
                }


             //To show gradient colors on planet   
               function colors(d) {
                var gradient = d3.select("#orbit_container")
                .append("svg:linearGradient")
                  .attr("id", "gradient"+d.color)
                  .attr("x1", "0%")
                  .attr("y1", "0%")
                  .attr("x2", "100%")
                  .attr("y2", "100%")
                  .attr("spreadMethod", "pad");

                gradient.append("svg:stop")
                .attr("offset", "0%")
                .attr("stop-color", "#efefef")
                .attr("stop-opacity", 1);
            
                gradient.append("svg:stop")
                .attr("offset", "100%")
                .attr("stop-color", d.color)
                .attr("stop-opacity", 1);             
                   
               }




                d3.select(this).append("circle")
                    .attr("r", d.r) // radius of planet circle 
                    .attr("cx", d.R) //setting X
                    .attr("cy", 0) // setting Y
                    //.style("fill", d.color)
                   // .style("fill", "url(#gradient)")
                    .style("fill", function (d) {
                        colors(d);
                        return "url(#gradient"+d.color+")";
                    })

                    .attr("class", "planet")
                    .on("mouseover", function (d) {
                        var x = d3.event.clientX;
                        var y = d3.event.clientY;
                        // console.log("ok" + x + "-" + y);
                        tooltip_

                            .style("left", (d3.event.clientX + 20) + "px")
                            .style("top", (d3.event.clientY - 50) + "px")

                            .select('.label').html(htmlfor_tooltip(d))

                        return tooltip_.style("display", "block");
                    })
                    .on("mouseout", function name(params) {
                        return tooltip_.style("display", "none");
                    });


                d3.select(this).append("g")
                    .attr("transform", "translate(" + d.R + ",0)")
                    .selectAll("g.moon")
                    .data(d.moons)
                    .enter()
                    .append("g")
                    .attr("class", "moon_cluster")
                    .each(function (d, i) {
                        d3.select(this).append("circle")
                            .attr("class", "orbit")
                            .attr("fill", "white")
                            .attr("r", d.R);

                        d3.select(this).append("circle")
                            .attr("r", d.r)
                            .attr("cx", d.R)
                            .attr("cy", 0)
                            .attr("class", "moon");
                    })
                // .attr("transform", function(d) {
                //     return "rotate(" + (d.phi0 + (delta * (d.speed / 100))) + ")";
                // });
            })

            .transition()

            .duration(1)
            .attr("transform", function (d) {
                getDegree_highlight(d.degree);
                return "rotate(" + ((-d.degree) - 90) + ")";
            });


        function getDegree_highlight(degree) {
            var sunshine_degree = 360 / 12;
            //console.log(sunshine_degree);
            var naks_degree = 360 / 27;
            // console.log(naks_degree);
            var padas_degree = 360 / 108;
            // console.log(padas);

            // this loop is for SUNSHINE HIGHLIGHT
            for (var i = 0; i <= 11; i++) {
                // between(degree + "hello + " + (sunshine_degree * i) + " + condition2 + " + (sunshine_degree * (i + 1)) + " jvalue +" + (11 - i) + " ");

                if (degree >= (sunshine_degree * i) && degree < (sunshine_degree * (i + 1))) {
                    animate_color_arc("#SunSign_Arc_" + (11 - i), "red");
                    //console.log("true" + j)
                }
            }

            //  this loop is for NAKS highlight
            for (var i = 0; i <= 26; i++) {
                if (degree >= (naks_degree * i) && degree < (naks_degree * (i + 1))) {
                    animate_color_arc("#NAKS_Arc_" + (26 - i), "orange");
                    //console.log("true" + j)
                }

            }

            // this loop is for PADAS highlight
            for (i = 0; i <= 107; i++) {
                if (degree >= (padas_degree * i) && degree < (padas_degree * (i + 1))) {
                    animate_color_arc("#PADAS_Arc_" + (107 - i), "#E57E38");
                    //console.log("true" + j)
                }
            }


        }

        function between(degree) {
            console.log(degree);
        }

        function animate_color_arc(id, color) {
            setTimeout(function () {
                console.log(id);
                d3.select(id)

                    .style("fill", color)

            }, 800)

        }
    }

    remove_highlight = () => {
        var sunshine_degree = 360 / 12;
        //console.log(sunshine_degree);
        var naks_degree = 360 / 27;
        // console.log(naks_degree);
        var padas_degree = 360 / 108;
        // console.log(padas);
        var gradient_color_padas = d3.scaleOrdinal()
            .domain([0, 1, 2, 3])
            .range(["#4ea1be", "#6bb0c9", "#87bfd3", "#a4cfde"]);

        // this loop is for SUNSHINE HIGHLIGHT
        for (var i = 0; i <= 11; i++) {
            // between(degree + "hello + " + (sunshine_degree * i) + " + condition2 + " + (sunshine_degree * (i + 1)) + " jvalue +" + (11 - i) + " ");
            d3.select("#SunSign_Arc_" + (11 - i)).style("fill", "#467B89");
            //console.log("true" + j)

        }

        //  this loop is for NAKS highlight
        for (var i = 0; i <= 26; i++) {

            d3.select("#NAKS_Arc_" + (26 - i)).style("fill", "#467B89");
            //console.log("true" + j)


        }

        // this loop is for PADAS highlight
        for (i = 0; i <= 107; i++) {

            d3.select("#PADAS_Arc_" + (107 - i)).style("fill", function (d) {
                //console.log("hi" + d);
                return gradient_color_padas(d.data.key)

            });
            //console.log("true" + j)

        }

    }

  
    componentDidUpdate() {
       
        d3.select("#orbit_container").selectAll("g.planet_cluster").remove();
        // this.astro_wheel(this.props.data);
        this.remove_highlight();
        this.draw_planets(this.context.planet);
       
    }





    render() {
        return <>

            <div ref={this.myRef} ></div>


        </>
    }
};

export default BarChart;