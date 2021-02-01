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
                            <div class="col-12">
                                <div class="card-box">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <form class="form-inline">
                                                <div class="form-group">
                                                    <label for="inputPassword2" class="sr-only">Location</label>
                                                    <input type="search" class="form-control" id="input22" placeholder="Location..."/>
                                                </div>
                                                <div class="form-group mx-sm-3">
                                                    <label class="mr-2">date</label>
                                                   
                                                </div>
                                            </form>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="text-lg-right mt-3 mt-lg-0">
                                                
                                                <button type="button" class="btn btn-danger waves-effect waves-light mr-1"><i class="mdi mdi-circle mr-1"></i> Reset</button>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                            </div>
                        </div>

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
                                                {/* < */}
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