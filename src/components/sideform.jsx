import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import { Component } from 'react';
import moment from 'moment';
import * as cities from '../components/cities.json';
import Autocomplete from "../components/autocomplete";
import axios from 'axios';

class sideform extends Component{
    constructor(props){
        super(props);
     
        this.state={
            startDate : null,
            endDate : null
        }
      

    }
    componentDidMount(){
      var url_string = 'http://api.omparashar.com/planet/multi/positions/overdaterange';

      var data = JSON.stringify({"from_year":2020,"from_month":1,"from_day":1,"to_year":2020,"to_month":12,"to_day":31,"lat":29.47,"long":77.69,"offset":19800,"p_nums":[1,2,3,4,5]});

      var config = {
        method: 'get',
        url: 'http://api.omparashar.com/planet/multi/positions/overdaterange',
        headers: { 
          'Content-Type': 'application/json',
          'charset':'utf-8'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
     

     
      
    }

    alertclick = () =>{
     
      
     alert("Start -" + moment(this.state.startDate).format("DD-MM-YYYY") + "</br>" + "End -" +moment(this.state.endDate).format("DD-MM-YYYY"));
    }
    
    
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
                    <code> planet </code>
                    moves
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
                    </div>

                    <button
                      type="submit"
                      className="ladda-button btn btn-primary"
                      onClick={this.alertclick}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default sideform;