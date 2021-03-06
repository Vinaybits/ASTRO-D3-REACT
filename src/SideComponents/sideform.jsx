import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  SingleDatePicker,
} from "react-dates";
import { Component } from "react";
import moment from "moment";
import * as cities from "../components/cities.json";
import Autocomplete from "./autocomplete";
import {GlobalContext } from "../mycontext";
import "./sideform.css";
import Modal from 'react-bootstrap/Modal';

class sideform extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      panchangDate: moment(moment(this.props.date).format("MM-DD-YYYY")),
      displaypanchangDate: null,
      city: "",
      cities_value: null,
      focusedEndDate: false,
      isValidDateRange: false,
      errors: {},
      open: "",
      resetInputText: false,
      showLabels: false,
      value:'circle_graph',
      address:''
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

        let names = document.getElementById("auto_complete1").value;
        this.setState({ city: names });
      
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
          "http://api.omparashar.com/transit/multi/positions/overdaterange";
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
                this.context.changeSideTableDisplay(false);
              }
            });
          // this.setState({open: false});
        }
          this.context.resetForm();
          let pnums = [0,1,2,3,4,5,6,10,100]
          this.context.resetLoading(true);

        for(let i=0; i<pnums.length;i++){
          let url_string =
          "http://api.omparashar.com/transit/journey/overdaterange";
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
          "&p_num="+
          pnums[i];
        console.log(url_string+params)
        // submit form and send reqest is valid date range and location
        if (this.state.isValidDateRange && isFormValid) {
          //formating start and end date for updateing api conetxt
          var startDate = from_year+"/"+from_month+"/"+from_day;
          var endDate = to_year+"/"+to_month+"/"+to_day;
      
          this.context
            .callAPI_Journey_daterange(url_string + params)
            .then((result) => {
              if (result){
                if(this.context.repositories.length >= 9){
                  this.context.setStateForJourney(names,startDate,endDate);
                  this.context.change_View(this.props.view);
                  this.props.handleClose();
                  this.context.resetLoading(false);
                  }

              }
            });
          }
        }

  };

  callClose = () => {
    this.props.close()
  }

 
  alertclickPanchang = (e) =>
  {
    e.preventDefault();
    let names = document.getElementById("auto_complete1").value;
    this.setState({ city: names });
     this.context.set_Panchang_Date(this.state.panchangDate,names);
     this.callClose();
  }

   
  alertclickSnapshot = (e) =>
  {
    e.preventDefault();
    this.context.resetLoading(true);
    let names = document.getElementById("auto_complete1").value;
    this.setState({ city: names });
    this.context.setSnapshotCity(names);
    this.props.handleClose();
    this.context.change_View(this.props.view);
    this.context.resetLoading(false);
  }


  // set all variable values

  onDateChange = (name, date) => {
    let errors = this.state.errors;
    let isValidDateRange = true;
    errors["dateError"] = "";
    this.setState({ errors });
    if (name === "startDate") {
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
    } else if (name === "endDate") {
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
    else if(name === "panchangDate"){
      console.log(date)
      this.setState({panchangDate: date})
    }

    this.setState({ errors: errors });
    this.setState({ isValidDateRange: isValidDateRange });
  };

   handleplaceChange = address => {
    this.setState({ address });
  };

  // handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => console.log('Success', latLng))
  //     .catch(error => console.error('Error', error));
  // };

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
    this.setState({ panchangDate: null });
    
  }

  render() {
 
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
   
    //  if(this.props.flag==="datesideform"){
    //         this.setState({displaypanchangDate:null})
    // }
    // if(this.props.flag==="placesideform"){
    //         this.setState({displaypanchangDate:this.state.panchangDate})
    // }
    const mode = this.props.mode;
    if(mode === "TransitionView"){
    return (
      <>
        <div className="">
          <Modal animation={false} size="md" dialogClassName={"primaryModal"} show={this.props.show} onHide={this.props.handleClose} centered>
              <Modal.Header 
                closeButton 
              >
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Details
                </Modal.Title>
              </Modal.Header>
            <Modal.Body style={{paddingLeft:"120px"}}>
            <div className="card" >
              <div className="card-body" >
                <form>
                  <div className="form-group mb-1">
                  <label htmlFor="example-input-small">Place of Observation</label>
                  <Autocomplete
                    defaultValue = {this.context.placeobserved}
                    resetInputText={this.state.resetInputText}
                    handleChange={this.handleAutoCompleterChange}
                    suggestions={cities_name}
                    id="autocomplete"
                    city={this.context.placeobserved||""}
                  />
                  {this.state.errors.observation && (
                    <p className="form-error">
                      {this.state.errors.observation}
                    </p>
                  )}
                </div>
                <div className="">
                  <label
                    htmlFor="example-input-small"
                    style={{ "marginBottom": "0px" }}
                  >
                    Select Date Range
                  </label>
                </div>
                <label htmlFor="example-input-small">From</label>
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
                    // minDate={moment(min)}
                    // maxDate={moment(max)}
                    renderMonthElement={renderMonthElement}
                    readOnly={true}
                  />
                </div>
                <label htmlFor="example-input-small">To</label>
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
                    // minDate={moment(min)}
                    // maxDate={moment(max)}
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
                  <p className="sub-header">
                    Maximum Date Range allowed is <code> 1year </code>
                  </p>
                </div>
                    <button
                    type="submit"
                    className="ladda-button btn"
                    style={{ backgroundColor: "#03428D", color: "#fff", marginTop:"5%" }}
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

              </form>
            </div>
          </div>
          </Modal.Body>
          </Modal>
        </div>

        {/* New div for showing table data in this component only  */}
       
      </>
    );
  }
  else if( mode === "panchangView"){
    return(
       <>
      <div className="">
          <div className="card" style={{ display: this.state.open }}>
            <div className="card-body">
              <form>
              <div className="form-group mb-1">
                  <label htmlFor="example-input-small">Place of Observation</label>
                  <Autocomplete
                    resetInputText={this.state.resetInputText}
                    handleChange={this.handleAutoCompleterChange}
                    suggestions={cities_name}
                    id="autocomplete"
                    city={this.props.place}
                  />
                  {this.state.errors.observation && (
                    <p className="form-error">
                      {this.state.errors.observation}
                    </p>
                  )}
                </div>
                <label htmlFor="example-input-small">Select Date</label>
                <div className="mb-1">
                  <SingleDatePicker
                    numberOfMonths={1}
                    date={this.state.panchangDate} // momentPropTypes.momentObj or null
                    onDateChange={(date) =>
                      this.onDateChange("panchangDate", date)
                    } // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="panchang_date" // PropTypes.string.isRequired,
                    placeholder="Date"
                    isOutsideRange={falseFunc}
                    displayFormat={() => "DD-MM-YYYY"}
                    // minDate={moment(min)}
                    // maxDate={moment(max)}
                    renderMonthElement={renderMonthElement}
                    readOnly={true}
                  />
                </div>
                <center>
                  <button
                    type="submit"
                    className="ladda-button btn"
                    style={{ backgroundColor: "#03428D", color: "#fff" }}
                    onClick={this.alertclickPanchang}
                    disabled={this.context.IsLoading}
                  >
                    {this.context.IsLoading ? (
                      <span>
                        Getting Data{" "}
                        <i className="mdi mdi-spin mdi-loading mr-1 font-16"></i>
                      </span>
                    ) : (
                      "Update"
                    )}
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
     </>                     
    );
  }
  else if( mode === "Snapshot"){
    return(
       <>
        <div className="">
        <Modal animation={false} size="md" dialogClassName={"primaryModal"} show={this.props.show} onHide={this.props.handleClose} centered>
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter">
                      Update Details
                </Modal.Title>
            </Modal.Header>
        <Modal.Body style={{paddingLeft:"120px"}}>
          <div className="card" style={{ display: this.state.open }}>
            <div className="card-body">
              <form>
              <div className="form-group mb-1">
                  <label htmlFor="example-input-small">Place of Observation</label>
                  <Autocomplete
                    resetInputText={this.state.resetInputText}
                    handleChange={this.handleAutoCompleterChange}
                    suggestions={cities_name}
                    id="autocomplete"
                    city={this.props.place}
                  />
                  {this.state.errors.observation && (
                    <p className="form-error">
                      {this.state.errors.observation}
                    </p>
                  )}
              </div>
                  <button
                    type="submit"
                    className="ladda-button btn"
                    style={{ backgroundColor: "#03428D", color: "#fff" }}
                    onClick={this.alertclickSnapshot}
                    disabled={this.context.IsLoading}
                  >
                    {this.context.IsLoading ? (
                      <span>
                        Getting Data{" "}
                        <i className="mdi mdi-spin mdi-loading mr-1 font-16"></i>
                      </span>
                    ) : (
                      "Update"
                    )}
                  </button>
              </form>
            </div>
          </div>
        </Modal.Body>
        </Modal>
        </div>
       </>                     
    );
  }
  }
}

export default sideform;
