import React from 'react';
import Chart1 from '../d3/chart';
import { useState } from 'react';
import { GlobalProvider, GlobalContext } from '../mycontext';
import * as bg_img from '../components/bg_naks.jpg'
import D3_linechart from '../d3/d3_linechart';
import Ploty_1 from '../d3/plotly_1';


const D3graph = (props) => {
    const context = React.useContext(GlobalContext)
    const [currentClass, setcurrentClass] = useState('col-lg-10');
    const [value,setValue] = useState(1);
    const [message,setMessage] = useState('Speed is per day per sec');



    const toggleClass = () => {
        (currentClass === 'col-lg-10') ? setcurrentClass('fullscreen') : setcurrentClass('col-lg-10');
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
     



    return (
        <>
            <div className={currentClass}>
                <div id="d3graph" className="col-lg-12"  >
                    <div className="card" style={{ "background-image": "url("+bg_img+")", "background-position": "center","background-repeat": "no-repeat" ,"background-size": "cover", }}>

                        <div className="card-body" style={{ "padding": "10px" }}>
                            <div class="card-widgets">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                    data-toggle="fullscreen"
                                    onClick={toggleClass}>
                                    <i class="fe-maximize noti-icon"></i></a>
                            </div>
                            <span class="header-title" style={{ "color": "#fff" }}>

                                <div class="btn-group">
                                    <a href="#" style={{"padding":"0","padding-left":"3px","padding-right":"3px","margin":"0"}} onClick={backward_array} class={context.IsActive}><i style={{"font-size":"40px","padding":"0","margin":"0"}} class="mdi mdi-skip-previous large"></i></a>

                                    {/* <a href="#" style={{"padding":"0","margin":"0"}} class="btn btn-danger waves-effect"><i class="fe-square"></i></a> */}
                                    <a href="#" style={{"padding":"0","padding-left":"3px","padding-right":"3px","margin":"0"}} onClick={play_array} class={context.IsActive}><i style={{"font-size":"40px","padding":"0","margin":"0"}} class={context.playicon}></i></a>

                                    <a href="#" style={{"padding":"0","padding-left":"3px","padding-right":"3px","margin":"0"}} onClick={forward_array} class={context.IsActive}><i style={{"font-size":"40px","padding":"0","margin":"0"}} class="mdi mdi-skip-next "></i></a>
                                </div>
                                <div class="btn-group">
                                <button onClick={doDecrement} className=" btn btn-default fa fa-minus fa-inverse"></button>
          <input className="form-control default" style={{"width":"25px","textAlign":"center"}} type="text" className="number" value={value }></input>
          <button onClick={doIncrement} className=" btn btn-default fa fa-plus fa-inverse" ></button>

                                </div>
                                <div class="btn-group">
                                <p style={{"text-align":"center","padding-top":"15px"}}>{message}</p>
                                </div>
                            </span>

                            <div className="row">
                                <div className="col-lg-12">
                                   
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