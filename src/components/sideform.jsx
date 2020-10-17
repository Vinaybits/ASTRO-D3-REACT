import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import { Component } from 'react';
import moment from 'moment';
import * as cities from '../components/cities.json';
import Autocomplete from "../components/autocomplete";
import axios from 'axios';
import { GlobalProvider, GlobalContext } from '../mycontext';

class sideform extends Component{
  static contextType = GlobalContext;
    constructor(props){
        super(props);
     
        this.state={
            startDate : null,
            endDate : null,
            cities_value : null
        };
        
      

    }
    
    componentDidMount(){
      
      
    }

     

    alertclick = (e) =>{
      
      let start_Date ='';
      let end_Date = '';
      let from_year = '', from_month = '', from_day = '';
      let to_year = '', to_month = '', to_day = '';
      let lat = '', long = '';
      let offset = '';
 
      start_Date = this.state.startDate;
      end_Date = this.state.endDate;
      from_year = moment(start_Date).format('YYYY');
      from_month = moment(start_Date).format('MM');
      from_day = moment(start_Date).format('DD');
 
      to_year = moment(end_Date).format('YYYY');
      to_month = moment(end_Date).format('MM');
      to_day = moment(end_Date).format('DD');
 
 
 
      var names = document.getElementById('auto_complete1').value;
      var keys = Object.entries(cities[0]+ "."+ names);
      Object.entries(cities[0]).forEach(([key, value])=>{
 
       if(key === names){
         long = Math.round(value.longitude).toFixed(2);
         lat = Math.round(value.latitude).toFixed(2);
       }
       //console.log(`${key}: ${value}`);
 
      });
      offset = Math.round(long * 4 * 60);
      
 

     var url_string = 'http://api.omparashar.com/planet/multi/positions/overdaterange';
     //var params = "?from_year=2020&from_month=1&from_day=1&to_year=2020&to_month=6&to_day=30&lat=29.47&long=77.69&offset=19800&p_nums=3&p_nums=4";
     var params = "?from_year="+from_year+"&from_month="+from_month+"&from_day="+from_day+"&to_year="+to_year+"&to_month="+to_month+"&to_day="+to_day+"&lat="+lat+"&long="+long+"&offset="+offset+"&p_nums=0&p_nums=1&p_nums=2&p_nums=3&p_nums=4&p_nums=5&p_nums=6&p_nums=10&p_nums=100";

     var a = moment(start_Date);
     var b = moment(end_Date);
     var numberofdays = b.diff(a, 'days') // 1

     if(names === ''){
       alert("Please select place of observation");
     }
     else if(lat === '' || long === '' || offset === ''){
      alert("Please choose correct place of observation");

     }
     else if(start_Date === '' || end_Date === '' || from_year === 'Invalid date' || start_Date === null || end_Date === null){
      alert("Please select date range ");

     }
     else if(numberofdays > 365){
      alert("Please select date range with in 365 days / 1 year");
     }
     else{
      this.context.callAPI_daterange(url_string+params,names);
     }
    
      
      
    // alert(lat+long+offset+"Start -"+from_year+from_month+from_day+"-" + moment(this.state.startDate).format("DD-MM-YYYY") + "</br>" + "End -" +moment(this.state.endDate).format("DD-MM-YYYY"));
    e.preventDefault();
   
    }

    // set all variable values 
    
    
    
    render(){
      //console.log(cities.default);
      var city = cities.default[0];
      var cities_name = Object.keys(city);
      //console.log(cities_name);
        const falseFunc = ()=>false;
        const min = "1900-01-01";
        const max = "2500-12-30";
        const returnYears = () => {
          let years = [];
          for (
            let i = parseInt(moment(min).format("YYYY"));
            i <= parseInt(moment(max).format("YYYY"));
            i++
          ) {
            years.push(<option value={i}>{i}</option>);
          }
          return years;
        };
        const renderMonthElement = ({ month, onMonthSelect, onYearSelect }) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <select
                  value={
                    moment(month).isBefore(moment(min))
                      ? moment(min).month()
                      : month.month()
                  }
                  onChange={e => {
                    if (month.isBefore(moment(min))) {
                      onMonthSelect(moment(min), moment(min).month());
                    } else {
                      onMonthSelect(month, e.target.value);
                    }
                  }}
                >
                  {moment.months().map((label, value) => (
                    <option value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={month.year()}
                  onChange={e => {
                    onYearSelect(month, e.target.value);
                  }}
                >
                  {returnYears()}
                </select>
              </div>
            </div>
          );
        };
        return (
          <>
            <div className="col-lg-2">
              <div className="card">
                <div className="card-body">
                  <h4 className="header-title">Transition of Planets</h4>
                  <p class="sub-header">
                    Let us explore how
                    <code> planets </code>
                    move
                  </p>

                  <form>
                    <div className="form-group mb-3">
                      <label for="example-input-small">Place of Observation</label>
                      <Autocomplete  suggestions={cities_name} />
                    </div>
                    <div className="form-group mb-3">
                      <label for="example-input-small">Select Date Range</label>
                     
                      <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                       
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                      
                        isOutsideRange={falseFunc}
                        displayFormat={() => "DD-MM-YYYY"}
                        minDate={moment(min)}
                        maxDate={moment(max)}
                        renderMonthElement={renderMonthElement}
                        onDatesChange={({ startDate, endDate }) =>
                          this.setState({ startDate, endDate })
                        } // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={(focusedInput) =>
                          this.setState({ focusedInput })
                        } // PropTypes.func.isRequired,
                      />
                       <p class="sub-header">
                    Maximun Date Range allowed is <code> 1year 
                     </code>
                   
                  </p>
                    </div>
<center>


                    <button
                      type="submit"
                      className="ladda-button btn btn-primary"
                      onClick={this.alertclick} disabled={this.context.IsLoading}
                    >
                      {(this.context.IsLoading) ? <span>Getting Data <i className="mdi mdi-spin mdi-loading mr-1 font-16"></i></span> : 'Get Data'}
                      
                    </button></center>
                  </form>
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default sideform;