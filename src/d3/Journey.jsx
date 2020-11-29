import * as d3 from 'd3';
import * as d3zoom from 'd3-zoom';
import React, { Component,  useState  } from 'react';
import { GlobalContext } from '../mycontext';
import eventDrops from 'event-drops';
import './styles.css';
import Select from 'react-select';
import moment from "moment";
import * as cities from "../components/cities.json";
import axios from 'axios';

const planets = [
  { value: 'Jupiter', label: 'Jupiter' },
  { value: 'Sun', label: 'Sun' },
  { value: 'Moon', label: 'Moon' },
  { value: 'Mercury', label: 'Mercury' },
  { value: 'Venus', label: 'Venus' },
  { value: 'Mars', label: 'Mars' },
  { value: 'Saturn', label: 'Saturn' },
  { value: 'Rahu', label: 'Rahu' },
  { value: 'Ketu', label: 'Ketu' }
];
const planetnums = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto','Rahu'];

const filterOptions = [
            { value: 'Direction Change Event', label: 'Direction Change' },
            { value: 'Rashi Change Event', label: 'Rashi Change' },
            { value: 'Nakshtra Change Event' , label: 'Nakshatra Change' },
            { value: 'Nakshtra Pad Change Event', label: 'Pada Change' },
            { value: 'Combustion', label: 'Combustion' },
            ]
class Journey extends Component {
     static contextType = GlobalContext;
     constructor(props){
      super(props);
      this.myRef = React.createRef();
      this.state = {
            selectedOption:{ value: 'Jupiter', label: 'Jupiter' },
            multiValue: filterOptions,
            repositories:'',
            currentClass: 'col-lg-10 col-md-12'
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleMultiChange = this.handleMultiChange.bind(this);
   }
   componentWillMount() {
      this.fetchData();
   }


   fetchData() {
    let start_Date = "";
    let end_Date = "";
    let from_year = "",
      from_month = "",
      from_day = "";
    let to_year = "",
      to_month = "",
      to_day = "";
    let lat = "",
      long = "";
    let offset = "";
    let pnum = 0;
    if(this.state.selectedOption.value !=='Ketu'){
    pnum = planetnums.indexOf(this.state.selectedOption.value)
    }
    else{
        pnum=100
    }
    start_Date = this.context.startDate;
    end_Date = this.context.endDate;
    from_year = moment(start_Date).format("YYYY");
    from_month = moment(start_Date).format("MM");
    from_day = moment(start_Date).format("DD");

    to_year = moment(end_Date).format("YYYY");
    to_month = moment(end_Date).format("MM");
    to_day = moment(end_Date).format("DD");

    Object.entries(cities[0]).forEach(([key, value]) => {
      if (key === this.context.placeobserved) {
        long = Math.round(value.longitude).toFixed(2);
        lat = Math.round(value.latitude).toFixed(2);
      }
    });
      offset = Math.round(long * 4 * 60);


        let url_string =
      "http://api.omparashar.com/planet/journey/transit/overdaterange";
    //var params = "?from_year=2020&from_month=1&from_day=1&to_year=2020&to_month=6&to_day=30&lat=29.47&long=77.69&offset=19800&p_nums=3&p_nums=4";
    let params =
      "?from_year=" +
      from_year +
      "&from_month=" +
      from_month +
      "&from_day=" +
      from_day +
      "&to_year=" +
      to_year +
      "&to_month=" +
      to_month +
      "&to_day=" +
      to_day +
      "&lat=" +
      lat +
      "&long=" +
      long +
      "&offset=" +
      offset +
      "&p_num=" +
      pnum;
      var config = {
        method: 'get',
        url: url_string+params,
        headers: { }
      };
      console.log(url_string+params)
	  
	  // always use arrow function otherwise this. will not work
      axios(config)
      .then((response) => {
		  //set for SIDETABLE
		  console.log(response.data)
          this.setState(state => {
      return {
        repositories: response.data
      };
    },() => this.createChart());
    })
      .catch(function (error) {
		console.log("Result" + error);
	  });


   }

createChart() {
console.log(this.state.repositories.transits)
    

      //----end
    //   this.context
    //     .callAPI_Journey_daterange(url_string + params, this.context.placeobserved, startDate, endDate)
    //     .then((result) => {
    //       if(result){
    //           console.log(result);
    //       }
    //     });

    const addZero = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
    }

    const humanizeDate = (event_datetime) => {
    const monthNames = [
        'Jan.',
        'Feb.',
        'March',
        'Apr.',
        'May',
        'June',
        'Jul.',
        'Aug.',
        'Sept.',
        'Oct.',
        'Nov.',
        'Dec.',
    ];
    const dayNames = [
        'Sun, ',
        'Mon, ',
        'Tue, ',
        'Wed, ',
        'Thu, ',
        'Fri, ',
        'Sat, ',
    ];

    return `
       ${dayNames[event_datetime.getDay()]} ${monthNames[event_datetime.getMonth()]} ${event_datetime.getDate()} ${event_datetime.getFullYear()}
        ${addZero(event_datetime.getHours())}:${addZero(event_datetime.getMinutes())}:${addZero(event_datetime.getSeconds())}
    `;
};

const numberCommitsContainer = document.getElementById('numberCommits');
const zoomStart = document.getElementById('zoomStart');
const zoomEnd = document.getElementById('zoomEnd');

const updateCommitsInformation = chart => {

    const filteredData = chart.filteredData()
        .reduce(
                    (total, repo) => 
                    total.concat(repo.data), []
                );
            
    numberCommitsContainer.textContent = filteredData.length;
    zoomStart.textContent = humanizeDate(chart.scale().domain()[0]);
    zoomEnd.textContent = humanizeDate(chart.scale().domain()[1])
    
};

const tooltip = d3
    .select('body')
    .append('div')
    .classed('tooltip', true)
    .style('opacity', 0)
    .style('pointer-events', 'auto');

const chart = eventDrops({
    d3,
    zoom: {
        onZoomEnd: () => updateCommitsInformation(chart),
    },
    range:{
        start: new Date(this.context.startDate),
        end: new Date(this.context.endDate),
    },
    drop: {
        date: d => new Date(d.event_datetime),
        onMouseOver: milestones => {
            tooltip
                .transition()
                .duration(200)
                .style('opacity', 1)
                .style('pointer-events', 'auto');

            tooltip
                .html(
                    `
                    <div class="commit">
                   
                    <div class="content">
                        <h3 class="message">${milestones.desc}</h3>
                        <p>
                           
                            on <span class="date">${humanizeDate(
                                new Date(milestones.event_datetime)
                            )}</span>
                           
                        </p>
                    </div>
                `
                )
                .style('left', `${d3.event.pageX - 30}px`)
                .style('top', `${d3.event.pageY + 20}px`);
        },
        onMouseOut: () => {
            tooltip
                .transition()
                .duration(500)
                .style('opacity', 0)
                .style('pointer-events', 'none');
        },
    },
});
let repositoriesData={}
if(this.state.multiValue === null)
{
repositoriesData = this.state.repositories.transits.filter(f => !filterOptions.some(person => person.value === f.event_type )).map(repository =>  ({
    name: repository.event_type,
    data: repository.milestones,
}));
}
else{
repositoriesData = this.state.repositories.transits.filter(f => this.state.multiValue.some(person => person.value === f.event_type )).map(repository =>  ({
    name: repository.event_type,
    data: repository.milestones,
}));
}

//chart = d3.zoom().on("zoom", zoomed);
let svg =d3.select('#events')
    .data([repositoriesData])
    .call(chart)

updateCommitsInformation(chart);
function zoomClick() {
    alert("hi");
    
    var element2 = d3.select('#events');
    var element = d3.select('#events').node();
    var width = element.getBoundingClientRect().width;
    var height = element.getBoundingClientRect().height;
   // var zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

    // var clicked = d3.event.target,
    //     direction = 1,
    //     factor = 0.2,
    //     target_zoom = 1,
    //     center = [width / 2, height / 2],
    //     extent = zoom.scaleExtent(),
    //     translate = zoom.translate(),
    //     translate0 = [],
    //     l = [],
    //     view = {x: translate[0], y: translate[1], k: zoom.scale()};

    // d3.event.preventDefault();
    // direction = (this.id === 'zoom_in') ? 1 : -1;
    // target_zoom = zoom.scale() * (1 + factor * direction);

    // if (target_zoom < extent[0] || target_zoom > extent[1]) { return false; }

    // translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
    // view.k = target_zoom;
    // l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

    // view.x += center[0] - l[0];
    // view.y += center[1] - l[1];

    // interpolateZoom([view.x, view.y], view.k);

    
    

    
  }


// const zoomIn = svg.append('button')
//           .attr('type', 'button')
//           .attr('class', 'btn btn-default timeline-pf-zoom timeline-pf-zoom-in')
//           .attr('id', 'timeline-pf-zoom-in')
//           .style('top', '10px')
//           .on('click', () => {zoomClick()});

//       zoomIn
//         .style('left', '10px')
//         .append('i')
//             .attr('class', 'fa fa-plus')
//             .attr('id', 'timeline-pf-zoom-in-icon');

//       const zoomOut = svg.append('button')
//           .attr('type', 'button')
//           .attr('class', 'btn btn-default timeline-pf-zoom')
//           .attr('id', 'timeline-pf-zoom-out')
//           .style('top', '10px')
//           .on('click', () => {zoomClick()});
//       zoomOut
//         .style('left', '10px')
//         .append('i')
//           .attr('class', 'fa fa-minus')
//           .attr('id', 'timeline-pf-zoom-out-icon');

//     const zoomSlider = svg.append('input')
//           .attr('type', 'range')
//           .attr('class', 'timeline-pf-zoom timeline-pf-slider')
//           .attr('id', 'timeline-pf-slider')
//           .style('width', '10px')
//           //.attr('value', this.sliderScale(this.zoom.scale()))
//           .attr('min', '0')
//           .attr('max', '10')
//           .attr('step', 0.1)
//           .on('input', () => {zoomClick()})
//           .on('change', () => {zoomClick()});
//       zoomSlider
//         .style('top', '10px')
//         .style('left', '10px');
}

//  handleChange(event) {
//     this.setState({planet: event.target.value});
//   }

  handleChange = selectedOption => {
    this.setState(
        { selectedOption },()=>this.fetchData());
  };

//   handleChangeEvent = (option) => {
//     this.setState(state => {
//       return {
//         multiValue: option
//       };
//     });
//   };

  handleMultiChange(option) {
   this.setState(state => {
      return {
        multiValue: option
      };
    },() => this.createChart());
  }

  toggleClass = () => {
        (this.state.currentClass === 'col-lg-10 col-md-12') ? this.setState({currentClass:'fullscreen'}) : this.setState({currentClass:'col-lg-10 col-md-12'});
    };






  
    render() {
        const { selectedOption} = this.state;

        
        return <>
                <div className={this.state.currentClass}>
                <div id="d3graph" className="col-lg-12"  >
                    <div className="card">

                        <div className="card-body" style={{ "padding": "10px" }}>
                            <div class="card-widgets">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                    data-toggle="fullscreen"
                                    onClick={this.toggleClass}>
                                    <i class="fe-maximize noti-icon"></i></a>
                            </div>
                            <center>
                    <label>Select Events:            
                    <Select
          value={this.state.multiValue}
          options={filterOptions}
          onChange={this.handleMultiChange}
          isMulti
        />
                    </label>  
                  
                    <label className="basic-single-label">Select a Planet:              
                    <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={planets}
                    />
                    </label>  
                    </center>
                    <hr style={{"marginBottom":"2px"}} />
                            <div className="row">
                                <div className="col-lg-12">
                                    <center><h2>{selectedOption.value} Transit Event Timeline</h2></center>
                                   <br></br>
                                <div id="events" ref={this.myRef} ></div>
                                <p class="infos">
            <span id="numberCommits"></span> Transit Events <span class="light">found between</span> <br />
            <span id="zoomStart"></span> <span class="light">and</span> <span id="zoomEnd"></span>
            
        </p>
                                   
                                </div>
                               
                            </div>




                        </div>
                    </div>
             
                {/* <Ploty_1 /> */}
                </div>
            </div>
        </>
    }
}


export default Journey;