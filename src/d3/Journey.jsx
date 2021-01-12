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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import jsPDF from "jspdf";
import "jspdf-autotable";
import { red } from '@material-ui/core/colors';

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
const planetnums = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto','Rahu'];

const filterOptions = [
            { value: 'Direction Event', label: 'Direction Event' },
            { value: 'Rashi Event', label: 'Rashi Event' },
            { value: 'Nakshtra Event' , label: 'Nakshatra Event' },
            { value: 'Pada Event', label: 'Pada Event' },
            { value: 'Combustion Event', label: 'Combustion Event' },
            ]
class Journey extends Component {
     static contextType = GlobalContext;
     constructor(props){
      super(props);
      this.myRef = React.createRef();
      this.state = {
            selectedOption:{ value: 'Jupiter', label: 'Jupiter' },
            multiValue: [],
            repositories:'',
            currentClass: 'col-lg-10 col-md-12',
            loading:true,
            show:false,
            pdfSelectedEvents:[]
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleMultiChange = this.handleMultiChange.bind(this);
      this.exportJourneyPDF = this.exportJourneyPDF.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handlePDFEvents = this.handlePDFEvents.bind(this)
      this.generatePDF = this.generatePDF.bind(this)
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
      "http://api.omparashar.com/transit/journey/overdaterange";
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
    let array=[]
    this.state.repositories.transits.forEach(function (arrayItem) {
    if(arrayItem!==null){
      array.push({label:arrayItem.event_type,value:arrayItem.event_type})
    }
});
  this.setState(state => {
      return {
        multiValue: array
      };
    },() => this.createChart());
  
  }

createChart() {
console.log(this.state.multiValue)
    

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
console.log(repositoriesData)

//chart = d3.zoom().on("zoom", zoomed);
let svg =d3.select('#events')
    .data([repositoriesData])
    .call(chart)

updateCommitsInformation(chart);
}

//  handleChange(event) {
//     this.setState({planet: event.target.value});
//   }

  handleChange = selectedOption => {
    this.setState(
        { selectedOption,loading:true },()=>this.fetchData());
  };

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

  exportJourneyPDF(){
    this.setState({show:true})
  }

  handleClose(){
    this.setState({show:false})
  }

  handlePDFEvents(option) {
   this.setState(state => {
      return {
        pdfSelectedEvents: option
      };
    })
   }

   generatePDF(){

     this.setState({show:false})
     const pdfData = this.state.repositories.transits.filter(f => this.state.pdfSelectedEvents.some(person => person.value === f.event_type )).map(repository =>  ({
    event_type: repository.event_type,
    data: repository.milestones
}));
    let pdfArray=[]
    pdfData.forEach(function(element){
      element.data.forEach(function(milestone){
            let singleEle={}
            singleEle.event_type = element.event_type;
            singleEle.desc = milestone.desc.split(' ').slice(2).join(' ');;
            singleEle.datetime = milestone.event_datetime
            pdfArray.push(singleEle)
      })
    })
    pdfArray.sort(function(a, b) {
    var dateA = new Date(a.datetime), dateB = new Date(b.datetime);
    return dateA - dateB;
});
    console.log(pdfArray)

    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const doc = new jsPDF(orientation, unit, [800,600],true);
    var img = new Image()
    img.src = '../logo_OP.png'
    doc.addImage(img, 'png', 10, 20, 100, 30,'','FAST')
     const title = this.state.selectedOption.value + "'s" + " "+ "Journey";
    doc.setFont("Roboto","bold");
    doc.setFontSize(20);
     doc.setTextColor(25,25,112);
    doc.setFont("Roboto","normal");
     doc.text(title, 232, 80);
    doc.setFontSize(15);
    doc.setTextColor(80,80,80);
    console.log(pdfData);
    let headers = [];
    headers.push("Date");
    pdfData.forEach(function(event){
        headers.push(event.event_type.split(" ")[0]);
    });
    let actualheaders=[headers]
   const splitDate = (date) =>{
      let dateArray = date.split(" ");
      dateArray.splice(-1,1);
      date=dateArray.join(" ")
      return date
   }
 

   const tabledata = []
   pdfArray.forEach(function(row){
      let newrow=[]
      let time=row.datetime.split(" ").pop()
      newrow.push(splitDate(row.datetime))
      let index=headers.indexOf(row.event_type.split(" ")[0])
      for(var i=1; i<headers.length;i++){
          if (i!==index){
            newrow.push("")
          }
          else{
            newrow.push(row.desc + " " + "@" + " " +  time)
          }
      }
      tabledata.push(newrow)
   })
  
  let content = {
      startY: 150,
      theme: 'grid',
      head: actualheaders,
      body: tabledata,
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


    let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];

    let start = this.context.startDate.split("/")

    let sday=start[2]
    let smonthName = monthNames[parseInt(start[1])-1];
    
    let syear = start[0]
    let end = this.context.endDate.split("/")
    
    let eday=end[2]
    let emonthName = monthNames[parseInt(end[1])-1];
    
    let eyear = end[0]

    let tabletitle = "From" + " " + sday+","+" "+ smonthName+" " + syear + " " + "To"+ " " + eday+","+ " "+emonthName + " " + eyear
    doc.text(tabletitle, 200, 130);
    doc.autoTable(content);
    doc.setFontSize(10);
     doc.setTextColor(255,0,0);
    let str="Powered By OmParashar"
    doc.text(str, 245, doc.internal.pageSize.getHeight()-30)
    doc.save("Omparashar_journey.pdf")


   }




  
    render() {
        const { selectedOption} = this.state;
        return <>
                <div className={this.state.currentClass}>
                <div id="d3graph" className="col-lg-12"  >
                    <div className="card">

                        <div className="card-body" style={{ "padding": "10px" }}>
                            {/* <div class="card-widgets">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                    data-toggle="fullscreen" href="/#">
                                    <i class="fe-maximize noti-icon"></i></a>
                            </div> */}
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
                    style={{ backgroundColor: "rgb(3, 66, 141)", color: "#fff",margin:"32px",fontSize:"0.9rem" }}
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
        <Modal.Title style={{color:"rgb(3, 66, 141)",fontWeight:"bold"}}>{selectedOption.value}'s Journey</Modal.Title> 
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
                    <hr style={{"marginBottom":"2px"}} />
                            <div className="row">
                                <div className="col-lg-12">
                                    <center><h2>{selectedOption.value}'s Transit Events Timeline</h2></center>
                                   <br></br>
                                {this.state.loading ? (
                                  <div>
        <div class='loader'></div>
        </div>)

         : (
           <div>
             <div></div>
         <div id="events" ref={this.myRef} ></div>
         <p class="infos">
            <span id="numberCommits"></span> Transit Events <span class="light">found between</span> <br />
            {moment(this.context.startDate).format("Do MMMM YYYY")} <span class="light">and</span> {moment(this.context.endDate).format("Do MMMM YYYY")}
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