 import React, {useState} from "react";
import 'react-bootstrap';
import { GlobalContext } from '../../mycontext';
import Sideform from "../../SideComponents/sideform";
import './InitDashboard.css'
const InitDashboard= () => {
    const context = React.useContext(GlobalContext)
    let [localview,setLocalview] = useState(context.currentView)
    let [localmode,setLocalmode] = useState("TransitionView")
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

     const AreSnapshotDetailsFilled = () =>{
         if(context.placeobserved===null){
                return false;
        }
        else{
            return true;
        }
     }

    const handlePlainView = (selectedName) => {
        context.change_View(selectedName)
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
                            <Sideform show={show} mode={localmode} handleClose={handleClose} view={localview} reset={false}/>
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
                                                <div id="total-users" data-colors="#00acc1,#4b88e4,#e3eaef,#fd7e14"> <img alt="galactic view" className="introimage" src={require("./Galactic.png")} /></div>
                                                <div className="row mt-3">
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
                                                <div id="income-amounts" data-colors="#00acc1"><img alt="Traces view"  className="introimagewide" src={require("./Traces.png")} /></div>
                                                <div className="row mt-3">
                                                    <div className="col-3">
                                                       
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" onClick={() => handleView("Traces View")}  className="btn btn-outline-success waves-effect waves-light">Explore Here</button>
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

                            <div className="col-xl-4 col-md-6">
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
                                                <div id="lifetime-sales" data-colors="#00acc1,#f1556c"><img alt="Journey view"  className="introimagewide" src={require("./Journey.png")}/></div>
                                                <div className="row mt-3">
                                                    <div className="col-3">
                                                       
                                                    </div>
                                                    <div className="col-6">
                                                        <button onClick={() => handleView("Journey View")} type="button" className="btn btn-outline-info waves-effect waves-light">Explore Here</button>
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

                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-widgets">
                                            <a href="/" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false" aria-controls="cardCollpase3"><i className="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 className="header-title mb-0">Snapshot Now</h4>

                                        <div id="cardCollpase3" className="collapse pt-3 show">
                                            <div className="text-center">
                                                <div id="total-users" data-colors="#00acc1,#4b88e4,#e3eaef,#fd7e14"> <img alt="snapshot"  className="introimagewide" src={require("./Snapshot.png")} /></div>
                                                <div className="row mt-3">
                                                    <div className="col-3">
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" onClick={() => handleView("Snapshot")}  className="btn btn-outline-primary waves-effect waves-light">Explore Here</button>
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
                                        <h4 className="header-title mb-0">Transit for Kaal Purush</h4>

                                        <div id="cardCollpase2" className="collapse pt-3 show">
                                            <div className="text-center">
                                                <div id="income-amounts" data-colors="#00acc1"><img alt="Natal Chart" className="introimage"  src={require("./natal.png")}/></div>
                                                <div className="row mt-3">
                                                    <div className="col-3">
                                                       
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" onClick={() => handleView("Natal Chart")}  className="btn btn-outline-success waves-effect waves-light">Explore Here</button>
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

                            <div className="col-xl-4 col-md-6">
                                {/* <!-- Portlet card --> */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-widgets">
                                            <a href="/" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 className="header-title mb-0">Transit for your Rashi</h4>

                                        <div id="cardCollpase1" className="collapse pt-3 show">
                                            <div className="text-center">
                                                <div id="lifetime-sales" data-colors="#00acc1,#f1556c"><img alt="RashiTransit" className="introimage"  src={require("./Galactic.png")}/></div>
        
                                                <div className="row mt-3">
                                                    <div className="col-3">
                                                       
                                                    </div>
                                                    <div className="col-6">
                                                        <button onClick={() => handleView("Dashboard")} type="button" className="btn btn-outline-info waves-effect waves-light">Explore Here</button>
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

                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-widgets">
                                            <a href="/" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false" aria-controls="cardCollpase3"><i className="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 className="header-title mb-0">Dancing of Planets</h4>

                                        <div id="cardCollpase3" className="collapse pt-3 show">
                                            <div className="text-center">
                                                <div id="total-users" data-colors="#00acc1,#4b88e4,#e3eaef,#fd7e14"> <img alt="Dancing" src={require("./Galactic.png")} className="introimage"/></div>
                                                <div className="row mt-3">
                                                    <div className="col-3">
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" onClick={() => handleView("Dashboard")}  className="btn btn-outline-primary waves-effect waves-light">Explore Here</button>
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
                                        <h4 className="header-title mb-0">Sun and Moon Phases</h4>

                                        <div id="cardCollpase2" className="collapse pt-3 show">
                                            <div className="text-center">
                                                <div id="income-amounts" data-colors="#00acc1"><img alt="SMPhases" src={require("./SunAndMoonPhases.png")} className="introimagewide"/></div>
                                                <div className="row mt-3">
                                                    <div className="col-3">
                                                       
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" onClick={() => handleView("Sun and Moon Phases")}  className="btn btn-outline-success waves-effect waves-light">Explore Here</button>
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

                            <div className="col-xl-4 col-md-6">
                                {/* <!-- Portlet card --> */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-widgets">
                                            <a href="/" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 className="header-title mb-0">Moon Phases</h4>

                                        <div id="cardCollpase1" className="collapse pt-3 show">
                                            <div className="text-center">
                                                <div id="lifetime-sales" data-colors="#00acc1,#f1556c"><img alt="MoonPhases" src={require("./Galactic.png")} className="introimage"/></div>
        
                                                <div className="row mt-3">
                                                    <div className="col-3">
                                                       
                                                    </div>
                                                    <div className="col-6">
                                                        <button onClick={() => handleView("Dashboard")} type="button" className="btn btn-outline-info waves-effect waves-light">Explore Here</button>
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
        
                </>
        );    
    }

export default InitDashboard;