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
    <div className="App">
      <Table columns={columns} data={positions} />
    </div>
  );
}

export default Snapshot;