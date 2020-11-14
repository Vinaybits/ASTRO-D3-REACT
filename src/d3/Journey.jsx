import * as d3 from 'd3';
import * as d3zoom from 'd3-zoom';
import React, { Component } from 'react';
import { GlobalContext } from '../mycontext';
import eventDrops from 'event-drops';
import './styles.css';

const repositories = require('./timeline/data.json');


class Journey extends Component {
     static contextType = GlobalContext;
     constructor(props){
      super(props);
      this.myRef = React.createRef();
   }
   componentDidMount() {
      this.createChart();
   }


createChart() {

    const humanizeDate = (date) => {
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

    return `
        ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}
        ${date.getHours()}:${date.getMinutes()}
    `;
};
const gravatar = email => `http`;
  
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
    zoomEnd.textContent = humanizeDate(chart.scale().domain()[1]);
    
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
        date: d => new Date(d.date),
        onMouseOver: activity => {
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
                        <h3 class="message">${activity.message}</h3>
                        <p>
                            <a href="#" class="author">link</a>
                            on <span class="date">${humanizeDate(
                                new Date(activity.date)
                            )}</span> -
                           
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

const repositoriesData = repositories.map(repository => ({
    name: repository.eventname,
    data: repository.activity,
}));
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

    render() {
        return <>
                <div className="col-lg-10">
                <div id="d3graph" className="col-lg-12"  >
                    <div className="card">

                        <div className="card-body" style={{ "padding": "10px" }}>
                            <div class="card-widgets">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                    data-toggle="fullscreen">
                                    <i class="fe-maximize noti-icon"></i></a>
                            </div>
                            

                            <div className="row">
                                <div className="col-lg-12">
                                    <center><h2>Event Timeline</h2></center>
                                   <br></br>
                                <div id="events" ref={this.myRef} ></div>
                                <p class="infos">
            <span id="numberCommits"></span> commits <span class="light">found between</span> <br />
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