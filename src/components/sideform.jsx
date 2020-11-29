import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import { Component } from "react";
import moment from "moment";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

import * as cities from "../components/cities.json";
import Autocomplete from "../components/autocomplete";
import axios from "axios";
import { GlobalProvider, GlobalContext } from "../mycontext";
import "./sideform.css";
import { tickStep } from "d3";

class sideform extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      city: "",
      cities_value: null,
      focusedEndDate: false,
      isValidDateRange: false,
      errors: {},
      open: "",
      resetInputText: false,
      showLabels: false,
      value:'circle_graph'
    };

    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({value: event.target.value});
    this.context
    .changeView(event.target.value);
   

  }

  alertclick = (e) => {
    e.preventDefault();

    let start_Date = "";
    let end_Date = "";
    let from_year = "",
      from_month = "",
      from_day = "";
    let to_year = "",
      to_month = "",
      to_day = "";
    let lat = "",
      long = "";
    let offset = "";

    start_Date = this.state.startDate;
    end_Date = this.state.endDate;
    from_year = moment(start_Date).format("YYYY");
    from_month = moment(start_Date).format("MM");
    from_day = moment(start_Date).format("DD");

    to_year = moment(end_Date).format("YYYY");
    to_month = moment(end_Date).format("MM");
    to_day = moment(end_Date).format("DD");
    let errors = this.state.errors;
    let isFormValid = true;

    if (start_Date == null || end_Date == null) {
      errors["dateError"] = "Please select date range";
      isFormValid = false;
    }

    let names = document.getElementById("auto_complete1").value;
    this.setState({ city: names });
    let keys = Object.entries(cities[0] + "." + names);
    Object.entries(cities[0]).forEach(([key, value]) => {
      if (key === names) {
        long = Math.round(value.longitude).toFixed(2);
        lat = Math.round(value.latitude).toFixed(2);
      }
      //console.log(`${key}: ${value}`);
    });
    offset = Math.round(long * 4 * 60);

    if (names === "") {
      // alert("Please select place of observation");
      errors["observation"] = "Please select place of observation";
      isFormValid = false;
    } else if (lat === "" || long === "" || offset === "") {
      // alert("Please choose correct place of observation");
      errors["observation"] = "Please choose correct place of observation";
      isFormValid = false;
    }

    this.setState({ errors: errors });

    let url_string =
      "http://api.omparashar.com/planet/multi/positions/overdaterange";
    //var params = "?from_year=2020&from_month=1&from_day=1&to_year=2020&to_month=6&to_day=30&lat=29.47&long=77.69&offset=19800&p_nums=3&p_nums=4";
    let params =
      "?from_year=" +
      from_year +
      "&from_month=" +
      from_month +
      "&from_day=" +
      from_day +
      "&to_year=" +
      to_year +
      "&to_month=" +
      to_month +
      "&to_day=" +
      to_day +
      "&lat=" +
      lat +
      "&long=" +
      long +
      "&offset=" +
      offset +
      "&p_nums=0&p_nums=1&p_nums=2&p_nums=3&p_nums=4&p_nums=5&p_nums=6&p_nums=10&p_nums=100";
    console.log(url_string+params)
    // submit form and send reqest is valid date range and location
    if (this.state.isValidDateRange && isFormValid) {
      //formating start and end date for updateing api conetxt
      var startDate = from_year+"/"+from_month+"/"+from_day;
      var endDate = to_year+"/"+to_month+"/"+to_day;

      //----end
      this.context
        .callAPI_daterange(url_string + params, names, startDate, endDate)
        .then((result) => {
          if (result) {
            this.setState({ open: "none" });
            
          }
        });
      // this.setState({open: false});
    }

    // alert(lat+long+offset+"Start -"+from_year+from_month+from_day+"-" + moment(this.state.startDate).format("DD-MM-YYYY") + "</br>" + "End -" +moment(this.state.endDate).format("DD-MM-YYYY"));
  };

  // set all variable values

  onDateChange = (name, date) => {
    let errors = this.state.errors;
    let isValidDateRange = true;
    errors["dateError"] = "";
    this.setState({ errors });
    if (name == "startDate") {
      this.setState({ startDate: date });
      if (this.state.endDate) {
        let isBefore = moment(date).isBefore(this.state.endDate);
        if (!isBefore) {
          errors["dateError"] = "End date should be greater than start date";
          isValidDateRange = false;
        } else if (date.diff(this.state.endDate, "days") > 365) {
          errors["dateError"] =
            "Please select date range with in 365 days / 1 year";
          isValidDateRange = false;
        }
      }
    } else if (name == "endDate") {
      this.setState({ endDate: date });
      if (this.state.startDate) {
        let isAfter = moment(date).isAfter(this.state.startDate);
        if (!isAfter) {
          errors["dateError"] = "End date should be greater than start date";
          isValidDateRange = false;
        } else if (date.diff(this.state.startDate, "days") > 365) {
          errors["dateError"] =
            "Please select date range with in 365 days / 1 year";
          isValidDateRange = false;
        }
      } else {
        errors["dateError"] = "Please select start date";
        isValidDateRange = false;
      }
    }

    this.setState({ errors: errors });
    this.setState({ isValidDateRange: isValidDateRange });
  };

  handleAutoCompleterChange = (type) => {
    if (type === "userInput") {
      let errors = this.state.errors;
      errors["observation"] = "";
      this.setState({ errors: errors });
    } else if (type === "reset") {
      this.setState({ resetInputText: false });
    }
  };

  resetForm() {
    // this.context.dataLoaded = false;
    // this.context.apidataState = {};
    this.setState({ open: "" });
    this.setState({ startDate: null });
    this.setState({ endDate: null });
    this.setState({ city: "" });
    this.setState({ resetInputText: true });
  }

  render() {
    var date = this.context.apidataState.date;
    var planet_data_degree = [];
    planet_data_degree = this.context.apidataState.planets;

    //console.log(cities.default);
    var city = cities.default[0];
    var cities_name = Object.keys(city);
    //console.log(cities_name);
    const falseFunc = () => false;
    const min = "1900-01-01";
    const max = "2500-12-30";
    const returnYears = () => {
      let years = [];
      for (
        let i = parseInt(moment(min).format("YYYY"));
        i <= parseInt(moment(max).format("YYYY"));
        i++
      ) {
        years.push(
          <option key={i} value={i}>
            {i}
          </option>
        );
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
              onChange={(e) => {
                if (month.isBefore(moment(min))) {
                  onMonthSelect(moment(min), moment(min).month());
                } else {
                  onMonthSelect(month, e.target.value);
                }
              }}
            >
              {moment.months().map((label, value) => (
                <option key={label} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={month.year()}
              onChange={(e) => {
                onYearSelect(month, e.target.value);
              }}
            >
              {returnYears()}
            </select>
          </div>
        </div>
      );
    };
    const showLabels = () => {
      return (
        <div>
          <div>
            Place:
            <label for="example-input-small" style={{ "margin-bottom": "0px" }}>
              {this.state.city}
            </label>
          </div>
          <div>
            {" "}
            Start Date:
            <label for="example-input-small" style={{ "margin-bottom": "0px" }}>
              {moment(this.state.startDate).format("DD-MM-YYYY")}
            </label>
          </div>
          <div>
            End Date:
            <label for="example-input-small" style={{ "margin-bottom": "0px" }}>
              {moment(this.state.endDate).format("DD-MM-YYYY")}
            </label>
          </div>
        </div>
      );
    };
    return (
      <>
        <div className="">
          <div className="card" style={{ display: this.state.open }}>
            <div className="card-body">
              <h4 className="header-title">Transition of Planets</h4>
              <p class="sub-header" style={{ "margin-bottom": "0px" }}>
                Let us explore how
                <code> planets </code>
                move
              </p>

              <form>
                <div className="form-group mb-1">
                  <label for="example-input-small">Place of Observation</label>
                  <Autocomplete
                    resetInputText={this.state.resetInputText}
                    handleChange={this.handleAutoCompleterChange}
                    suggestions={cities_name}
                  />
                  {this.state.errors.observation && (
                    <p className="form-error">
                      {this.state.errors.observation}
                    </p>
                  )}
                </div>
                <div className="">
                  <label
                    for="example-input-small"
                    style={{ "margin-bottom": "0px" }}
                  >
                    Select Date Range
                  </label>
                </div>
                <label for="example-input-small">From</label>
                <div className="mb-1">
                  <SingleDatePicker
                    numberOfMonths={1}
                    date={this.state.startDate} // momentPropTypes.momentObj or null
                    onDateChange={(date) =>
                      this.onDateChange("startDate", date)
                    } // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="start_date" // PropTypes.string.isRequired,
                    placeholder="Start Date"
                    isOutsideRange={falseFunc}
                    displayFormat={() => "DD-MM-YYYY"}
                    minDate={moment(min)}
                    maxDate={moment(max)}
                    renderMonthElement={renderMonthElement}
                    readOnly={true}
                  />
                </div>
                <label for="example-input-small">To</label>
                <div className="">
                  <SingleDatePicker
                    numberOfMonths={1}
                    date={this.state.endDate} // momentPropTypes.momentObj or null
                    onDateChange={(date) => this.onDateChange("endDate", date)} // PropTypes.func.isRequired
                    focused={this.state.focusedEndDate} // PropTypes.bool
                    onFocusChange={({ focused: focusedEndDate }) =>
                      this.setState({ focusedEndDate })
                    } // PropTypes.func.isRequired
                    id="end_date" // PropTypes.string.isRequired,
                    placeholder="End Date"
                    isOutsideRange={falseFunc}
                    displayFormat={() => "DD-MM-YYYY"}
                    minDate={moment(min)}
                    maxDate={moment(max)}
                    renderMonthElement={renderMonthElement}
                    readOnly={true}
                  />
                </div>
                <div>
                  {this.state.errors.dateError && (
                    <p className="form-error"> {this.state.errors.dateError}</p>
                  )}
                </div>
                <div>
                  <p class="sub-header">
                    Maximun Date Range allowed is <code> 1year </code>
                  </p>
                </div>
                <center>
                  <button
                    type="submit"
                    className="ladda-button btn"
                    style={{ backgroundColor: "#03428D", color: "#fff" }}
                    onClick={this.alertclick}
                    disabled={this.context.IsLoading}
                  >
                    {this.context.IsLoading ? (
                      <span>
                        Getting Data{" "}
                        <i className="mdi mdi-spin mdi-loading mr-1 font-16"></i>
                      </span>
                    ) : (
                      "Get Data"
                    )}
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>

        {/* New div for showing table data in this component only  */}
        <div className="">
          <div className="card"
            style={{ display: this.state.open ? "" : "none" }} >
            <div className="card-body">
              <h4 className="header-title">Planet positions </h4>
              <div className="sub-heading">
                From Date : {moment(this.state.startDate).format("DD-MM-YYYY")}
                <br />
                To Date : {moment(this.state.endDate).format("DD-MM-YYYY")}
                <br />
                Location : {this.state.city}
                <br />
                <br />
              
                    <label>
                    Select Perspective:
                    <select className="form-control"  value={this.state.value} onChange={this.handleChange}>
            <option value="circle_graph">Galactic View</option>
            <option value="line_chart">Traces</option>
            <option value="journey">Journey</option>
            <option value="snapshot">Snapshot</option>
          </select>
                   </label>
                <br></br>
                <button
                  type="submit"
                  className="ladda-button btn"
                  style={{ backgroundColor: "#03428D", color: "#fff" }}
                  onClick={this.resetForm}
                >
                  Reset Parameters
                </button>
              </div>
              <hr></hr>
              <div style={{display:this.state.value === 'circle_graph' ? '' : 'none'}}>
              <div className="sub-heading">
                {" "}
                Date :{" "}
                <span
                  style={{ fontSize: "14px" }}
                  className="badge badge-pill badge-dark" >
                  {" "}
                  {date}{" "}
                </span>
              </div>
              At 12:00 AM @ {this.context.placeobserved}
              <br />
              <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Planet</th>
                    <th scope="col">Degrees</th>
                  </tr>
                </thead>

                {planet_data_degree && planet_data_degree.length > 0
                  ? planet_data_degree.map((item) => {
                      return (
                        <>
                          <tr key={item.name}>
                            <td style={{ width: "50px" }}>{item.name}</td>
                            <td>
                              {item.deg}&#176;{" "}
                              <b>{item.motion === "D" ? "" : "R"}</b>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  : "Loading..."}
              </table>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default sideform;
