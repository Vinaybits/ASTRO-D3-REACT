import React from 'react';
import Chart1 from '../d3/chart';
import { useState } from 'react';
import { GlobalProvider, GlobalContext } from '../mycontext';
import * as bg_img from '../components/bg_naks.jpg'
import D3_linechart from '../d3/d3_linechart';
import Ploty_1 from '../d3/plotly_1';


const D3graph = (props) => {
    const context = React.useContext(GlobalContext)
    const [currentClass, setcurrentClass] = useState('col-lg-8');

    const toggleClass = () => {
        (currentClass === 'col-lg-8') ? setcurrentClass('fullscreen') : setcurrentClass('col-lg-8');
    };

    const play_array =()=>{
        var current_action = context.playicon;
        if(current_action === 'fas fa-play fa-2x'){
            //play the wheel
            context.playplanet();
            //setplaybuttonIcon = 'fas fa-pause fa-2x'

        }
        else if(current_action === 'fas fa-pause fa-2x')
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
                                    <a href="#" onClick={backward_array} class={context.IsActive}><i class="fas fa-step-backward fa-2x"></i></a>

                                    {/* <a href="#" class="btn btn-danger waves-effect"><i class="fe-square"></i></a> */}
                                    <a href="#" onClick={play_array} class={context.IsActive}><i class={context.playicon}></i></a>

                                    <a href="#" onClick={forward_array} class={context.IsActive}><i class="fas fa-step-forward fa-2x"></i></a>
                                </div>
                            </span>

                            <div className="row">
                                <div className="col-lg-12">
                                    <Chart1 data={props.planetsdata} />
                                   
                                </div>
                               
                            </div>




                        </div>
                    </div>
                
                {/* <br>
                </br>

                <D3_linechart />
                <Ploty_1 /> */}
                </div>


            </div>



        </>
    );
};

export default D3graph;