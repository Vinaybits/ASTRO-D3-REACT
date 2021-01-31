/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from '../mycontext';
import Table from "./Snapshot/Table";
import "./Snapshot/Snapshot.css";
import * as cities from "../components/cities.json";
import DatePicker from 'react-date-picker'
import TextField from "@material-ui/core/TextField";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Button from "react-bootstrap/Button";




function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

   
const noncombust = ['Ascendant', 'Sun', 'Rahu', 'Ketu']

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

function Snapshot(props) {
  const contextType = useContext(GlobalContext)
  const [data, setData] = useState([]);
  const date = new Date()
  let time = pad(date.getHours()) + ":" + pad(date.getMinutes())+ ":" + pad(date.getSeconds());
  // let [newDate,setNewDate] = useState(formatDate(date));
  let [newTime,setNewTime] = useState(time);
  const [value, onChange] = useState(new Date());
  const [refresh,onChangeRefresh] = useState(props.refresh)
  const [currentClass, setcurrentClass] = useState('col-lg-10 col-md-12');
  let reqDate="";
  let headerString=""
  if(value!=null){
  let day = days[value.getDay()];
  reqDate = day + "," + " " +value.getDate() + " "+ months[value.getMonth()]+" "+ value.getFullYear();
  headerString=reqDate+ " " + "at" + " " + newTime;
  }
  else{
    headerString ="null";
  }
  useEffect(() => {
    (async () => {
   let y = "";
      let m = "";
      let d = "";
      let h="";
      let mi="";
      let s="";
    let lat = "",
        long = "";
    let offset = "";
    let c = contextType.placeobserved || "Hyderabad";
    if(newTime==null){
    h="00";
    mi="00";
    s="00";
    }
    else{
    newTime = newTime.split(':');
    console.log(newTime)
    h = newTime[0];
    mi = newTime[1];
    s = newTime[2];
    }

    if(value !== null){
    y=value.getFullYear();
    m=value.getMonth()+1;
    d=value.getDate();
    
    Object.entries(cities[0]).forEach(([key, value]) => {
      if (key === c) {
        long = Math.round(value.longitude).toFixed(2);
        lat = Math.round(value.latitude).toFixed(2);
      }
    });
      offset = Math.round(long * 4 * 60);

      let url_string =
      "http://api.omparashar.com/transit/snapshot";
    //var params = "?from_year=2020&from_month=1&from_day=1&to_year=2020&to_month=6&to_day=30&lat=29.47&long=77.69&offset=19800&p_nums=3&p_nums=4";
    let params =
      "?year="+
      y +
      "&month=" +
      m +
      "&day=" +
      d+
      "&hour="+
      h+
      "&minute="+
      mi+
      "&second="+
      s+
      "&lat=" +
      lat +
      "&long=" +
      long +
      "&offset=" +
      offset +
      "&place=" +
      c;
      const url = url_string+params;
      console.log(url)
      const result = await axios(url);
      setData(result.data.detailedPlanetPositions);
      //console.log(result)
  }
  else{
    setData([])
  }
    })();
  },[value,newTime]);

    
  const columns =[
      {
        Header: ''+headerString,
        columns: [
          {
            Header: "Planet",
            accessor: "planet_name"
          },
          {
            Header: "Degrees",
            accessor: "abs_degree"
          },
          {
            Header: "Degrees in Rashi",
            accessor: "r_d_m_s"
          },
          {
            Header: "Motion",
            accessor: "motion",
          },
          {
            Header: "Nakshtra",
            accessor: "nakshtra"
          },
          {
            Header: "Pada",
            accessor: "nakshtra_pada"
          },
          {
            Header: "Nakshtra Lord",
            accessor: "nakshtra_lord"
          },
          {
            Header: "Combust",
            accessor: d => { if(noncombust.indexOf(d.planet_name) >=0) return 'Never' 
                              else return d.combust ? 'Yes' : 'No' 
                            }
          }
        ]
      }
    ]

  //  const toggleClass = () => {
  //       (currentClass === 'col-lg-10 col-md-12') ? setcurrentClass('fullscreen') : setcurrentClass('col-lg-10 col-md-12');
  //   };


  // const dateChange = (date) => {
  //       setNewDate(date.target.value)
  // }
  // const timeChange = (time) => {
  //       setNewTime(time.target.value)
  // }

  // const timeChange = (time,string) => {
  //     console.log(time)
  //     console.log(string)
  // }

  const dateChange = (date) =>{
    onChange(date)
  }
  const timeChange = (time) =>{
    setNewTime(time.target.value)
  }

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const doc = new jsPDF(orientation, unit, size,true);
    var img = new Image()
    img.src = '../logo_OP.png'
    doc.addImage(img, 'png', 10, 20, 100, 30,'','FAST')
    const maintitle = "Snapshot of Planet Positions"
    doc.setFont("Roboto","bold");
    doc.setFontSize(20);
     doc.setTextColor(25,25,112);
    doc.setFont("Roboto","normal");
     doc.text(maintitle, 180, 80);
    doc.setFontSize(15);
    doc.setTextColor(0,0,0);
    const title = headerString;

    const combustfun = (planet_name, combustval) =>{
      if(noncombust.indexOf(planet_name) >=0) {
        return "Never"
      }
      else
      {
        return combust_dict[combustval]
      }
    }
    const combust_dict = {true: "Yes", false: "No"}
    const headers = [["Planet","Degrees","Degrees in Rashi","Motion","Nakshatra","Pada","Nakshatra Lord","Combust"]];
    const tabledata = data.map(elt=> [elt.planet_name, elt.abs_degree, elt.r_d_m_s, elt.motion, elt.nakshtra,elt.nakshtra_pada,elt.nakshtra_lord, combustfun(elt.planet_name, elt.combust)])
    //alert(data)
    let content = {
      tableLineColor: [0, 0, 0], //choose RGB
      tableLineWidth: 0.5, //table border width
      startY: 170,
      theme: 'grid',
      head: headers,
      body: tabledata,
      bodyStyles: {
            fontSize: 12,
        },
    };

    doc.text(title, 200, 160);
    doc.autoTable(content);
    doc.setFontSize(10);
     doc.setTextColor(255,0,0);
    let str="Powered By OmParashar"
    doc.text(str, 245, doc.internal.pageSize.getHeight()-50)
    doc.save("Omparashar_snapshot.pdf")
  }

  return (
    <div>
                <div id="snapshot" className="col-lg-12"  >
                    <div className="card">

                        <div className="card-body" style={{ "padding": "10px" }}>
                            {/* <div class="card-widgets">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                    data-toggle="fullscreen" href="/#">
                                    <i class="fe-maximize noti-icon"></i></a>
                            </div> */}

<center>
  <label>Select Date and Time:</label>
      <div>
                            {/* <input type="date" value={newDate} onChange={dateChange} onKeyDown={(e) => e.preventDefault()}></input> */}
                            <DatePicker
        onChange={dateChange}
        value={value}
        format="dd/MM/yyyy"
        onKeyDown={(e) => e.preventDefault()}
      />
      <TextField
        style={{    marginLeft: "10px",
    marginTop: "0px"}}
        id="time"
        type="time"
        value={newTime}
        onChange={timeChange}
        InputLabelProps={{
          shrink: true
        }}
        onKeyDown={(e) => e.preventDefault()}
      />
       <div style={{ display: "flex" }}>
      <button
                    type="submit"
                    className="ladda-button btn pdf"
                    style={{ backgroundColor: " #009879", color: "#fff",marginLeft:"auto",marginRight: "5%" }}
                    onClick={exportPDF}
                  >
                    Generate PDF
                  </button></div>
      
      
   
                            {/* <input type="time" value={newTime} onChange={timeChange}></input> */}
    </div>
    </center>
                            <div className="row">
                                <div className="col-lg-12">
                                    <center>
                        
                                    <Table columns={columns} data={data} className="table table-bordered"/>
                                    </center>
                                    <br></br>
                                    </div>
                               
                               </div>
   
   
   
   
                           </div>
                       </div>
                
                   {/* <Ploty_1 /> */}
                   </div>
               </div>
  );
                  }

export default Snapshot;