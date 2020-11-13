import * as d3 from 'd3';
import React, { Component } from 'react';
import { GlobalContext } from '../mycontext';
import eventDrops from 'event-drops';
import './styles.css';
const md5 = require('./timeline/md5');
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
const gravatar = email => `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}`;
  
const numberCommitsContainer = document.getElementById('numberCommits');
const zoomStart = document.getElementById('zoomStart');
const zoomEnd = document.getElementById('zoomEnd');

const updateCommitsInformation = chart => {
    const filteredData = chart
        .filteredData()
        .reduce((total, repo) => total.concat(repo.data), []);

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
        start: new Date('2018/01/01'),
        end: new Date('2018/01/27'),
    },
    drop: {
        date: d => new Date(d.date),
        onMouseOver: commit => {
            tooltip
                .transition()
                .duration(200)
                .style('opacity', 1)
                .style('pointer-events', 'auto');

            tooltip
                .html(
                    `
                    <div class="commit">
                    <img class="avatar" src="${gravatar(
                        commit.author.email
                    )}" alt="${commit.author.name}" title="${
                        commit.author.name
                    }" />
                    <div class="content">
                        <h3 class="message">${commit.message}</h3>
                        <p>
                            <a href="https://www.github.com/${
                                commit.author.name
                            }" class="author">${commit.author.name}</a>
                            on <span class="date">${humanizeDate(
                                new Date(commit.date)
                            )}</span> -
                            <a class="sha" href="${
                                commit.sha
                            }">${commit.sha.substr(0, 10)}</a>
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
    name: repository.name,
    data: repository.commits,
}));
d3
    .select('#events')
    .data([repositoriesData])
    .call(chart)

updateCommitsInformation(chart);

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