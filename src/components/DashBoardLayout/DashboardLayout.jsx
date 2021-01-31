import React, { useState } from "react";
import 'react-bootstrap';
import "./DashboardCard.css"
import { GlobalContext } from '../../mycontext';
import D3graph from "../d3graph";
import Plotly_NAKS from "../../d3/plotly_Naks";
import Journey from "../../d3/Journey";

import InitDashboard from "./InitDashboard";

const DashboardLayout = (props) => {
    const context = React.useContext(GlobalContext)
   

    const currentView = () => {
            var view = context.currentView;
            if(view==="Dashboard"){
                return <InitDashboard/>
            }
            else if(view==="Galactic View"){
                return <D3graph/>
            }
            else if(view==="Traces View"){
                return <Plotly_NAKS/>
            }
            else if(view==="Journey View"){
                return <Journey/>
            }
    }

        return(
            <>
                {currentView()}           
                        
            </>
        );

}

export default DashboardLayout;
