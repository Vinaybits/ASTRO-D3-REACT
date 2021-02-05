import React from "react";
import 'react-bootstrap';
import DashboardTopBar from "./DashBoardLayout/DashboardTopBar";
import DashboardSideBar from "./DashBoardLayout/DashboardSideBar";
import DashboardFooter from "./DashBoardLayout/DashboardFooter";
import DashboardLayout from "./DashBoardLayout/DashboardLayout.jsx";
import { GlobalContext } from '../mycontext';


const Dashboard= () => {
    const context = React.useContext(GlobalContext)

    if(context.currentView==="Dashboard"){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }

     return(
                <>
                <DashboardTopBar/>
                <DashboardSideBar/>


                <div className="content-page">
                    <div className="content">


                    
                        <div className="container-fluid">

                           
                            <DashboardLayout/>
                            
                        </div> 
                    </div> 
                   <DashboardFooter/>
                </div>
                </>
             );
 }
export default Dashboard;
