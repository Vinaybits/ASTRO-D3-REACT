/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState } from 'react';
import { GlobalContext } from '../mycontext';
import * as bg_img from '../components/bg_naks.jpg'
// import { Link } from 'react-router-dom'

import Chart1 from '../d3/chart';
import Sidetable from '../SideComponents/sidetable';


const D3graph = (props) => {
    const context = React.useContext(GlobalContext)
    const [speed,setSpeed] = useState("mop");
  
   
    const play_array =()=>{
        
        var current_action = context.playicon;
        if(current_action === 'mdi mdi-play'){
            //play the wheel
            context.playplanet();
            context.changeSideTableDisplay(true);
            //setplaybuttonIcon = 'mdi mdi-pause'

        }
        else if(current_action === 'mdi mdi-pause')
        {
            context.pauseplanet();

        }
    }

    const forward_array =() =>{

        context.forwardPlanet();
    }

    const backward_array=()=>{
        context.backwardPlanet();
    }

      const handleSpeed = (speed) =>{
          setSpeed(speed.target.value)
          var current_action = context.playicon;
          if(speed.target.value === "Very Fast"){
                if(current_action === 'mdi mdi-pause'){
            //play the wheel
            context.pauseplanet();
            //setplaybuttonIcon = 'mdi mdi-pause'
         }    
              context.play_speed_fn(0.5);
          }
         else if(speed.target.value === "Fast"){
             setSpeed(speed.target.value)
             if(current_action === 'mdi mdi-pause'){
            //play the wheel
            context.pauseplanet();
            //setplaybuttonIcon = 'mdi mdi-pause'
         }
             
            context.play_speed_fn(1.5);
         }
         else if(speed.target.value === "Normal"){
             setSpeed(speed.target.value)
             if(current_action === 'mdi mdi-pause'){
            //play the wheel
            context.pauseplanet();
            //setplaybuttonIcon = 'mdi mdi-pause'
         }
             
             context.play_speed_fn(3);
         }
         else if(speed.target.value === "Slow"){
              setSpeed(speed.target.value)
             if(current_action === 'mdi mdi-pause'){
            //play the wheel
            context.pauseplanet();
            //setplaybuttonIcon = 'mdi mdi-pause'
         }
             
            
             context.play_speed_fn(5);
         }
         else if(speed.target.value === "Very Slow"){
              setSpeed(speed.target.value)
             if(current_action === 'mdi mdi-pause'){
            //play the wheel
            context.pauseplanet();
            //setplaybuttonIcon = 'mdi mdi-pause'
         }
            context.play_speed_fn(6);
         }
    }
     
     const currentTopView = () =>{
        if(context.sideTableDisplay){
                return <Sidetable handleView={props.handleView}/>
                            
        }
        else{
            return <form className="form-inline" style={{fontSize:"1.1em",color:"#fff", marginTop:"2%" }} >
                                                <div className="form-group mx-md-3">
                                                    <label className="mr-2">Location:</label>
                                                    <label className="mr-2">{context.placeobserved}</label>
                                                </div>
                                                <div className="form-group mx-md-3">
                                                    <label className="mr-2">Start Date:</label>
                                                    <label className="mr-2">{context.startDate}</label>
                                                </div>
                                                <div className="form-group mx-md-3">
                                                    <label className="mr-2">End Date:</label>
                                                    <label className="mr-2">{context.endDate}</label>
                                                </div>
                    </form>
        }
        
    }



    return (
        <>
            <div className="col-lg-14">
                <div id="d3graph">
                    <div className="card" style={{ "backgroundImage": "url("+bg_img+")", "backgroundPosition": "center","backgroundRepeat": "no-repeat" ,"backgroundSize": "cover", }}>

                        <div className="card-body" style={{ "padding": "10px" }}>
                            <div class="row" style={{paddingLeft:"10px", display:"flex", flexWrap:"wrap"}}> 
                                    <span className="header-title" style={{ "color": "#fff", width:"20%" }}> 
                                    <div className="btn-group" >
                                    <a href="" style={{"padding":"0","paddingLeft":"1px","paddingRight":"1px","margin":"0"}} onClick={backward_array} className={context.IsActive}><i style={{"fontSize":"25px","padding":"0","margin":"0"}} className="mdi mdi-skip-previous large"></i></a>

                                    {/* <a href="#" style={{"padding":"0","margin":"0"}} class="btn btn-danger waves-effect"><i class="fe-square"></i></a> */}
                                    <a href="#" style={{"padding":"0","paddingLeft":"1px","paddingRight":"1px","margin":"0"}} onClick={play_array} className={context.IsActive}><i style={{"fontSize":"25px","padding":"0","margin":"0"}} className={context.playicon}></i></a>

                                    <a href="#" style={{"padding":"0","paddingLeft":"1px","paddingRight":"1px","margin":"0"}} onClick={forward_array} className={context.IsActive}><i style={{"fontSize":"25px","padding":"0","margin":"0"}} className="mdi mdi-skip-next "></i></a>
                                    </div>
                                    <div className="btn-group">
                            
                                    <select style={{"padding":"0","paddingLeft":"1px","paddingRight":"1px","marginLeft":"8px",}} className="form-control"  value={speed} onChange={handleSpeed}>
                                        <option value="Normal">Normal</option>
                                        <option value="Very Slow">Very Slow</option>
                                        <option value="Slow">Slow</option>
                                        <option value="Fast">Fast</option>
                                        <option value="Very Fast">Very Fast</option>
                                    </select>    
                                    </div>
                                    </span>    
                                <div style={{ paddingLeft: "40px",width:"70%"}}>
                                   {currentTopView()}
                                </div>

                                <div style={{width:"10%"}}>
                                <button style={{marginTop:"2%"}} type="button" className="btn btn-danger waves-effect waves-light mr-1" onClick={() => props.handleView()}><i class="mdi mdi-circle mr-1"></i> Reset</button>
                                </div>
                               
                            </div> 

                            <div className="row">
                                <div className="col-lg-12">
                                   
                                <Chart1 city={context.placeobserved} start={context.startDate} end={context.endDate}/>
                                   
                                </div>
                               
                            </div>
                        </div>
                    </div>
             
                {/* <Ploty_1 /> */}
                </div>


            </div>



        </>
    );
};

export default D3graph;