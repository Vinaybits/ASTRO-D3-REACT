/* eslint-disable no-useless-concat */
import * as d3 from 'd3';
import React, { Component } from 'react';
import { GlobalContext } from '../mycontext';
import eventDrops from 'event-drops';
import './JourneyStyles.css';
import Select from 'react-select';
import moment from "moment";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import jsPDF from "jspdf";
import "jspdf-autotable";

var _ = require('lodash');

const setTimeFormat = (timestring) => {
  timestring = timestring.split(":")
  var hours = timestring[0]
  var minutes = timestring[1]
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  // hours = hours < 10 ? hours.substring(1): hours; 
  return hours + ":" + minutes + " " + ampm
}
const planets = [
  { value: 'Sun', label: 'Sun' },
  { value: 'Moon', label: 'Moon' },
  { value: 'Mars', label: 'Mars' },
  { value: 'Mercury', label: 'Mercury' },
  { value: 'Jupiter', label: 'Jupiter' },
  { value: 'Venus', label: 'Venus' },
  { value: 'Saturn', label: 'Saturn' },
  { value: 'Rahu', label: 'Rahu' },
  { value: 'Ketu', label: 'Ketu' }
];

const filterOptions = [
  { value: 'Direction Event', label: 'Direction Event' },
  { value: 'Rashi Event', label: 'Rashi Event' },
  { value: 'Nakshtra Event', label: 'Nakshatra Event' },
  { value: 'Pada Event', label: 'Pada Event' },
  { value: 'Combustion Event', label: 'Combustion Event' },
]
class Journey extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      selectedOption: { value: 'Jupiter', label: 'Jupiter' },
      multiValue: [],
      repositories: '',
      repositoriess: '',
      currentClass: 'col-lg-10 col-md-12',
      loading: true,
      show: false,
      pdfSelectedEvents: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleMultiChange = this.handleMultiChange.bind(this);
    this.exportJourneyPDF = this.exportJourneyPDF.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePDFEvents = this.handlePDFEvents.bind(this)
    this.generatePDF = this.generatePDF.bind(this)
  }

  componentWillMount() {
    this.fetchData()
  }

  componentDidUpdate(newProps){
    if(this.props.city!==newProps.city || this.props.start!==newProps.start || this.props.end!==newProps.end){
      this.fetchData()
    }
  }

  fetchData() {
    let planetrepo = ''
    let p = this.state.selectedOption.value

    this.context.repositories.forEach(function (arrayItem) {
      if (arrayItem.planet_name === p) {
        planetrepo = arrayItem
      }
    });

    this.setState(state => {
      return {
        repositoriess: planetrepo,

      };
    }, ()=>this.setOptions());


  }

  setOptions() {
    console.log(_.isEqual(this.state.repositories, this.state.repositoriess))
    console.log(this.state.repositories)
    console.log(this.state.repositoriess)
    let array = []
    this.state.repositoriess.transits.forEach(function (arrayItem) {
      if (arrayItem !== null) {
        array.push({ label: arrayItem.event_type, value: arrayItem.event_type })
      }
    });
    this.setState(state => {
      return {
        multiValue: array,
        loading:false
      };
    }, () => this.createChart());

  }

  createChart() {
    console.log("create CHart")
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

    const updateCommitsInformation = chart => {

      const filteredData = chart.filteredData()
        .reduce(
          (total, repo) =>
            total.concat(repo.data), []
        );

      numberCommitsContainer.textContent = filteredData.length;
      // zoomStart.textContent = humanizeDate(chart.scale().domain()[0]);
      // zoomEnd.textContent = humanizeDate(chart.scale().domain()[1])

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
      range: {
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

    let repositoriesData = {}

    if (this.state.multiValue === null) {
      repositoriesData = this.state.repositoriess.transits.filter(f => !filterOptions.some(person => person.value === f.event_type)).map(repository => ({
        name: repository.event_type,
        data: repository.milestones,
      }));
    }
    else {
      repositoriesData = this.state.repositoriess.transits.filter(f => this.state.multiValue.some(person => person.value === f.event_type)).map(repository => ({
        name: repository.event_type,
        data: repository.milestones,
      }));
    }

    console.log(repositoriesData)
    //chart = d3.zoom().on("zoom", zoomed);
    d3.select('#events')
      .data([repositoriesData])
      .call(chart)

    updateCommitsInformation(chart);

  }


  handleChange = selectedOption => {
    this.setState(
      { selectedOption, loading: true }, () => this.fetchData());

  };

  handleMultiChange(option) {
    this.setState(state => {
      return {
        multiValue: option
      };
    }, () => this.createChart());
  }

  toggleClass = () => {
    (this.state.currentClass === 'col-lg-12') ? this.setState({ currentClass: 'fullscreen' }) : this.setState({ currentClass: 'col-lg-12' });
  };

  exportJourneyPDF() {
    this.setState({ show: true })
  }

  handleClose() {
    this.setState({ show: false })
  }


  handlePDFEvents(option) {
    this.setState(state => {
      return {
        pdfSelectedEvents: option
      };
    })
  }

  generatePDF() {
    this.setState({ show: false })
    const pdfData = this.state.repositories.transits.filter(f => this.state.pdfSelectedEvents.some(person => person.value === f.event_type)).map(repository => ({
      event_type: repository.event_type,
      data: repository.milestones
    }));
    let pdfArray = []
    pdfData.forEach(function (element) {
      element.data.forEach(function (milestone) {
        let singleEle = {}
        singleEle.event_type = element.event_type;
        singleEle.desc = milestone.desc.split(' ').slice(2).join(' ');;
        let datetimes = milestone.event_datetime.split(" ")
        singleEle.date = datetimes[0] + " " + datetimes[1] + " " + datetimes[2] + " " + datetimes[3];
        singleEle.time = setTimeFormat(datetimes[4].substring(0, 5));
        pdfArray.push(singleEle)
      })
    })
    pdfArray.sort(function (a, b) {
      var dateA = new Date(a.date), dateB = new Date(b.date);
      return dateA - dateB;
    });
    console.log(pdfArray)
    const grouping = _.groupBy(pdfArray, element => element.date)
    const sections = _.map(grouping, (items, date) => ({
      date: date,
      alerts: items
    }));

    console.log(sections)


    const unit = "pt";
    const orientation = "portrait"; // portrait or landscape
    const doc = new jsPDF(orientation, unit, [800, 600], true);
    var img = new Image()
    img.src = '../logo_OP.png'
    doc.addImage(img, 'png', 10, 20, 100, 30, '', 'FAST')
    const title = this.state.selectedOption.value + "'s" + " " + "Journey";
    doc.setFont("Roboto", "bold");
    doc.setFontSize(20);
    doc.setTextColor(25, 25, 112);
    doc.setFont("Roboto", "normal");
    doc.text(title, 232, 80);
    doc.setFontSize(15);
    doc.setTextColor(80, 80, 80);
    let headers = [];
    headers.push("Date");
    pdfData.forEach(function (event) {
      headers.push(event.event_type.split(" ")[0]);
    });
    let actualheaders = [headers]

    const tabledata = []

    pdfArray.forEach(function (row) {
      let newrow = []
      let time = row.time
      newrow.push(row.date)
      let index = headers.indexOf(row.event_type.split(" ")[0])
      for (var i = 1; i < headers.length; i++) {
        if (i !== index) {
          newrow.push("")
        }
        else {
          newrow.push(row.desc + " " + "@" + " " + time)
        }
      }
      tabledata.push(newrow)
    })
    console.log(tabledata)

    const dummytabledata = []

    sections.forEach(function (row) {
      let newrow = new Array(headers.length)
      newrow.fill("")
      newrow[0] = row.date
      let end = 0;
      console.log(headers)
      for (var i = 0; i < row.alerts.length; i++) {
        end = headers.indexOf(row.alerts[i].event_type.split(" ")[0]);
        newrow[end] += row.alerts[i].desc + " " + "@" + " " + row.alerts[i].time + "\n"
      }
      dummytabledata.push(newrow)
    })
    console.log(dummytabledata)



    let content = {
      startY: 150,
      theme: 'grid',
      head: actualheaders,
      body: dummytabledata,
      headerStyles: {
        fontSize: 11,
        halign: 'center',
      },
      bodyStyles: {
        fontSize: 10,
        halign: 'center',
      },
      rowPageBreak: 'avoid'
    };
    let monthNames = ["Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug",
      "Sep", "Oct", "Nov", "Dec"];

    let start = this.context.startDate.split("/")

    let sday = start[2]
    let smonthName = monthNames[parseInt(start[1]) - 1];

    let syear = start[0]
    let end = this.context.endDate.split("/")

    let eday = end[2]
    let emonthName = monthNames[parseInt(end[1]) - 1];

    let eyear = end[0]

    let tabletitle = "From" + " " + sday + "," + " " + smonthName + " " + syear + " " + "To" + " " + eday + "," + " " + emonthName + " " + eyear
    doc.text(tabletitle, 200, 130);
    doc.autoTable(content);
    doc.setFontSize(10);
    doc.setTextColor(255, 0, 0);
    let str = "Powered By OmParashar"
    doc.text(str, 450, doc.internal.pageSize.getHeight() - 30)
    doc.save("Omparashar_journey.pdf")
  }

  generateCircularPDF() {
    const unit = "pt";
    const orientation = "portrait"; // portrait or landscape
    const doc = new jsPDF(orientation, unit, [800, 600], true);
    var img = new Image()
    img.src = '../logo_OP.png'
    doc.addImage(img, 'png', 10, 20, 100, 30, '', 'FAST')
    const title = "Brief journey";
    doc.setFont("Roboto", "bold");
    doc.setFontSize(20);
    doc.setTextColor(25, 25, 112);
    doc.setFont("Roboto", "normal");
    doc.text(title, 232, 80);
    doc.setFontSize(15);
    doc.setTextColor(80, 80, 80);
  }




  render() {
    const { selectedOption } = this.state;
    return <>
      <span>{this.context.reset}</span>
      <div className="col-lg-14">
        <div id="d3graph">
          <div className="card">

            <div className="card-body" style={{ "padding": "10px" }}>
              <div className="row" style={{ paddingBotton: "30px" }}>
                <div className="col-lg-12">
                  <form className="form-inline" style={{ fontSize: "1.1em", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="form-group mx-md-3">
                      <label className="mr-2">Location:</label>
                      <label className="mr-2" style={{ color: "#343a40" }}>{this.context.placeobserved}</label>
                    </div>
                    <div className="form-group mx-md-3">
                      <label className="mr-2">Start Date:</label>
                      <label className="mr-2" style={{ color: "#343a40" }}>{this.context.startDate}</label>
                    </div>
                    <div className="form-group mx-md-3">
                      <label className="mr-2">End Date:</label>
                      <label className="mr-2" style={{ color: "#343a40" }}>{this.context.endDate}</label>
                    </div>
                    <button type="button" className="btn btn-danger waves-effect waves-light mr-1" onClick={() => this.props.handleView()}><i className="mdi mdi-circle mr-1"></i> Reset</button>
                  </form>
                </div>
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
                <button
                  type="submit"
                  className="ladda-button btn pdf"
                  style={{ backgroundColor: "rgb(3, 66, 141)", color: "#fff", margin: "32px", fontSize: "0.9rem" }}
                  onClick={this.exportJourneyPDF}
                >
                  Generate PDF
                    </button>
                <Modal show={this.state.show} onHide={this.handleClose} centered>

                  <Modal.Header
                    closeButton
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Modal.Title style={{ color: "rgb(3, 66, 141)", fontWeight: "bold" }}>{selectedOption.value}'s Journey</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <center>
                      <label>Select Events to be generated in PDF:
                                <Select
                          value={this.state.pdfSelectedEvents}
                          options={filterOptions}
                          onChange={this.handlePDFEvents}
                          isMulti
                        />
                      </label>
                    </center>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.generatePDF}>
                      Done
                      </Button>
                  </Modal.Footer>
                </Modal>
              </center>
              <hr style={{ "marginBottom": "2px" }} />
              <div className="row">
                <div className="col-lg-12">
                  <center><h2>{selectedOption.value}'s Transit Events Timeline</h2></center>
                  <br></br>
                  {this.state.loading ? (
                    <div>
                      <div className='loader'></div>
                    </div>)

                    : (
                      <div>
                        <div></div>
                        <div id="events" ref={this.myRef} ></div>
                        <p className="infos">
                          <span id="numberCommits"></span> Transit Events <span className="light">found between</span> <br />
                          {moment(this.context.startDate).format("Do MMMM YYYY")} <span className="light">and</span> {moment(this.context.endDate).format("Do MMMM YYYY")}
                          {/* <span id="zoomStart"></span> <span class="light">and</span> <span id="zoomEnd"></span> */}

                        </p>
                      </div>

                    )}


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