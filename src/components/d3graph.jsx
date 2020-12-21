import React from 'react';
import Chart1 from '../d3/chart';
import { useState } from 'react';
import { GlobalProvider, GlobalContext } from '../mycontext';
import * as bg_img from '../components/bg_naks.jpg'
import D3_linechart from '../d3/d3_linechart';
import Ploty_1 from '../d3/plotly_1';
import NatalChart from '../d3/Panchang/Natal_chart';


const D3graph = (props) => {
    const context = React.useContext(GlobalContext)
    const [currentClass, setcurrentClass] = useState('col-lg-10 col-md-12');
    const [value,setValue] = useState(1);
    const [speed,setSpeed] = useState("mop");
    const [message,setMessage] = useState('Speed is per day per sec');

    const toggleClass = () => {
        (currentClass === 'col-lg-10 col-md-12') ? setcurrentClass('fullscreen') : setcurrentClass('col-lg-10 col-md-12');
    };

   
    const play_array =()=>{
        var current_action = context.playicon;
        if(current_action === 'mdi mdi-play'){
            //play the wheel
            context.playplanet();
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


     const doDecrement = () => {
        if(value == 1 ) {
            setMessage(
                "Can't decrement more. Since 1 is the min value"
                  );

        } else {
            setValue(value-1);
            setMessage(null);
            context.play_speed_fn(value);

        }
      }

       const doIncrement =() => {

        if(value < 10) {
            setValue(value+1);
            setMessage(null);
            context.play_speed_fn(value);

        } else {
        setMessage(
            "Can't increment more. Since 10 is the max value"
          );
        }
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
     



    return (
        <>
            <div className={currentClass}>
                <div id="d3graph" className="col-lg-12"  >
                    <div className="card" style={{ "backgroundImage": "url("+bg_img+")", "backgroundPosition": "center","backgroundRepeat": "no-repeat" ,"backgroundSize": "cover", }}>

                        <div className="card-body" style={{ "padding": "10px" }}>
                            {/* <div class="card-widgets">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                    data-toggle="fullscreen" href="/#">
                                    <i class="fe-maximize noti-icon"></i></a>
                            </div> */}
                            <span className="header-title" style={{ "color": "#fff" }}>

                                <div className="btn-group">
                                    <a href="#" style={{"padding":"0","paddingLeft":"1px","paddingRight":"1px","margin":"0"}} onClick={backward_array} className={context.IsActive}><i style={{"fontSize":"25px","padding":"0","margin":"0"}} className="mdi mdi-skip-previous large"></i></a>

                                    {/* <a href="#" style={{"padding":"0","margin":"0"}} class="btn btn-danger waves-effect"><i class="fe-square"></i></a> */}
                                    <a href="#" style={{"padding":"0","paddingLeft":"1px","paddingRight":"1px","margin":"0"}} onClick={play_array} className={context.IsActive}><i style={{"fontSize":"25px","padding":"0","margin":"0"}} className={context.playicon}></i></a>

                                    <a href="#" style={{"padding":"0","paddingLeft":"1px","paddingRight":"1px","margin":"0"}} onClick={forward_array} className={context.IsActive}><i style={{"fontSize":"25px","padding":"0","margin":"0"}} className="mdi mdi-skip-next "></i></a>
                                </div>
                                <div className="btn-group">
                                {/* <button style={{"font-size":"10px"}} onClick={doDecrement} className=" btn btn-default fa fa-minus fa-inverse"></button>
          <input className="form-control default" style={{"width":"15px", "height":"25px","textAlign":"center"}} type="text" className="number" value={value }></input>
          <button style={{"font-size":"10px"}} onClick={doIncrement} className=" btn btn-default fa fa-plus fa-inverse" ></button>

                                </div>
                                <div class="btn-group">
                                <p style={{"text-align":"center","padding-top":"15px","font-size":"15px"}}>{message}</p> */}

                    <select style={{"padding":"0","paddingLeft":"1px","paddingRight":"1px","marginLeft":"8px",}} className="form-control"  value={speed} onChange={handleSpeed}>
            <option value="Normal">Normal</option>
            <option value="Very Slow">Very Slow</option>
            <option value="Slow">Slow</option>
            <option value="Fast">Fast</option>
            <option value="Very Fast">Very Fast</option>
          </select>    
                                </div>
                            </span>

                            <div className="row">
                                <div className="col-lg-12">
                                <NatalChart />
                                <Chart1 />
                                   
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