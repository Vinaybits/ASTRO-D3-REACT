import React, { useState } from "react";
import 'react-bootstrap';
import DashboardTopBar from "./DashBoardLayout/DashboardTopBar";
import DashboardSideBar from "./DashBoardLayout/DashboardSideBar";
import DashboardFooter from "./DashBoardLayout/DashboardFooter";
import DashboardLayout from "./DashBoardLayout/DashboardLayout.jsx";
import { GlobalContext } from '../mycontext';


const Dashboard= () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    const context = React.useContext(GlobalContext)

     return(
                <>
                <DashboardTopBar/>
                <DashboardSideBar/>


                <div class="content-page">
                    <div class="content">


                        {/* <!-- Start Content--> */}
                        <div class="container-fluid">

                            {/* <!-- start page title --> */}
                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box">
                                        <div class="page-title-right">
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><a href="/">Omparashar</a></li>
                                                <li class="breadcrumb-item active">{context.currentView}</li>
                                            </ol>

                                        </div>
                                        <h4 class="page-title">{context.currentView}</h4>
                                    </div>
                                </div>
                            </div>      {/* <!-- end page title -->  */}
                            <DashboardLayout/>
                            
                        </div> 
                    </div> 
                    <DashboardFooter/>
                </div>
                </>
             );
 }
export default Dashboard;
