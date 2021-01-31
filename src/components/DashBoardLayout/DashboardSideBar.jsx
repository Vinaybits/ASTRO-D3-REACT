 import React,{useState} from "react";
import 'react-bootstrap';
import './DashboardCard.css';
import moment from "moment";
import { GlobalContext } from '../../mycontext';
import Sideform from "../../SideComponents/sideform";

const DashboardSideBar= (props) => {
    const context = React.useContext(GlobalContext)
    let [localview,setLocalview] = useState(context.currentView)
    const [show,setShow] = useState(false)

     const handleClose = () =>{
        setShow(!show)
    }

    const AreDetailsFilled = () =>{
         if(context.placeobserved===null || context.startDate===null || context.endDate ===null){
                return false;
        }
        else{
            return true;
        }
    }

    const ResetForm =() =>{
        context.ResetForm();
        setShow(!show)
    }

    const handleView = (name) => {
        setLocalview(name)
        if(AreDetailsFilled()){
            context.changeView(name);
        }
        else{
            setShow(!show)
        }
    }

    const currentView = () => {
        if(!AreDetailsFilled()){
            return ""
        }
        else {
                   return <div><div className="details" style={{padding: "12px 30px", fontSize:"1.1em"}}>
                                Start Date : <strong>{moment(context.startDate).format("DD-MM-YYYY")}</strong>
                                <br></br>
                                <br></br>
                                  End Date : <strong>{moment(context.endDate).format("DD-MM-YYYY")}</strong>
                                <br></br>
                                <br></br>
                              Location : <strong>{context.placeobserved}</strong>
                              <br></br>
                              <br></br>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="ladda-button btn-sm"
                                    style={{backgroundColor:"#03428d",color: "#fff",marginLeft:"45px"}}
                                    onClick={ResetForm}
                                >
                                Reset Parameters
                                </button>
                            </div>
                            </div>
        }
       
    }
    return(
        <>
 
            {/*<!-- ========== Left Sidebar Start ========== --> */}
            <Sideform show={show} mode="TransitionView" handleClose={handleClose} view={localview}/>
            <div class="left-side-menu">

                <div class="h-100" data-simplebar>

                    {/* <!-- User box --> */}
                    <div class="user-box text-center">
                        <img src="../assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme"
                            class="rounded-circle avatar-md"/>
                        <div class="dropdown">
                            <a href="/" class="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                                data-toggle="dropdown">Geneva Kennedy</a>
                            <div class="dropdown-menu user-pro-dropdown">

                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-user mr-1"></i>
                                    <span>My Account</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-settings mr-1"></i>
                                    <span>Settings</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-lock mr-1"></i>
                                    <span>Lock Screen</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-log-out mr-1"></i>
                                    <span>Logout</span>
                                </a>

                            </div>
                        </div>
                        <p class="text-muted">Admin Head</p>
                    </div>

                    {/* <!--- Sidemenu --> */}
                    <div id="sidebar-menu">

                        <ul id="side-menu">

                           
                
                            <li>
                                <a href="index.html" data-toggle="collapse">
                                    <i data-feather="airplay"></i>
                                   
                                    <span> Dashboard </span>
                                </a>
                               
                            </li>
                           
                            <li>
                                <a href="#sidebarEcommerce" data-toggle="collapse" >
                                    <i data-feather="calendar"></i>
                                    <span> Planet Transition </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarEcommerce">
                                    <ul class="nav-second-level">
                                        <li>
                                            <a href="#galactic" onClick={()=>handleView("Galactic View")}>Galactic View</a>
                                        </li>
                                        <li>
                                            <a href="#traces" onClick={()=>handleView("Traces View")}>Traces</a>
                                        </li>
                                        <li>
                                            <a href="#journey" onClick={()=>handleView("Journey View")}>Planet Journey</a>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </li>

                             <li>
                                <a href="#sidebarCrm" data-toggle="collapse">
                                    <i data-feather="users"></i>
                                    <span> Panchang </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarCrm">
                                    <ul class="nav-second-level">
                                        <li>
                                            <a href="/panchang_dash">Holistic View</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
                           <br></br>
                           <br></br>
                                {currentView()}
                             </ul>

                    </div>
                    {/* <!-- End Sidebar --> */}

                    <div class="clearfix"></div>

                </div>
                {/* <!-- Sidebar -left --> */}
            </div>

        </>
    );
}

export default DashboardSideBar