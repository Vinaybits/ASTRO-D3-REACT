import React, { useMemo, useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from '../mycontext';
import Table from "./Snapshot/Table";
import "./Snapshot/Snapshot.css";
import * as cities from "../components/cities.json";
import Select from 'react-select';
import moment from "moment";
import DateTimePicker from 'react-datetime-picker';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import { lab } from "d3";

const noncombust = ['Sun', 'Rahu', 'Ketu']
let header= ""
function Snapshot() {
  const contextType = useContext(GlobalContext)

  const [data, setData] = useState([]);
  const [newDate,setNewDate] = useState(new Date());
  const [currentClass, setcurrentClass] = useState('col-lg-10 col-md-12');

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
    y = newDate.getFullYear();
    m = newDate.getMonth()+1;
    d = newDate.getDate();
    h = newDate.getHours();
    mi = newDate.getMinutes();
    s = newDate.getMinutes();
    s = newDate.getSeconds()
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
  },[newDate]);
  const columns =[
      {
        Header: "Snapshot of Planet Positions on  " + newDate,
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

   const toggleClass = () => {
        (currentClass === 'col-lg-10 col-md-12') ? setcurrentClass('fullscreen') : setcurrentClass('col-lg-10 col-md-12');
    };


  const dateChange = (date) => {
        setNewDate(date)
    }


  return (
    <div className={currentClass}>
                <div id="d3graph" className="col-lg-12"  >
                    <div className="card">

                        <div className="card-body" style={{ "padding": "10px" }}>
                            <div class="card-widgets">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                    data-toggle="fullscreen"
                                    onClick={toggleClass}>
                                    <i class="fe-maximize noti-icon"></i></a>
                            </div>

<center>
  <label>Select Date and Time:</label>
                    <div>
      <DateTimePicker
        onChange={dateChange}
        value={newDate}
      />
    </div>
    </center>
                            <div className="row">
                                <div className="col-lg-12">
                                    <center><h2>Snapshot of Planet Positions</h2>
                        
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