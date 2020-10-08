import React from 'react';
import Chart1 from '../d3/chart';
import { useState } from 'react';
import { GlobalProvider, GlobalContext } from '../mycontext';
import * as bg_img from '../components/bg_naks.jpg'


const D3graph = (props) => {
    const context = React.useContext(GlobalContext)
    const [currentClass, setcurrentClass] = useState('col-lg-8');

    const toggleClass = () => {
        (currentClass === 'col-lg-8') ? setcurrentClass('fullscreen') : setcurrentClass('col-lg-8');
    };

    const play_array =()=>{
        var current_action = context.playicon;
        if(current_action === 'fe-play'){
            //play the wheel
            context.playplanet();
            //setplaybuttonIcon = 'fe-pause'

        }
        else if(current_action === 'fe-pause')
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
                                    <a href="#" onClick={backward_array} class="btn btn-dark waves-effect"><i class="fe-skip-back"></i></a>

                                    {/* <a href="#" class="btn btn-danger waves-effect"><i class="fe-square"></i></a> */}
                                    <a href="#" onClick={play_array} class="btn btn-dark waves-effect"><i class={context.playicon}></i></a>

                                    <a href="#" onClick={forward_array} class="btn btn-dark waves-effect"><i class="fe-skip-forward"></i></a>
                                </div>
                            </span>

                            <div className="row">
                                <div className="col-lg-12">
                                    <Chart1 data={props.planetsdata} />
                                </div>
                               
                            </div>




                        </div>
                    </div>
                </div>


            </div>



        </>
    );
};

export default D3graph;