import React from 'react';
import Chart1 from '../d3/chart';
import { useState } from 'react';


const D3graph = (props) => {
    const [currentClass, setcurrentClass] = useState('col-lg-9');
    const toggleClass = () => {

        (currentClass == 'col-lg-9') ? setcurrentClass('fullscreen') : setcurrentClass('col-lg-9');


    };
    return (
        <>



            <div className={currentClass}>
               



                    <div id="d3graph" className="col-lg-12"  >
                        <div className="card" style={{ "backgroundColor": "#1E4452" }}>

                            <div className="card-body" style={{ "padding": "10px" }}>
                                <div class="card-widgets">
                                    <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                        data-toggle="fullscreen"
                                        onClick={toggleClass}>
                                        <i class="fe-maximize noti-icon"></i></a>
                                </div>
                                <span class="header-title" style={{ "color": "#fff" }}>

                                    <div class="btn-group">
                                        <a href="#" class="btn btn-outline-light waves-effect"><i class="fe-skip-back"></i></a>

                                        <a href="#" class="btn btn-danger waves-effect"><i class="fe-square"></i></a>
                                        <a href="#" class="btn btn-outline-light waves-effect"><i class="fe-play"></i></a>
                                        <a href="#" class="btn btn-outline-danger waves-effect"><i class="fe-pause"></i></a>

                                        <a href="#" class="btn btn-outline-warning waves-effect"><i class="fe-skip-forward"></i></a>
                                    </div>
                                </span>

<div className="row">
    <div className="col-lg-9">
    <Chart1 data={props.planetsdata} />
    </div>
<div className="col-lg-3">
<div class="table-responsive">
                                        <table class="table table-borderless mb-0" style={{"color" : "#fff"}} cellPadding="0" cellSpacing="0">
                                            <thead class="thead-light">
                                            <tr>
                                                <th>#</th>
                                                <th>Degree</th>
                                               
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th>Su</th>
                                                <td>217.21</td>
                                                
                                            </tr>
                                            <tr>
                                                <th>Ru</th>
                                                <td>331</td>
                                               
                                            </tr>
                                            <tr>
                                                <th>Ke</th>
                                                <td>49</td>
                                               
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
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