 import React, {useState} from "react";
import 'react-bootstrap';
import Snapshot from "../../d3/Snapshot";
import { GlobalContext } from '../../mycontext';
import Sideform from "../../SideComponents/sideform";
const InitDashboard= () => {
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

     const handleView = (selectedName) => {
         setLocalview(selectedName)
         if(AreDetailsFilled()){
         context.changeView(selectedName);
         }
         else{
             setShow(!show)
         }
    }
    
    return(
                <>
                            <Sideform show={show} mode="TransitionView" handleClose={handleClose} view={localview}/>
                            <div class="row">
                            <div class="col-md-6 col-xl-3">
                                <div class="card-box">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="avatar-sm bg-blue rounded">
                                                <i class="fe-aperture avatar-title font-22 text-white"></i>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="text-right">
                                                <h3 class="text-dark my-1"><span data-plugin="counterup">23.2</span>°</h3>
                                                <p class="text-muted mb-1 text-truncate">Jupiter</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <h6 class="text-uppercase">Today <span class="float-right"> 16:09</span></h6>
                                        <div class="progress progress-sm m-0">
                                            <div class="progress-bar bg-blue" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
                                                <span class="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- end card-box--> */}
                            </div> 
                            {/* <!-- end col --> */}

                            <div class="col-md-6 col-xl-3">
                                <div class="card-box">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="avatar-sm bg-success rounded">
                                                <i class="fe-arrow-down avatar-title font-22 text-white"></i>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="text-right">
                                                <h3 class="text-dark my-1"><span data-plugin="counterup">83.2</span>°</h3>
                                                <p class="text-muted mb-1 text-truncate">Venus</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <h6 class="text-uppercase">Time <span class="float-right">17:08 </span></h6>
                                        <div class="progress progress-sm m-0">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="49" aria-valuemin="0" aria-valuemax="100" style={{"width": "49%"}}>
                                                <span class="sr-only">49% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- end card-box--> */}
                            </div>
                             {/* <!-- end col --> */}

                            <div class="col-md-6 col-xl-3">
                                <div class="card-box">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="avatar-sm bg-warning rounded">
                                                <i class="fe-arrow-up avatar-title font-22 text-white"></i>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="text-right">
                                                <h3 class="text-dark my-1"><span data-plugin="counterup">213.1</span>°</h3>
                                                <p class="text-muted mb-1 text-truncate">Mars</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <h6 class="text-uppercase">Tomorrow <span class="float-right">21:09</span>°</h6>
                                        <div class="progress progress-sm m-0">
                                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100" style={{"width": "18%"}}>
                                                <span class="sr-only">18% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- end card-box--> */}
                            </div>
                             {/* <!-- end col --> */}

                            <div class="col-md-6 col-xl-3">
                                <div class="card-box">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="avatar-sm bg-info rounded">
                                                <i class="fe-home avatar-title font-22 text-white"></i>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="text-right">
                                                <h3 class="text-dark my-1"><span data-plugin="counterup">178</span>°</h3>
                                                <p class="text-muted mb-1 text-truncate">Saturn</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <h6 class="text-uppercase">Tonight <span class="float-right">22:25</span></h6>
                                        <div class="progress progress-sm m-0">
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100" style={{"width":"74%"}}>
                                                <span class="sr-only">74% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/* <!-- end card-box--> */}
                            </div>
                             {/* <!-- end col --> */}
                        </div>
                        {/* <!-- end row --> */}


                         <div class="row">

                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-widgets">
                                            <a href="/" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false" aria-controls="cardCollpase3"><i class="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Galactic View</h4>

                                        <div id="cardCollpase3" class="collapse pt-3 show">
                                            <div class="text-center">
                                                <div id="total-users" data-colors="#00acc1,#4b88e4,#e3eaef,#fd7e14"> <img alt="galactic view" src={require("./Galactic.png")} style={{width:"100%",height:"100%"}}/></div>
                                                <div class="row mt-3">
                                                    <div class="col-3">
                                                    </div>
                                                    <div class="col-6">
                                                        <button type="button" onClick={() => handleView("Galactic View")}  class="btn btn-outline-primary waves-effect waves-light">Explore Here</button>
                                                    </div>
                                                    <div class="col-3">
                                                        
                                                    </div>
                                                </div> 
                                                {/* <!-- end row --> */}
                                            </div>
                                        </div> 
                                        {/* <!-- collapsed end --> */}
                                    </div> 
                                    {/* <!-- end card-body --> */}
                                </div> 
                                {/* <!-- end card--> */}
                            </div> 

                           

                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-widgets">
                                            <a href="/" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase2" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Traces View</h4>

                                        <div id="cardCollpase2" class="collapse pt-3 show">
                                            <div class="text-center">
                                                <div id="income-amounts" data-colors="#00acc1"><img alt="Traces view" src={require("./Traces.png")} style={{width:"100%",height:"100%"}}/></div>
                                                <div class="row mt-3">
                                                    <div class="col-3">
                                                       
                                                    </div>
                                                    <div class="col-6">
                                                        <button type="button" onClick={() => handleView("Traces View")}  class="btn btn-outline-success waves-effect waves-light">Move to Traces</button>
                                                    </div>
                                                    <div class="col-3">
                                                    </div>
                                                </div> 
                                                {/* <!-- end row --> */}
                                            </div>
                                        </div> 
                                        {/* <!-- collapsed end --> */}
                                    </div>
                                     {/* <!-- end card-body --> */}
                                </div>
                                 {/* <!-- end card--> */}
                            </div>
                             {/* <!-- end col--> */}

                            <div class="col-xl-4 col-md-12">
                                {/* <!-- Portlet card --> */}
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-widgets">
                                            <a href="/" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i class="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Planet Journey </h4>

                                        <div id="cardCollpase1" class="collapse pt-3 show">
                                            <div class="text-center">
                                                <div id="lifetime-sales" data-colors="#00acc1,#f1556c"><img alt="Journey view" src={require("./Journey.png")} style={{width:"100%",height:"100%"}}/></div>
        
                                                <div class="row mt-3">
                                                    <div class="col-3">
                                                       
                                                    </div>
                                                    <div class="col-6">
                                                        <button onClick={() => handleView("Journey View")} type="button" class="btn btn-outline-info waves-effect waves-light">Click to Explore</button>
                                                    </div>
                                                    <div class="col-3"></div>
                                                </div> 
                                                {/* <!-- end row --> */}
                                                
                                            </div>
                                        </div>
                                         {/* <!-- collapsed end --> */}
                                    </div>
                                     {/* <!-- end card-body --> */}
                                </div> 
                                {/* <!-- end card--> */}
                            </div>
                             {/* <!-- end col-->
                            <!-- end col--> */}
                        </div>
                        {/* <!-- end row --> */}
        
                         <div class="row">
                            <div class="col-xl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-widgets">
                                            <a href="/" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase5" role="button" aria-expanded="false" aria-controls="cardCollpase5"><i class="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Planet Transition Snapshot</h4>

                                        <div id="cardCollpase5" class="collapse pt-3 show">
                                            <div class="table-responsive">
                                                <Snapshot/>
                                            </div> 
                                            {/* <!-- end table responsive--> */}
                                        </div> 
                                        {/* <!-- collapsed end --> */}
                                    </div> 
                                    {/* <!-- end card-body --> */}
                                </div>
                                 {/* <!-- end card--> */}
                            </div> 
                            {/* <!-- end col --> */}
                        </div>
                        {/* <!-- end row --> */}
                </>
        );    
    }

export default InitDashboard;