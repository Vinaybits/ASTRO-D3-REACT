 import React, {useState} from "react";
import 'react-bootstrap';
import './DashboardCard.css';

import { GlobalContext } from '../../mycontext';
import Sideform from "../../SideComponents/sideform";


const DashboardSideBar= (props) => {
    const context = React.useContext(GlobalContext)
    const [show,setShow] = useState(false)
    let [localview,setLocalview] = useState(context.currentView)
    let [localmode,setLocalmode] = useState("TransitionView")
     const handleClose = () =>{
        setShow(!show)
    }

    const AreSnapshotDetailsFilled = () =>{
         if(context.placeobserved===null){
                return false;
        }
        else{
            return true;
        }
     }


    const AreDetailsFilled = () =>{
         if(context.placeobserved===null || context.startDate===null || context.endDate ===null){
                return false;
        }
        else{
            return true;
        }
    }

    const handlePlainView = (selectedName) => {
         context.change_View(selectedName);
    }

    const handleTransitionView = (selectedName) => {
         context.change_View("Dashboard");
    }





    const handleView = (selectedName) => {
          if(selectedName==="Snapshot" || selectedName ==="Natal Chart"){
              setLocalmode("Snapshot")
              setLocalview(selectedName)
               if(AreSnapshotDetailsFilled()){
                context.change_View(selectedName);
            }
            else{
                setShow(!show)
            }
         }
         else{
            setLocalmode("TransitionView")
            setLocalview(selectedName)
            if(AreDetailsFilled()){
                context.change_View(selectedName);
            }
            else{
                setShow(!show)
            }
         }
    }

    return(
        <>
 
            {/*<!-- ========== Left Sidebar Start ========== --> */}
            <Sideform show={show} mode={localmode} view={localview} handleClose={handleClose} reset={false}/>
            <div className="left-side-menu">

                <div className="h-100" data-simplebar>

                    {/* <!-- User box --> */}
                    <div className="user-box text-center">
                        <img src="../assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme"
                            className="rounded-circle avatar-md"/>
                        <div className="dropdown">
                            <a href="/" className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                                data-toggle="dropdown">Geneva Kennedy</a>
                            <div className="dropdown-menu user-pro-dropdown">

                                {/* <!-- item--> */}
                                <a href="/" className="dropdown-item notify-item">
                                    <i className="fe-user mr-1"></i>
                                    <span>My Account</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="/" className="dropdown-item notify-item">
                                    <i className="fe-settings mr-1"></i>
                                    <span>Settings</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="/" className="dropdown-item notify-item">
                                    <i className="fe-lock mr-1"></i>
                                    <span>Lock Screen</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="/" className="dropdown-item notify-item">
                                    <i className="fe-log-out mr-1"></i>
                                    <span>Logout</span>
                                </a>

                            </div>
                        </div>
                        <p className="text-muted">Admin Head</p>
                    </div>

                    {/* <!--- Sidemenu --> */}
                    <div id="sidebar-menu">

                        <ul id="side-menu">

                           
                
                            <li>
                               
                                    <i data-feather="airplay"></i>
                                   
                                    <span>  <b>Dashboard</b> </span>
                                    
                               
                               
                               
                            </li>
                           
                           {/* <li>
                                <a href="/TransitionDashBoard" >
                                    <i data-feather="users"></i>
                                    <span>Planet Transition</span>
                                </a>
                            </li> */}

                
                            
                            <li>
                                <a href="#TransitionDashBoard" >
                                    <i data-feather="calendar" ></i>
                                    <span onClick={()=>handleTransitionView("Dashboard")}>Planet Transition </span>
                                    <a href="#sideNav" data-toggle="collapse"><i className="fa fa-caret-down"></i></a>
                                </a>
                                <div className="collapse" id="sideNav">
                                    <ul className="nav-second-level">
                                        {/* <li>
                                            <a href="#Home" onClick={()=>context.change_View("Dashboard")}>Dashboard Home</a>
                                        </li> */}
                                        <li>
                                            <a href="#Galactic" onClick={()=>handleView("Galactic View")}>Galactic View</a>
                                        </li>
                                        <li>
                                            <a href="#Traces" onClick={()=>handleView("Traces View")}>Traces</a>
                                        </li>
                                        <li>
                                            <a href="#Journey" onClick={()=>handleView("Journey View")}>Planet Journey</a>
                                        </li>
                                        <li>
                                            <a href="#Snapshot" onClick={()=>handleView("Snapshot")}>Snapshot</a>
                                        </li>
                                        <li>
                                            <a href="#NatalChart" onClick={()=>handleView("Natal Chart")}>Natal Chart</a>
                                        </li>
                                        

                                    </ul>
                                </div>
                            </li>


                            <li>
                                <a href="#PanchangView" onClick={()=>handlePlainView("Panchang View")}>
                                    <i data-feather="users"></i>
                                    <span> Panchang</span>
                                </a>
                            </li>
                             </ul>

                    </div>
                    {/* <!-- End Sidebar --> */}

                    <div className="clearfix"></div>

                </div>
                {/* <!-- Sidebar -left --> */}
            </div>

        </>
    );
}

export default DashboardSideBar