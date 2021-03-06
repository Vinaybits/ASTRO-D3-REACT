
import React, { Component } from "react";
import axios from "axios";
import { GlobalContext } from '../../mycontext';
import NatalChart from "./Natal_chart";
import DatePicker from 'react-date-picker'
import TextField from "@material-ui/core/TextField";
import * as cities from "../../components/cities.json";
import Select from 'react-select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

function pad(n) {

    return (n < 10) ? ("0" + n) : n;
}


const nums = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
  { value: 11, label: 11 },
  { value: 12, label: 12 },
];

const date = new Date()
let time = pad(date.getHours()) + ":" + pad(date.getMinutes())+ ":" + pad(date.getSeconds());

class Natal_chart_layout extends Component{
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.d3_Chart_ref = React.createRef();
    this.state = {
         selectedOption: 1,
        data:[],
        newTime:time,
        value:new Date(),
        dataIsReturned:false
    };
  }

    componentDidMount(){
        this.fetchMyAPI();
    }

    dateChange = (date) =>{
        this.setState(state => {
        return {
            value:date,
            dataIsReturned:false
        };
        }, () => this.fetchMyAPI());
    }

    numChange = (num) =>{
        var t = num.target.value
        this.setState(state => {
        return {
            selectedOption:t,
            dataIsReturned:false
        };
        }, () => this.fetchMyAPI());
    }

    timeChange = (time) =>{
       var t = time.target.value
        this.setState(state => {
        return {
            newTime:t,
            dataIsReturned:false
        };
        }, () => this.fetchMyAPI());
    }

    fetchMyAPI = () => {
            let y = "";
            let m = "";
            let d = "";
            let h="";
            let mi="";
            let s="";
            let lat = "",
                long = "";
            let offset = "";
            let c = this.context.placeobserved;
            if(this.state.newTime==null){
                h="00";
                mi="00";
                s="00";
            }
            else{
                var newTimeSplit = this.state.newTime.split(':');
                h = newTimeSplit[0];
                mi = newTimeSplit[1];
                s = newTimeSplit[2];
            }

            if(this.state.value !== null){
                y=this.state.value.getFullYear();
                m=this.state.value.getMonth()+1;
                d=this.state.value.getDate();
                
                Object.entries(cities[0]).forEach(([key, value]) => {
                if (key === c) {
                    long = Math.round(value.longitude).toFixed(2);
                    lat = Math.round(value.latitude).toFixed(2);
                }
                });
                offset = Math.round(long * 4 * 60);

                let url_string =
                "http://api.omparashar.com/transit/natalchart";
                //var params = "?from_year=2020&from_month=1&from_day=1&to_year=2020&to_month=6&to_day=30&lat=29.47&long=77.69&offset=19800&p_nums=3&p_nums=4";
                let params =
                "?year="+
                y +
                "&month=" +
                m +
                "&day=" +
                d+
                "&hour="+
                h+
                "&minute="+
                mi+
                "&second="+
                s+
                "&lat=" +
                lat +
                "&long=" +
                long +
                "&offset=" +
                offset +
                "&place=" +
                c +
                "&ascendantnum=" +
                this.state.selectedOption;
                const url = url_string+params;
                 var config = {
                    method: 'get',
                    url: url,
                    headers: { }
                 };
                 console.log(url)
                return axios(config)
                .then((result) => {
                    //set for SIDETABLE
                      console.log(result.data)
                      for (var key in result.data){
                            for(var i in result.data[key]["planets"]){
                                result.data[key]["planets"][i]=result.data[key]["planets"][i].substring(0,2)
                       }
                }
                this.setState({data:result.data})
                this.setState({dataIsReturned:true})
                })
                .catch(function (error) {
                    console.log("Result" + error);
                });
            }
            else{
                 this.setState({data:[]})
            }
    }    

    render(){
     var isfetched = this.state.dataIsReturned;
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
                                 <span className="header-title" style={{ "color": "#fff" }}>
                                </span>
                                <div className="row">
                                    <div className="col-lg-12" style={{width:"80%", height:"700px"}}>
                                        <center>
                                        <label>Select Date, Time and Ascendant Number:</label>
                                        <div style={{marginBottom:"-50px"}}>
                                        <DatePicker
                                            onChange={this.dateChange}
                                            value={this.state.value}
                                            format="dd/MM/yyyy"
                                            onKeyDown={(e) => e.preventDefault()}
                                        />
                                        <TextField
                                            style={{    marginLeft: "10px",
                                            marginTop: "0px"}}
                                            id="time"
                                            type="time"
                                            value={this.state.newTime}
                                            onChange={this.timeChange}
                                            InputLabelProps={{
                                            shrink: true
                                            }}
                                            onKeyDown={(e) => e.preventDefault()}
                                        />
                                        <TextField style={{marginLeft: "10px", minWidth:"50px"}} id="select" value={this.state.selectedOption} onChange={this.numChange} select>
                                            <MenuItem value="1">01</MenuItem>
                                            <MenuItem value="2">02</MenuItem>
                                            <MenuItem value="3">03</MenuItem>
                                            <MenuItem value="4">04</MenuItem>
                                            <MenuItem value="5">05</MenuItem>
                                            <MenuItem value="6">06</MenuItem>
                                            <MenuItem value="7">07</MenuItem>
                                            <MenuItem value="8">08</MenuItem>
                                            <MenuItem value="9">09</MenuItem>
                                            <MenuItem value="10">10</MenuItem>
                                            <MenuItem value="11">11</MenuItem>
                                            <MenuItem value="12">12</MenuItem>
                                        </TextField>

                                        </div>
                                       {
                                       isfetched ? 
                                       <NatalChart data={this.state.data}/>
                                        : ( <div>
                                                <div className='loader' style={{marginLeft:"0%",marginTop:"20%"}}></div>
                                            </div>
                                        )
                                       }
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