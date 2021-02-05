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
         context.change_View(selectedName);
         }
         else{
             setShow(!show)
         }
    }
    
    return(
                <>
                            <Sideform show={show} mode="TransitionView" handleClose={handleClose} view={localview} reset={false}/>
                         <div className="row">

                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-widgets">
                                            <a href="/" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false" aria-controls="cardCollpase3"><i className="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 className="header-title mb-0">Galactic View</h4>

                                        <div id="cardCollpase3" className="collapse pt-3 show">
                                            <div className="text-center">
                                                <div id="total-users" data-colors="#00acc1,#4b88e4,#e3eaef,#fd7e14"> <img alt="galactic view" src={require("./Galactic.png")} style={{width:"150px"}}/></div>
                                                <div className="row mt-1">
                                                    <div className="col-3">
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" onClick={() => handleView("Galactic View")}  className="btn btn-outline-primary waves-effect waves-light">Explore Here</button>
                                                    </div>
                                                    <div className="col-3">
                                                        
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

                           

                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-widgets">
                                            <a href="/" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase2" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 className="header-title mb-0">Traces View</h4>

                                        <div id="cardCollpase2" className="collapse pt-3 show">
                                            <div className="text-center">
                                                <div id="income-amounts" data-colors="#00acc1"><img alt="Traces view" src={require("./Traces.png")} style={{width:"100%",height:"100%"}}/></div>
                                                <div className="row mt-3">
                                                    <div className="col-3">
                                                       
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" onClick={() => handleView("Traces View")}  className="btn btn-outline-success waves-effect waves-light">Move to Traces</button>
                                                    </div>
                                                    <div className="col-3">
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

                            <div className="col-xl-4 col-md-12">
                                {/* <!-- Portlet card --> */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-widgets">
                                            <a href="/" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 className="header-title mb-0">Planet Journey </h4>

                                        <div id="cardCollpase1" className="collapse pt-3 show">
                                            <div className="text-center">
                                                <div id="lifetime-sales" data-colors="#00acc1,#f1556c"><img alt="Journey view" src={require("./Journey.png")} style={{width:"100%",height:"100%"}}/></div>
        
                                                <div className="row mt-3">
                                                    <div className="col-3">
                                                       
                                                    </div>
                                                    <div className="col-6">
                                                        <button onClick={() => handleView("Journey View")} type="button" className="btn btn-outline-info waves-effect waves-light">Click to Explore</button>
                                                    </div>
                                                    <div className="col-3"></div>
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
        
                         <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-widgets">
                                            <a href="/" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase5" role="button" aria-expanded="false" aria-controls="cardCollpase5"><i className="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 className="header-title mb-0">Planet Transition Snapshot</h4>

                                        <div id="cardCollpase5" className="collapse pt-3 show">
                                            <div className="table-responsive">
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