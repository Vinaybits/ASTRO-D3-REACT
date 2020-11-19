import React, { useMemo} from "react";
// import axios from "axios";

import Table from "./Snapshot/Table";
import "./Snapshot/Snapshot.css";

const data = require('./Snapshot/data.json');
const positions= data.detailedPlanetPositions;

function Snapshot() {
  const columns = useMemo(
    () => [
      {
        Header: "Detailed Planet Positions",
        columns: [
          {
            Header: "Planet Name",
            accessor: "planet_name"
          },
          {
            Header: "Absolute Degree",
            accessor: "abs_degree"
          },
          {
            Header: "R_D_M_S",
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
            Header: "Nakshtra Pada",
            accessor: "nakshtra_pada"
          },
          {
            Header: "Nakshtra Lord",
            accessor: "nakshtra_lord"
          },
          {
            Header: "Combust",
            accessor: d => d.combust.toString()
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