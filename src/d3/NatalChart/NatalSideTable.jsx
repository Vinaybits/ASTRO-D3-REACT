import React from 'react';
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from '../../mycontext';
import * as cities from "../../components/cities.json";
import './Natal.css'
import { ListItemText } from '@material-ui/core';

const noncombust = ['Ascendant', 'Sun', 'Rahu', 'Ketu']
const NatalSidetable = (props) => {
  const contextType = useContext(GlobalContext)
  const [data, setData] = useState([]);
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
    if(props.newTime==null){
    h="00";
    mi="00";
    s="00";
    }
    else{
    var newTime = props.newTime.split(':');
    console.log(props.newTime)
    h = newTime[0];
    mi = newTime[1];
    s = newTime[2];
    }

    if(props.value !== null){
    y=props.value.getFullYear();
    m=props.value.getMonth()+1;
    d=props.value.getDate();
    
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
  },[props.value,props.newTime]);
  console.log(data)
    return (
        <>
            <div style={{position:"absolute", width:"50%", right:"0", marginTop:"136px"}}>
             {/* <div className="sub-heading" style={{color:"#fff"}}> Date : <span style={{ "fontSize": "0.9em",marginTop:"40px"}} className="badge badge-pill badge-dark"> {date} </span> <br></br> At 12:00 AM @ {context.placeobserved} </div> */}
                        <table className="table table-sm table-bordered side-table" style={{color:"black", height:"416px"}}>
                            <thead>
                               <tr>
                                    <th scope="col">Planet</th>
                                    <th scope="col">Absolute Degree</th>
                                    <th scope="col">Degree in Rashi</th>
                                    <th scope="col">Nakshtra</th>
                                    <th scope="col">Pada</th>
                                    <th scope="col">Combust</th>
                                </tr>
                            </thead>

                            {   typeof data !== "undefined"
                                    ? data.slice(1).map(item => {
                                        if(item.motion==='R' && item.planet_name!=="Rahu" && item.planet_name!=="Ketu"){
                                            item.planet_name+=' (R)'
                                        }
                                        if(noncombust.indexOf(item.planet_name) >=0) item.combust = 'Never' 
                                         else item.combust ? item.combust= 'Yes' : item.combust= 'No' 
                                        return (
                                            <>
                                                <tr key={item.planet_name}>
                                                <td style={{textAlign:"left"}}>{item.planet_name}</td>
                                                <td>{item.abs_degree}</td>
                                                <td>{item.r_d_m_s}</td>
                                                <td style={{textAlign:"left"}}>{item.nakshtra}</td>
                                                <td>{item.nakshtra_pada}</td>
                                                <td>{item.combust}</td>
                                                </tr>
                                            </>
                                        );
                                    })
                                    : "."

                                
                            }
                        </table>
            </div>           

        </>
    );
};

export default NatalSidetable;


