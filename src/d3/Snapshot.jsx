import React, { useMemo, useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from '../mycontext';
import Table from "./Snapshot/Table";
import "./Snapshot/Snapshot.css";
import * as cities from "../components/cities.json";

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

   
const noncombust = ['Sun', 'Rahu', 'Ketu']

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

function Snapshot() {
  const contextType = useContext(GlobalContext)
  const [data, setData] = useState([]);
  const date = new Date()
  let time = pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds());
  let [newDate,setNewDate] = useState(formatDate(date));
  let [newTime,setNewTime] = useState(time);
  const [currentClass, setcurrentClass] = useState('col-lg-10 col-md-12');
  let strArray = newDate;
  strArray=strArray.split("-");
  let day = days[(new Date(newDate)).getDay()];
  let reqDate = day + "," + " " + strArray[2] + " "+ months[parseInt(strArray[1])-1]+" "+ strArray[0]
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
    let c = contextType.placeobserved;
    if(newDate !== null){
    newDate = newDate.split('-');
    newTime = newTime.split(':');
    y = newDate[0];
    m = newDate[1];
    d = newDate[2];
    h = newTime[0];
    mi = newTime[1];
    s = newTime[2];
    alert(m)
    console.log(h,mi,s)
    Object.entries(cities[0]).forEach(([key, value]) => {
      if (key === c) {
        long = Math.round(value.longitude).toFixed(2);
        lat = Math.round(value.latitude).toFixed(2);
      }
    });
      offset = Math.round(long * 4 * 60);

      let url_string =
      "http://api.omparashar.com/planet/snapshot";
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
      const result = await axios(url);
      setData(result.data.detailedPlanetPositions);
      //console.log(result)
  }
  else{
    setData([])
  }
    })();
  },[newDate,newTime]);

  const columns =[
      {
        Header: ''+ reqDate + ' at ' + newTime,
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


  const dateChange = (date) => {
        setNewDate(date.target.value)
  }
  const timeChange = (time) => {
        setNewTime(time.target.value)
  }
  

  return (
    <div className={currentClass}>
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
                            <input type="date" value={newDate} onChange={dateChange} onKeyDown={(e) => e.preventDefault()}></input>
                            <input type="time" value={newTime} onChange={timeChange} onKeyDown={(e) => e.preventDefault()}></input>
    </div>
    </center>
                            <div className="row">
                                <div className="col-lg-12">
                                    <center><h2>Snapshot of Planet's Positions</h2>
                        
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