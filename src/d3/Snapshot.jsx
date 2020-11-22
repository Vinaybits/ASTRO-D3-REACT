import React, { useMemo} from "react";
// import axios from "axios";

import Table from "./Snapshot/Table";
import "./Snapshot/Snapshot.css";

const data = require('./Snapshot/data.json');
const positions= data.detailedPlanetPositions;
const noncombust = ['Sun', 'Rahu', 'Ketu']

const monthNames = ['Jan','Feb','March','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec'];
const reqdate = data.day + " " + monthNames[data.month] + " " + data.year + ", " + data.hour+ ":" + data.minute+ ":" + data.second + " at " + data.place;


function Snapshot() {
  const columns = useMemo(
    () => [
      {
        Header: "Snapshot of Planet Positions on  " + reqdate,
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
    ],
    []
  );

  return (
    
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
                                    <center><h2>Snapshot</h2>
                                  
      <Table columns={columns} data={positions} className="table table-bordered"/>
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