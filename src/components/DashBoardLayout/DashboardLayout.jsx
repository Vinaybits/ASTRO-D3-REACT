import React, { useState } from "react";
import 'react-bootstrap';
import "./DashboardCard.css"
import { GlobalContext } from '../../mycontext';
import D3graph from "../d3graph";
import PlotlyNAKS from "../../d3/plotly_Naks";
import Journey from "../../d3/Journey";
import InitDashboard from "./InitDashboard";

import Sideform from "../../SideComponents/sideform";


const DashboardLayout = (props) => {
    const context = React.useContext(GlobalContext)
    const [show,setShow] = useState(false)
    let [reset,setReset] = useState(false)
     const handleClose = () =>{
        setShow(!show)
    }


    const handleView = () => {
             setShow(!show)
             setReset(true)
    }

    //  const handleReset = () => {
    //          setReset(!reset)
    // }


     

    // const handleViewReset = () => {
    //          setShow(!show)
    //          setReset(true)
    // }

    

    const currentView = () => {
            
            let view = context.currentView;
            if(view==="Dashboard"){
                return <InitDashboard/>
            }
            else if(view==="Galactic View"){
                return <D3graph city={context.placeobserved} start={context.startDate} end={context.endDate} handleView={handleView}/>
            }
            else if(view==="Traces View"){
                return <PlotlyNAKS city={context.placeobserved} start={context.startDate} end={context.endDate} handleView={handleView}/>
            }
            else if(view==="Journey View"){
                return <Journey city={context.placeobserved} start={context.startDate} end={context.endDate} handleView={handleView}/>
            }
    }

   

        if(context.currentView!=="Dashboard"){
        return(
            <>
                <Sideform show={show} view={context.currentView} mode="TransitionView" handleClose={handleClose} reset ={reset} currentView={currentView}/>
                {currentView()}           
                        
            </>
        );
    }
    else{
        return(
            <>
                {currentView()}
            </>
        );
    }

}

export default DashboardLayout;
