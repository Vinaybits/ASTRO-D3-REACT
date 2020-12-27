
import React, { Component } from "react";
import NatalChart from "./Natal_chart";



class Natal_chart_layout extends Component {
    state = {  }
    render() { 
        return (  

            <> 
            {/* <button onClick={this.apidate_format}>click me</button> */}
            <div className="col-lg-10">
                    <div id="d3graph" className="col-lg-12"  >
                        <div className="card">
                        <div className="card-body" style={{ "padding": "10px" }}>
                                <div class="card-widgets">
                                    <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                        data-toggle="fullscreen"
                                        >
                                        <i class="fe-maximize noti-icon"></i></a>
                                </div>
                                 <span class="header-title" style={{ "color": "#fff" }}>
                                </span>
                                <div className="row">
                                    <div className="col-lg-12" style={{width:"80%", height:"700px"}}>
                                        <center>
                                        <NatalChart/>
                                        </center>
                                      
                                    </div>
                                </div> 
    
                       </div>
                    </div>
                </div>
                </div>
            </>
        );
    }
}
 
export default Natal_chart_layout;