
import React, {useState } from "react";
import NatalChart from "./Natal_chart";
import DatePicker from 'react-date-picker'
import TextField from "@material-ui/core/TextField";


function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}


function Natal_chart_layout() {
    const [data, setData] = useState([]);
    const date = new Date()
    let time = pad(date.getHours()) + ":" + pad(date.getMinutes())+ ":" + pad(date.getSeconds());
    // let [newDate,setNewDate] = useState(formatDate(date));
    let [newTime,setNewTime] = useState(time);
    const [value, onChange] = useState(new Date());

    const dateChange = (date) =>{
    onChange(date)
    }

    const timeChange = (time) =>{
    setNewTime(time.target.value)
    }

     return (  
            <> 
            {/* <button onClick={this.apidate_format}>click me</button> */}
            <div className="col-lg-14">
                    <div id="d3graph">
                        <div className="card">
                        <div className="card-body">
                                {/* <div class="card-widgets">
                                    <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                        data-toggle="fullscreen"
                                        >
                                        <i class="fe-maximize noti-icon"></i></a>
                                </div> */}
                                 <span class="header-title" style={{ "color": "#fff" }}>
                                </span>
                                <div className="row">
                                    <div className="col-lg-12" style={{width:"80%", height:"700px"}}>
                                        <center>
                                        <label>Select Date and Time:</label>
                                        <div style={{marginBottom:"-50px"}}>
                                        <DatePicker
                                            onChange={dateChange}
                                            value={value}
                                            format="dd/MM/yyyy"
                                            onKeyDown={(e) => e.preventDefault()}
                                        />
                                        <TextField
                                            style={{    marginLeft: "10px",
                                            marginTop: "0px"}}
                                            id="time"
                                            type="time"
                                            value={newTime}
                                            onChange={timeChange}
                                            InputLabelProps={{
                                            shrink: true
                                            }}
                                            onKeyDown={(e) => e.preventDefault()}
                                        />
                                        </div>
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
 
export default Natal_chart_layout;