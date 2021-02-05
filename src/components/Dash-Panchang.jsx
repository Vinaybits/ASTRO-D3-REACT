/* eslint-disable no-useless-concat */
import React, { useState, useEffect, useContext } from "react";
import "./dash-panchang.css";
import DashboardTopBar from "./DashBoardLayout/DashboardTopBar";
import DashboardSideBar from "./DashBoardLayout/DashboardSideBar";
import DashboardFooter from "./DashBoardLayout/DashboardFooter";
import "../d3/Holistic.css";
import { GlobalContext } from "../mycontext";
import * as cities from "./cities.json";
import axios from "axios";
import background from "../assets/img/bg.jpg";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Sideform from "../SideComponents/sideform";

const Dash_Panchang = () => {
  
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function remove_character(str, char_pos, str1) {
    if (str !== null) {
      str = str.split(",")[1];
      let part1 = str.substring(0, char_pos + 1);
      let part2 = str.substring(char_pos + 4, str.length);
      return part1 + part2;
    }
  }

  function extract_current_tithi(obj) {
    if (obj !== null) {
      let tithi_name = obj.current.Tithi.split(",")[0];
      let current_tithi_end_time = obj["current"]["Ends on"]["time"];
      return tithi_name + " " + "upto" + " " + current_tithi_end_time;
    }
  }

  function extract_current_yoga(obj) {
    if (obj !== null) {
      let yoga_name = obj.current.Yoga.split(",")[0];
      let current_yoga_end_time = obj["current"]["Ends on"]["time"];
      return yoga_name + " " + "upto" + " " + current_yoga_end_time;
    }
  }

  function extract_current_karan(obj) {
    if (obj !== null) {
      let karan_name = obj.current.Karan.split(",")[0];
      let next_end_time = obj["current"]["Ends on"]["time"];
      let next_end_date = obj["current"]["Ends on"]["date"].split("-");
      let month_name = monthNames[next_end_date[1] - 1];
      let day = next_end_date[0];
      return (
        karan_name +
        " " +
        "upto" +
        " " +
        next_end_time +
        "," +
        " " +
        month_name +
        " " +
        day
      );
    }
  }

  function extract_next_tithi(obj) {
    if (obj !== null) {
      let tithi_name = obj.next.Tithi.split(",")[0];
      let next_end_time = obj["next"]["Ends on"]["time"];
      let next_end_date = obj["next"]["Ends on"]["date"].split("-");
      let month_name = monthNames[next_end_date[1] - 1];
      let day = next_end_date[0];
      return (
        tithi_name +
        " " +
        "upto" +
        " " +
        next_end_time +
        "," +
        " " +
        month_name +
        " " +
        day
      );
    }
  }

  function extract_next_yoga(obj) {
    if (obj !== null) {
      let yoga_name = obj.next.Yoga.split(",")[0];
      let next_end_time = obj["next"]["Ends on"]["time"];
      let next_end_date = obj["next"]["Ends on"]["date"].split("-");
      let month_name = monthNames[next_end_date[1] - 1];
      let day = next_end_date[0];
      return (
        yoga_name +
        " " +
        "upto" +
        " " +
        next_end_time +
        "," +
        " " +
        month_name +
        " " +
        day
      );
    }
  }

  function extract_next_karan(obj) {
    if (obj !== null) {
      let karan_name = obj.next.Karan.split(",")[0];
      let next_end_time = obj["next"]["Ends on"]["time"];
      let next_end_date = obj["next"]["Ends on"]["date"].split("-");
      let month_name = monthNames[next_end_date[1] - 1];
      let day = next_end_date[0];
      return (
        karan_name +
        " " +
        "upto" +
        " " +
        next_end_time +
        "," +
        " " +
        month_name +
        " " +
        day
      );
    }
  }

  function extract_next_next_karan(obj) {
    if (obj !== null) {
      let karan_name = obj.next_next.Karan.split(",")[0];
      let next_end_time = obj["next_next"]["Ends on"]["time"];
      let next_end_date = obj["next_next"]["Ends on"]["date"].split("-");
      let month_name = monthNames[next_end_date[1] - 1];
      let day = next_end_date[0];
      return (
        karan_name +
        " " +
        "upto" +
        " " +
        next_end_time +
        "," +
        " " +
        month_name +
        " " +
        day
      );
    }
  }

  function extract_auspicious_string(obj, str) {
    if (obj !== null) {
      if (str === "Nishita") {
        const times = [];
        for (const key in obj) {
          for (const inner in obj[key]) {
            let start_date = obj[key][inner].split(",")[0].split("/");
            let month_name = monthNames[start_date[1] - 1];
            let day = start_date[0];
            times.push(remove_character(obj[key][inner], 5));
            times.push(month_name);
            times.push(day);
          }
        }
        return (
          times[0] +
          "," +
          " " +
          times[1] +
          " " +
          times[2] +
          " " +
          "to" +
          " " +
          times[3] +
          "," +
          " " +
          times[4] +
          " " +
          times[5]
        );
      } else {
        const times = [];
        for (const key in obj) {
          for (const inner in obj[key]) {
            times.push(remove_character(obj[key][inner], 5));
          }
        }
        if (str === "Sandhya") {
          return times;
        } else {
          return times[0] + " " + "to" + " " + times[1];
        }
      }
    }
  }

  function extract_ayan(obj) {
    if (obj !== null) {
      const arr = [];
      for (const key in obj) {
        arr.push(obj[key]);
      }
      return arr;
    }
  }

  function extract_image_link(obj) {
    if (obj !== null) {
      let tithi_name = obj.current.Tithi;
      let imglink = "assets/Moons/";
      tithi_name = tithi_name + ".png";
      return imglink + tithi_name;
    }
  }

  function extract_nakshtra_string(obj) {
    if (obj !== null) {
      let end_time = obj["Nakshtra at Sunrise"]["Nakshtra End Time"].split(" ");
      end_time[4] = end_time[4].substring(0, 5) + " " + end_time[5];
      return (
        obj["Nakshtra at Sunrise"]["Nakshtra Name"] + " upto " + end_time[4]
      );
    }
  }

  function extract_abhijit_string(obj) {
    if (obj !== null) {
      return obj.start + " to " + obj.end;
    }
  }

  function extract_trikaal(obj) {
    let times = [];
    if (obj !== null) {
      for (const key in obj) {
        for (const inner in obj[key]) {
          times.push(obj[key][inner]);
        }
      }
    }
    return times;
  }

  const contextType = useContext(GlobalContext);
  let value = contextType.panchangDate || new Date();
  let place = contextType.placeobserved || "Hyderabad";
  let [sunriseTime, setsunriseTime] = useState(null);
  let [sunsetTime, setsunsetTime] = useState(null);
  let [moonriseTime, setmoonriseTime] = useState(null);
  let [moonsetTime, setmoonsetTime] = useState(null);
  let [tithiobject, settithiobject] = useState(null);
  let [yogaobject, setyogaobject] = useState(null);
  let [karanobject, setkaranobject] = useState(null);
  let [weekday, setweekday] = useState(null);
  let [kulikavalue, setkulikavalue] = useState(null);
  let [amritkaalvalue, setamritkaalvalue] = useState(null);
  let [brahmavalue, setbrahmavalue] = useState(null);
  let [nishitavalue, setnishitavalue] = useState(null);
  let [vijayvalue, setvijayvalue] = useState(null);
  let [sandhyavalue, setsandhyavalue] = useState(null);
  let [ayanavalue, setayanavalue] = useState(null);
  let [dayduration, setdayduration] = useState(null);
  let [nightduration, setnightduration] = useState(null);
  let [varjyavalue, setvarjyavalue] = useState(null);
  let [naksvalue, setnaksvalue] = useState(null);
  let [abhijitvalue, setabhijitvalue] = useState(null);
  let [show, setshow] = useState(false);
  let flag = "";
  let [ritu, setritu] = useState(null);
  let [sunsign, setsunsign] = useState(null);
  let [moonsign, setmoonsign] = useState(null);
  let [samvatsara, setsamvatsara] = useState(null);
  let [trikaalvalue, settrikaalvalue] = useState(null);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    (async () => {
      let y = "";
      let m = "";
      let d = "";

      let lat = "",
        long = "";
      let offset = "";
      try {
        y = value.getFullYear();
        m = value.getMonth() + 1;
        d = value.getDate();
      } catch (err) {
        d = moment(value).format("DD");
        m = moment(value).format("MM");
        y = moment(value).format("YYYY");
      }

      Object.entries(cities[0]).forEach(([key, value]) => {
        if (key === place) {
          long = Math.round(value.longitude).toFixed(2);
          lat = Math.round(value.latitude).toFixed(2);
        }
      });
      offset = Math.round(long * 4 * 60);
      let holistic_api = axios.create({
        baseURL: "http://api.omparashar.com/panchang/dailypanchang/",
      });
      let params =
        "?year=" +
        y +
        "&month=" +
        m +
        "&day=" +
        d +
        "&lat=" +
        lat +
        "&long=" +
        long +
        "&offset=" +
        offset +
        "&place=" +
        place;

      const sunriseresult = await holistic_api.get(`/sunrise${params}`);
      const sunsetresult = await holistic_api.get(`/sunset${params}`);
      const moonriseresult = await holistic_api.get(`/moonrise${params}`);
      const moonsetresult = await holistic_api.get(`/moonset${params}`);
      const tithiresult = await holistic_api.get(`/tithi${params}`);
      const yogaresult = await holistic_api.get(`/yoga${params}`);
      const karanresult = await holistic_api.get(`/karan${params}`);
      const weekdayresult = await holistic_api.get(`/dayoftheweek${params}`);
      const kulikaresult = await holistic_api.get(`/kulika${params}`);
      const amritkaalresult = await holistic_api.get(`/amritkaal${params}`);
      const brahma = await holistic_api.get(`/brahmamuhurat${params}`);
      const nishita = await holistic_api.get(`/nishitamuhurat${params}`);
      const vijay = await holistic_api.get(`/vijaymuhurat${params}`);
      const sandhya = await holistic_api.get(`/sandhya${params}`);
      const ayana = await holistic_api.get(`/ayana${params}`);
      const day = await holistic_api.get(`/dayduration${params}`);
      const night = await holistic_api.get(`/nightduration${params}`);
      const varjya = await holistic_api.get(`/varjya${params}`);
      const naks = await holistic_api.get(`/nakshtra${params}`);
      const abhijit = await holistic_api.get(`/abhijitmuhurat${params}`);
      const ritu = await holistic_api.get(`/ritu${params}`);
      const sunsign = await holistic_api.get(`/sunsign${params}`);
      const moonsign = await holistic_api.get(`/moonsign${params}`);
      const samvatsara = await holistic_api.get(`/samvatsara${params}`);
      const trikaal = await holistic_api.get(`/trikaal${params}`);
      setsunriseTime(sunriseresult.data);
      setsunsetTime(sunsetresult.data);
      setmoonriseTime(moonriseresult.data);
      setmoonsetTime(moonsetresult.data);
      settithiobject(tithiresult.data);
      setyogaobject(yogaresult.data);
      setkaranobject(karanresult.data);
      setweekday(weekdayresult.data);
      setkulikavalue(kulikaresult.data);
      setamritkaalvalue(amritkaalresult.data);
      setbrahmavalue(brahma.data);
      setnishitavalue(nishita.data);
      setvijayvalue(vijay.data);
      setsandhyavalue(sandhya.data);
      setayanavalue(ayana.data);
      setdayduration(day.data);
      setnightduration(night.data);
      setvarjyavalue(varjya.data);
      setnaksvalue(naks.data);
      setabhijitvalue(abhijit.data);
      setritu(ritu.data);
      setsunsign(sunsign.data.current);
      setmoonsign(moonsign.data.current);
      setsamvatsara(samvatsara.data);
      settrikaalvalue(trikaal.data);
    })();
  }, [contextType.panchangDate, place]);

  let moonriseTimedisplay = remove_character(moonriseTime, 5);
  let sunriseTimedisplay = remove_character(sunriseTime, 5);
  let sunsetTimedisplay = remove_character(sunsetTime, 5);
  let moonsetTimedisplay = remove_character(moonsetTime, 5);
  let tithicurrent = extract_current_tithi(tithiobject);
  let yogacurrent = extract_current_yoga(yogaobject);
  let karancurrent = extract_current_karan(karanobject);
  let tithinext = extract_next_tithi(tithiobject);
  let yoganext = extract_next_yoga(yogaobject);
  let karannext = extract_next_karan(karanobject);
  let karan_next_next = extract_next_next_karan(karanobject);
  let kulika = extract_auspicious_string(kulikavalue, "");
  let amritkaal = extract_auspicious_string(amritkaalvalue, "");
  let brahma = extract_auspicious_string(brahmavalue, "");
  let nishita = extract_auspicious_string(nishitavalue, "Nishita");
  let vijay = extract_auspicious_string(vijayvalue);
  let sandhya = extract_auspicious_string(sandhyavalue, "Sandhya");
  let ayan = extract_ayan(ayanavalue);

  let varjya = extract_auspicious_string(varjyavalue, "Nishita");
  let nakshtra = extract_nakshtra_string(naksvalue);
  let abhijit = extract_abhijit_string(abhijitvalue);
  let trikaal = extract_trikaal(trikaalvalue);
  let dkayan = "";
  let vdayan = "";

  if (typeof ayan !== "undefined") {
    dkayan = ayan[0];
    vdayan = ayan[0];
  }

  let psandhya = "";
  let ssandhya = "";
  if (typeof sandhya !== "undefined") {
    psandhya = sandhya[0] + " " + "to" + " " + sandhya[1];
    ssandhya = sandhya[2] + " " + "to" + " " + sandhya[3];
  }

  let rkaal = "";
  let ykaal = "";

  if (typeof trikaal !== "undefined") {
    rkaal = trikaal[0] + " " + "to" + " " + trikaal[1];
    ykaal = trikaal[4] + " " + "to" + " " + trikaal[5];
  }

  let tithiname_1 = "";
  let tithiname_2 = "";
  let imgsrc = null;
  let link = "";
  imgsrc = extract_image_link(tithiobject);
  if (typeof imgsrc !== "undefined") {
    link = imgsrc;
  }

  if (tithiobject !== null) {
    tithiname_1 = tithiobject["current"]["Tithi"].split(",")[0];
    tithiname_2 = tithiobject["current"]["Tithi"].split(",")[1];
  }
  let day = "";
  let month = "";
  let year = "";
  let month_string = "";

  if (value !== null) {
    day = moment(value).format("DD");
    month = monthNames[moment(value).format("MM") - 1];
    year = moment(value).format("YYYY");
    month_string = month + ", " + year;
  }

  const handleCalendar = () => {
    setshow(!show);
    //  setFlag("datesideform")
  };

  const handleToday = () => {
    this.context.set_Panchang_Date(new Date(), contextType.placeobserved);
  };

  const nextDay = () => {
    this.context.set_Panchang_Date(
      contextType.panchangDate,
      contextType.placeobserved
    );
  };

  const prevDay = () => {
    this.context.set_Panchang_Date(
      contextType.panchangDate,
      contextType.placeobserved
    );
  };

  return (
    <>
      <DashboardTopBar />
      <DashboardSideBar />

      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}

            {/* <!-- end page title -->  */}

            <div className="row" style={{ paddingTop: "2px" }}>
              <div className="col-md-12 col-xl-12">
                <div
                  className="card-box"
                  style={{
                    padding: "10px",
                    backgroundImage: `url(${background})`,
                    width: "100%",
                    height: "75%",
                    marginBottom: "0px",
                    boxShadow: "10px 10px 10px #333",
                  }}
                >
                  <div
                    className="card"
                    style={{ background: "none", fontSize: "0.9rem" }}
                  >
                    <div className="card-body-holistic">
                      <div className="dpPHeaderLeftContent">
                        <img
                          className="dpPHeaderImage"
                          src={link}
                          alt="Thithi"
                        />
                        <div className="dpPHeaderLeftTitle">
                          <u>{tithiname_1}</u>
                        </div>
                        <div className="dpPHeaderLeftSubTitle">
                          <u>{tithiname_2}</u>
                        </div>
                      </div>
                      <div className="dpPHeaderRightContent">
                        <div className="dpPHeaderRightTitle">
                          <u>
                            {day} {month_string}
                          </u>
                          <i
                            onClick={handleCalendar}
                            style={{
                              fontSize: "20px",
                              marginLeft: "4%",
                              cursor: "pointer",
                            }}
                            className="dpPHeaderRightTitle fa"
                          >
                            &#xf073;
                          </i>
                        </div>
                        <div className="dpPHeaderRightTitle">
                          <u>{place}</u>{" "}
                          <img
                            onClick={handleCalendar}
                            src={require("../assets/img/map.png")}
                            alt="Map"
                            className="MapIcon"
                          />
                        </div>
                      </div>
                      <div className="dpPHeaderCenterContent">
                        <div className="dpPHeaderCenterTitle">
                          <u>Daily Panchang</u>
                        </div>
                        <div className="button-list">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm waves-effect waves-light"
                          >
                            Prev Day
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm waves-effect waves-light"
                          >
                            Today
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm waves-effect waves-light"
                          >
                            Next Day
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end row --> */}

            <div className="row">
              <div className="col-12" style={{"max-height":"550px", "overflowY":"scroll"}}>
                <div className="card-box" style={{ paddingTop: "2px" }}>
                
                  <table
                    className="tablesaw table mb-0 tablesaw-stack panchangtable"
                    id="tablesaw-802"
                    style={{ border: "none", borderTop: "none" }}
                  >
                    <tbody>
                      <tr className="table_head_tr" style={{}}>
                        <th
                          scope="col"
                          colSpan="5"
                          className="sectionheader"
                          style={{ borderTop: "none" }}
                        >
                          Sun and Moon
                        </th>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Sun Rise</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">
                            <img
                              src={require("../assets/img/sunrise.png")}
                              alt="Sunrise"
                              className="TableIcon"
                            />
                            {sunriseTimedisplay}
                          </span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">Sun Set</p>{" "}
                        </td>
                        <td className="td4">
                          <span className="tablevalue">
                            <img
                              src={require("../assets/img/sunset.png")}
                              alt="Sunset"
                              className="TableIcon"
                            />
                            {sunsetTimedisplay}
                          </span>
                        </td>
                      </tr>
                      <tr className="lastrow">
                        <td className="td1">
                          <p className="tablelabel">Moon Rise</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">
                            <img
                              src={require("../assets/img/moonrise.png")}
                              alt="MoonRise"
                              className="TableIcon"
                            />
                            {moonriseTimedisplay}
                          </span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">Moon Set</p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">
                            <img
                              src={require("../assets/img/moonset.png")}
                              alt="Moonset"
                              className="TableIcon"
                            />
                            {moonsetTimedisplay}
                          </span>
                        </td>
                      </tr>

                      <tr className="table_head_tr" style={{}}>
                        <th scope="col" colSpan="5" className="sectionheader">
                          Panchang
                        </th>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Tithi</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{tithicurrent}</span>
                          <br/> <span className="tablevalue">{tithinext}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">Karan</p>{" "}
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{karancurrent}</span>
                          <br/> <span className="tablevalue">{karannext}</span>
                          <br/>  <span className="tablevalue">{karan_next_next}</span>
                        </td>
                      </tr>

                     
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Yoga</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{yogacurrent}</span>
                          <br/> <span className="tablevalue">{yoganext}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel"> Weekday</p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{weekday}</span>
                        </td>
                      </tr>
                     
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Nakshtra</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{nakshtra}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel"></p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue"></span>
                        </td>
                      </tr>
                      <tr className="table_head_tr" style={{}}>
                        <th scope="col" colSpan="5" className="sectionheader">
                          Samvatsara
                        </th>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Shaka Samvatsara</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{samvatsara}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel"></p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue"></span>
                        </td>
                      </tr>
                      <tr className="table_head_tr" style={{}}>
                        <th scope="col" colSpan="5" className="sectionheader">
                          Rashi
                        </th>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Sunsign</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{sunsign}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">MoonSign</p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{moonsign}</span>
                        </td>
                      </tr>
                      <tr className="table_head_tr" style={{}}>
                        <th scope="col" colSpan="5" className="sectionheader">
                          Ritu and Ayan
                        </th>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Drik Ayan</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{dkayan}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">Day Duration</p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{dayduration}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Vedic Ayan</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{vdayan}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">Night Duration</p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{nightduration}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Ritu</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{ritu}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel"></p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{}</span>
                        </td>
                      </tr>

                      <tr className="table_head_tr" style={{}}>
                        <th scope="col" colSpan="5" className="sectionheader">
                          Auspicious Timings
                        </th>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Amrit Kal</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{amritkaal}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">Abhijit Muhurat</p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{abhijit}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Brahma Muhurat</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{brahma}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">Nishita Muhurat</p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{nishita}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Pratha Sandhya</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{psandhya}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">Sayan Sandhya</p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{ssandhya}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Vijaya Muhurat</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{vijay}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel"></p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{}</span>
                        </td>
                      </tr>

                      <tr className="table_head_tr" style={{}}>
                        <th scope="col" colSpan="5" className="sectionheader">
                          Inauspicious Timings
                        </th>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Kulika</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{kulika}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">Varjya Kaal</p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{varjya}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="td1">
                          <p className="tablelabel">Raahu Kaal</p>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">{rkaal}</span>
                        </td>
                        <td className="td3">
                          <p className="tablelabel">Yamaganda Kaal</p>
                        </td>
                        <td className="td4">
                          <span className="tablevalue">{ykaal}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                 

                  <Modal show={show} onHide={handleCalendar} centered>
                    <Modal.Header
                      closeButton
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Modal.Title
                        style={{ color: "rgb(3, 66, 141)", fontWeight: "bold" }}
                      >
                        Please Update Date and Location
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Sideform
                        mode={"panchangView"}
                        close={handleCalendar}
                        date={value}
                        place={place}
                        flag={flag}
                      />
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};

export default Dash_Panchang;
