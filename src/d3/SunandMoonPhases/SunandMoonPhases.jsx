/* eslint-disable no-useless-concat */
import * as d3 from 'd3';
import React, { Component } from 'react';
import { GlobalContext } from '../../mycontext';
import eventDrops from 'event-drops';
import '../TransitJourney/JourneyStyles.css';
import Select from 'react-select';
import moment from "moment";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from 'axios';
import * as cities from "../../components/cities.json";
var _ = require('lodash');

var dummydata = {
   "planet_name": "",
   "from_year": 2021,
   "from_month": 1,
   "from_day": 1,
   "to_year": 2022,
   "to_month": 3,
   "to_day": 1,
   "transits": [
      {
         "event_type": "New Moon Event",
         "milestones": [
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "13-01-2021 10:31 AM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "12-02-2021 12:36 AM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "13-03-2021 03:52 PM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "12-04-2021 08:01 AM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "12-05-2021 12:30 AM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "10-06-2021 04:23 PM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "10-07-2021 06:47 AM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "08-08-2021 07:21 PM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "07-09-2021 06:22 AM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "06-10-2021 04:36 PM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "05-11-2021 02:45 AM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "04-12-2021 01:14 PM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "03-01-2022 12:04 AM"
            },
            {
               "desc": "Moon is transiting as new moon",
               "event_datetime": "01-02-2022 11:16 AM"
            }
         ]
      },
      {
         "event_type": "Rashi Event",
         "milestones": [
            {
               "desc": "Sun enters Capricorn",
               "event_datetime": "Thu, 14 Jan 2021 08:15:00"
            },
            {
               "desc": "Sun enters Aquarius",
               "event_datetime": "Fri, 12 Feb 2021 21:13:00"
            },
            {
               "desc": "Sun enters Pisces",
               "event_datetime": "Sun, 14 Mar 2021 18:04:00"
            },
            {
               "desc": "Sun enters Aries",
               "event_datetime": "Wed, 14 Apr 2021 02:33:00"
            },
            {
               "desc": "Sun enters Taurus",
               "event_datetime": "Fri, 14 May 2021 23:26:00"
            },
            {
               "desc": "Sun enters Gemini",
               "event_datetime": "Tue, 15 Jun 2021 06:02:00"
            },
            {
               "desc": "Sun enters Cancer",
               "event_datetime": "Fri, 16 Jul 2021 16:54:00"
            },
            {
               "desc": "Sun enters Leo",
               "event_datetime": "Tue, 17 Aug 2021 01:18:00"
            },
            {
               "desc": "Sun enters Virgo",
               "event_datetime": "Fri, 17 Sep 2021 01:14:00"
            },
            {
               "desc": "Sun enters Libra",
               "event_datetime": "Sun, 17 Oct 2021 13:13:00"
            },
            {
               "desc": "Sun enters Scorpio",
               "event_datetime": "Tue, 16 Nov 2021 13:03:00"
            },
            {
               "desc": "Sun enters Sagittarius",
               "event_datetime": "Thu, 16 Dec 2021 03:45:00"
            },
            {
               "desc": "Sun enters Capricorn",
               "event_datetime": "Fri, 14 Jan 2022 14:30:00"
            },
            {
               "desc": "Sun enters Aquarius",
               "event_datetime": "Sun, 13 Feb 2022 03:28:00"
            }
         ]
      },
      {
         "event_type": "Full Moon Event",
         "milestones": [
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "29-01-2021 12:47 AM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "27-02-2021 01:48 PM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "29-03-2021 12:19 AM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "27-04-2021 09:02 AM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "26-05-2021 04:44 PM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "25-06-2021 12:10 AM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "24-07-2021 08:07 AM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "22-08-2021 05:32 PM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "21-09-2021 05:25 AM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "20-10-2021 08:27 PM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "19-11-2021 02:28 PM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "19-12-2021 10:06 AM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "18-01-2022 05:19 AM"
            },
            {
               "desc": "Moon is transiting as fullmoon",
               "event_datetime": "16-02-2022 10:27 PM"
            }
         ]
      }
   ]
}




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

const filterOptions = [
  { value: 'New Moon Event', label: 'New Moon Event' },
  { value: 'Rashi Event', label: 'Rashi Event' },
  { value: 'Full Moon Event', label: 'Full Moon Event' },
]



class Journey extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      multiValue: [],
      currentClass: 'col-lg-10 col-md-12',
      repositories:'',
      loading: true,
      show: false,
      pdfSelectedEvents: [],
    }
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
      this.setState({loading:true})
      this.fetchData()
    }
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
      "http://api.omparashar.com/transit/sunmoonphase";
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
      offset 
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
        repositories: response.data,
        loading:false
      };
    },() => this.setOptions());
    })
      .catch(function (error) {
		console.log("Result" + error);
	  });

  }

  setOptions() {
    let array = []
    this.state.repositories.transits.forEach(function (arrayItem) {
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
      repositoriesData = this.state.repositories.transits.filter(f => !filterOptions.some(person => person.value === f.event_type)).map(repository => ({
        name: repository.event_type,
        data: repository.milestones,
      }));
    }
    else {
      repositoriesData = this.state.repositories.transits.filter(f => this.state.multiValue.some(person => person.value === f.event_type)).map(repository => ({
        name: repository.event_type,
        data: repository.milestones,
      }));
    }
    //chart = d3.zoom().on("zoom", zoomed);
    d3.select('#events')
      .data([repositoriesData])
      .call(chart)
    updateCommitsInformation(chart);
  }

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
        singleEle.desc = milestone.desc;
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
    const title = "Sun and Moon Phases";
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
      headers.push(event.event_type.split(" ").slice(0, -1).join(" "));
    });
    let actualheaders = [headers]

    // const tabledata = []

    // pdfArray.forEach(function (row) {
    //   let newrow = []
    //   let time = row.time
    //   newrow.push(row.date)
    //   let index = headers.indexOf(row.event_type.split(" ").slice(0, -1).join(" "))
    //   for (var i = 1; i < headers.length; i++) {
    //     if (i !== index) {
    //       newrow.push("")
    //     }
    //     else {
    //       newrow.push(row.desc + " " + "@" + " " + time)
    //     }
    //   }
    //   tabledata.push(newrow)
    // })
    
    const dummytabledata = []

    sections.forEach(function (row) {
      let newrow = new Array(headers.length)
      newrow.fill("")
      newrow[0] = row.date
      let end = 0;

      for (var i = 0; i < row.alerts.length; i++) {
        end = headers.indexOf(row.alerts[i].event_type.split(" ").slice(0, -1).join(" "));
        newrow[end] += row.alerts[i].desc + " " + "@" + " " + row.alerts[i].time + "\n"
      }
      dummytabledata.push(newrow)
    })




    let content = {
      startY: 150,
      theme: 'grid',
      head: actualheaders,
      body: dummytabledata,
      headStyles: {
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
                   
                    <button type="button" className="btn btn-outline" onClick={() => this.props.handleView()} style={{marginLeft:"40px", color:"rgb(211,163,58",borderColor:"rgb(211,163,58"}}><i className="mdi mdi-refresh"></i> Reset</button>
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
                    <Modal.Title style={{ color: "rgb(3, 66, 141)", fontWeight: "bold" }}>Sun Moon Phases</Modal.Title>
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
                  <center><h2>Sun and Moon Phases</h2></center>
                  <br></br>
                  {this.state.loading ? (
                    <div>
                      <div className='loader'></div>
                    </div>
                    )

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