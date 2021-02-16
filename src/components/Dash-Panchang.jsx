/* eslint-disable no-useless-concat */
import React, { useState, useEffect, useContext } from "react";
import "./dash-panchang.css";

import "../d3/Holistic.css";
import { GlobalContext } from "../mycontext";
import * as cities from "./cities.json";
import axios from "axios";
import background from "../assets/img/bg.jpg";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Sideform from "../SideComponents/sideform";

const setTimeFormat = (timestring) => {
  timestring = timestring.split(":")
  var hours = timestring[0]
  var minutes = timestring[1]
  hours = hours % 12;
  hours = hours ? hours : 12;
  // hours = hours < 10 ? hours.substring(1): hours; 
  return hours + ":" + minutes + " "
}

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
      return setTimeFormat(part1) + part2;
    }
  }

  function extract_current_tithi(obj) {
    if (obj !== null) {
      let tithi_name = obj.current.Tithi.split(",")[0];
      let current_tithi_end_time = setTimeFormat(obj["current"]["Ends on"]["time"]);
      return tithi_name + " " + "upto" + " " + current_tithi_end_time;
    }
  }

  function extract_current_yoga(obj) {
    if (obj !== null) {
      let yoga_name = obj.current.Yoga.split(",")[0];
      let current_yoga_end_time = setTimeFormat(obj["current"]["Ends on"]["time"]);
      return yoga_name + " " + "upto" + " " + current_yoga_end_time;
    }
  }

  function extract_current_karan(obj) {
    if (obj !== null) {
      let karan_name = obj.current.Karan.split(",")[0];
      let next_end_time = setTimeFormat(obj["current"]["Ends on"]["time"]);
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
      let next_end_time = setTimeFormat(obj["next"]["Ends on"]["time"]);
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
      let next_end_time = setTimeFormat(obj["next"]["Ends on"]["time"]);
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
      let next_end_time = setTimeFormat(obj["next_next"]["Ends on"]["time"]);
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
          setTimeFormat(times[0]) +
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
          return setTimeFormat(times[0]) + " " + "to" + " " + setTimeFormat(times[1]);
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
          times.push(setTimeFormat(obj[key][inner]));
        }
      }
    }
    return times;
  }

  function extract_ascendant_table(obj) {
    let rashi_mapper=
    {
      "Aries":"assets/Rashi/aries.png",
      "Cancer":"assets/Rashi/cancer.png",
      "Taurus":"assets/Rashi/taurus.png",
      "Sagittarius":"assets/Rashi/sagittarius.png",
      "Leo":"assets/Rashi/leo.png",
      "Scorpio":"assets/Rashi/scorpio.png",
      "Aquarius":"assets/Rashi/aquarius.png",
      "Virgo":"assets/Rashi/virgo.png",
      "Capricorn":"assets/Rashi/capricorn.png",
      "Pisces":"assets/Rashi/pisces.png",
      "Gemini":"assets/Rashi/gemini.png",
      "Libra":"assets/Rashi/libra.png"
    }

    let ascendants = [];
    if (obj !== null) {
      for (const key in obj) {
        let times = [];
        for (const inner in obj[key]) {
          if(inner==="start_time" || inner ==='end_time'){
          times.push(setTimeFormat(obj[key][inner]));
          }
          else{
            times.push(obj[key][inner])
          }
        }
        times.push(rashi_mapper[obj[key]["Ascendant"]])
        ascendants.push(times);
      }
    }
    return ascendants;
  }

  function extract_madhyahna(obj) {
    if (obj !== null) {
      let obj_str = obj.split(",");
      let date_madhyahna = obj_str[0].split("/");
      let month_name = monthNames[date_madhyahna[1] - 1];
      let day = date_madhyahna[0];
      let time_split = obj_str[1].split(":");
      let period = time_split[2].split(" ");
      return time_split[0] + ":" + time_split[1] + " " + period[1] + ", " + month_name + " " + day;
    }
  }

  function extract_ascendant_sunrise(obj) {
    if (obj !== null) {
      let rashi_name = obj["Rashi"];
      let dms = obj["D_M_S"];
      return dms[0] + "\u00b0" + " " + rashi_name + " " + dms[1] + "' " + dms[2] + '"';
    }
  }
  function extract_duration(obj) {
    if (obj !== null) {
      let duration = obj[0];
      return duration[0] + " hours, " + duration[1] + " minutes, " + duration[2] + " seconds";
    }
  }

  function extract_naktable(obj) {
    if(obj !== null){
        let nak=[]
        for(var key in obj){
          for(var inner in (obj[key]).milestones){
                  var datetime = ((obj[key]).milestones)[inner].event_datetime.split(" ")
                  var desc = ((obj[key]).milestones)[inner].desc
                  desc= desc.substr(desc.indexOf(" ")+1)
                   desc= desc.substr(desc.indexOf(" ")+1)
                  nak.push(desc + " " + "upto" + " " + setTimeFormat(datetime[4]) + ", " + datetime[2] + " " + datetime[1])
          }
        }
      return nak;
    }
  }

  function extract_cho(obj) {
    let cho=[]
    let months={"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep","10":"Oct","11":"Nov","12":"Dec"}
    if(obj!==null){
          for(var inner in obj["day_time"]){
            cho.push(obj["day_time"][inner].chogadiya_name)
            cho.push(obj["day_time"][inner].quality)
            cho.push("upto " + setTimeFormat(obj["day_time"][inner].end_time))
        }
        for(var inner2 in obj["night_time"]){
            cho.push(obj["night_time"][inner2].chogadiya_name)
            cho.push(obj["night_time"][inner2].quality)
            var date = (obj["night_time"][inner2].end_date).split("-")
            cho.push("upto " +setTimeFormat( obj["night_time"][inner2].end_time) + ", " + months[date[1]] + " " + date[0])
        }
        for(var i in cho){
          if(cho[i]==="Auspicious"){
            cho[i]=<span style={{"color":"green", fontSize:"0.7em"}}> (Auspicious)</span>
          }
          else if(cho[i] === "Inauspicious"){
            cho[i]=<span style={{"color":"red", fontSize:"0.7em"}}> (Inauspicious)</span>
          }
          else if(cho[i] === "Neutral"){
            cho[i]=<span style={{"color":"#03428D", fontSize:"0.7em"}}> (Neutral)</span>
          }
          }
        }
        return cho;
    }

const Dash_Panchang = () => {

  const contextType = useContext(GlobalContext);
  let value = contextType.panchangDate;
  let place = contextType.placeobserved || "Hyderabad";
  let [loading,setLoading] = useState(true)
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
  let [ascendanttable, setascendanttable] = useState(null);
  let [madhyahna, setmadhyahna] = useState(null);
  let [suryanakshtra, setsuryanakshtra] = useState(null);
  let [ascendantsunrise, setascendantsunrise] = useState(null);
  let [nakshtratable, setnakshtratable] = useState(null);
  let [chogadiya, setchogadiya] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    (async () => {
      setLoading(true)
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

      try{
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
      const ascendant = await holistic_api.get(`/ascendanttable${params}`);
      const madhyahnatime = await holistic_api.get(`/madhyahna${params}`);
      const suryanak = await holistic_api.get(`/suryanakshtra${params}`);
      const ascendantatsunrise = await holistic_api.get(`/ascendantsunrise${params}`);
      const naktable = await holistic_api.get(`/nakshtratable${params}`);
      const gaurichogadiya = await holistic_api.get(`/gaurichogadiya${params}`);
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
      setascendanttable(ascendant.data);
      setmadhyahna(madhyahnatime.data);
      setsuryanakshtra(suryanak.data);
      setascendantsunrise(ascendantatsunrise.data);
      setnakshtratable(naktable.data);
      setchogadiya(gaurichogadiya.data);
      setLoading(false)
      }
      catch(e){
        console.log(e)
      }
    })();
  }, [value, place]);
  console.log('rendering')
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
  let asc = extract_ascendant_table(ascendanttable);
  let madhya = extract_madhyahna(madhyahna);
  let ascendantsun = extract_ascendant_sunrise(ascendantsunrise);
  let daytime = extract_duration(dayduration);
  let nighttime = extract_duration(nightduration);
  let varjya = extract_auspicious_string(varjyavalue, "Nishita");
  let nakshtra = extract_nakshtra_string(naksvalue);
  let abhijit = extract_abhijit_string(abhijitvalue);
  let trikaal = extract_trikaal(trikaalvalue);
  let naks = extract_naktable(nakshtratable);
  let cho = extract_cho(chogadiya)
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
    contextType.panchang_date_change('today');
  };

  const nextDay = () => {
    contextType.panchang_date_change('next');
  };

  const prevDay = () => {
   contextType.panchang_date_change('previous');
  };

  const AscendantTableHTML = () => {
    if (asc.length > 0) {
      return (
        <>
          <tr className="table_head_tr" style={{}}>
            <th scope="col" colSpan="5" className="sectionheader">
              Ascendant Table
    </th>
          </tr>
          <tr>
            <td className="td1">
              <img
                              src={asc[0][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[0][0]} 
              </span>
            </td>
            <td className="td2">
              <span className="tablevalue">{"upto " + asc[0][2]}</span>
            </td>
            <td className="td3">
              <img
                              src={asc[7][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[7][0]} </span>
            </td>
            <td className="td">
              <span className="tablevalue">{"upto " + asc[7][2]}</span>
            </td>
          </tr>
          <tr>
            <td className="td1">
              <img
                              src={asc[1][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[1][0]} </span>
            </td>
            <td className="td2">
              <span className="tablevalue">{"upto " + asc[1][2]}</span>
            </td>
            <td className="td3">
              <img
                              src={asc[8][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[8][0]}</span>
            </td>
            <td className="td4">
              <span className="tablevalue">{"upto " + asc[8][2]}</span>
            </td>
          </tr>
          <tr>
            <td className="td1">
              <img
                              src={asc[2][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[2][0]} </span>
            </td>
            <td className="td2">
              <span className="tablevalue">{"upto " + asc[2][2]}</span>
            </td>
            <td className="td3">
              <img
                              src={asc[9][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[9][0]} </span>
            </td>
            <td className="td4">
              <span className="tablevalue">{"upto " + asc[9][2]}</span>
            </td>
          </tr>
          <tr>
            <td className="td1">
              <img
                              src={asc[3][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[3][0]} </span>
            </td>
            <td className="td2">
              <span className="tablevalue">{"upto " + asc[3][2]}</span>
            </td>
            <td className="td3">
              <img
                              src={asc[10][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[10][0]} </span>
            </td>
            <td className="td4">
              <span className="tablevalue">{"upto " + asc[10][2]}</span>
            </td>
          </tr>
          <tr>
            <td className="td1">
              <img
                              src={asc[4][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[4][0]} </span>
            </td>
            <td className="td2">
              <span className="tablevalue">{"upto " + asc[4][2]}</span>
            </td>
            <td className="td3">
              <img
                              src={asc[11][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[11][0]} </span>
            </td>
            <td className="td4">
              <span className="tablevalue">{"upto " + asc[11][2]}</span>
            </td>
          </tr>
          <tr>
            <td className="td1">
              <img
                              src={asc[5][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[5][0]} </span>
            </td>
            <td className="td2">
              <span className="tablevalue">{"upto " + asc[5][2]}</span>
            </td>
            <td className="td3">
              <img
                              src={asc[12][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[12][0]} </span>
            </td>
            <td className="td4">
              <span className="tablevalue">{"upto " + asc[12][2]}</span>
            </td>
          </tr>
          <tr>
            <td className="td1">
              <img
                              src={asc[6][3]}
                              alt="Rashi"
                              className="RashiIcon"
              />
              <span className="tablelabel">{asc[6][0]} </span>
            </td>
            <td className="td2">
              <span className="tablevalue">{"upto " + asc[6][2]}</span>
            </td>
          </tr>
        </>
      )
    }
    else {
      return null;
    }
  }

  const InauspiciousTimingsHTML = () => {
    return (
      <>
        <tr className="table_head_tr" style={{}}>
          <th scope="col" colSpan="5" className="sectionheader">
            Inauspicious Timings
   </th>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Kulika</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{kulika}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Varjya Kaal</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{varjya}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Raahu Kaal</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{rkaal}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Yamaganda Kaal</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{ykaal}</span>
          </td>
        </tr>
      </>
    )
  }

  const AuspiciousTimingsHTML = () => {
    return (
      <>
        <tr className="table_head_tr" style={{}}>
          <th scope="col" colSpan="5" className="sectionheader">
            Auspicious Timings
  </th>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Amrit Kal</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{amritkaal}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Abhijit Muhurat</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{abhijit}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Brahma Muhurat</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{brahma}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Nishita Muhurat</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{nishita}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Pratha Sandhya</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{psandhya}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Sayan Sandhya</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{ssandhya}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Vijaya Muhurat</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{vijay}</span>
          </td>
          <td className="td3">
            <span className="tablelabel"></span>
          </td>
          <td className="td4">
            <span className="tablevalue">{ }</span>
          </td>
        </tr>

      </>
    )
  }

  const RituAndAyanHTML = () => {
    return (
      <>
        <tr className="table_head_tr" style={{}}>
          <th scope="col" colSpan="5" className="sectionheader">
            Ritu and Ayan
   </th>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Drik Ayan</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{dkayan}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Day Duration</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{daytime}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Vedic Ayan</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{vdayan}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Night Duration</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{nighttime}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Ritu</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{ritu}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Madhyahna</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{madhya}</span>
          </td>
        </tr>
      </>
    )
  }

  const RashiHTML = () => {
    return (
      <>
        <tr className="table_head_tr" style={{}}>
          <th scope="col" colSpan="5" className="sectionheader">
            Rashi
   </th>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Sunsign</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{sunsign}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">MoonSign</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{moonsign}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Surya Nakshtra</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{suryanakshtra}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Ascendant</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{ascendantsun}</span>
          </td>
        </tr>
      </>
    )
  }

  const SamvatsaraHTML = () => {
    return (
      <>
        <tr className="table_head_tr" style={{}}>
          <th scope="col" colSpan="5" className="sectionheader">
            Samvatsara
   </th>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Shaka Samvatsara</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{samvatsara}</span>
          </td>
          <td className="td3">
            <span className="tablelabel"></span>
          </td>
          <td className="td4">
            <span className="tablevalue"></span>
          </td>
        </tr>
      </>
    )
  }

  const PanchangHTML = () => {
    return (
      <>
        <tr className="table_head_tr" style={{}}>
          <th scope="col" colSpan="5" className="sectionheader">
            Panchang
          </th>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Tithi</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{tithicurrent}</span>
            <br></br><span className="tablevalue">{tithinext}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Karan</span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue">{karancurrent}</span>
            <br></br><span className="tablevalue">{karannext}</span>
            <br></br><span className="tablevalue">{karan_next_next}</span>
          </td>
        </tr>
        
      



        <tr>
          <td className="td1">
            <span className="tablelabel">Yoga</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{yogacurrent}</span>
            <br /> <span className="tablevalue">{yoganext}</span>
          </td>
          <td className="td3">
            <span className="tablelabel"> Weekday</span>
          </td>
          <td className="td4">
            <span className="tablevalue">{weekday}</span>
          </td>
        </tr>

        <tr>
          <td className="td1">
            <span className="tablelabel">Nakshtra</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{nakshtra}</span>
          </td>
          <td className="td3">
            <span className="tablelabel"></span>
          </td>
          <td className="td4">
            <span className="tablevalue"></span>
          </td>
        </tr>
      </>
    )
  }

  const NakshtraHTML = () => {
    if (typeof naks!== 'undefined') {
    return (
      <>
        <tr className="table_head_tr" style={{}}>
          <th scope="col" colSpan="5" className="sectionheader">
            Nakshtra
          </th>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">Nakshtra</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{naks[0]}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">Nakshtra Pada</span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue">{naks[1]}</span>
            <br /> <span className="tablevalue">{naks[2]}</span>
            <br /> <span className="tablevalue">{naks[3]}</span>
            <br /> <span className="tablevalue">{naks[4]}</span>
          </td>
        </tr>
      </>
    )
    }
    else{
      return null;
    }
  }

  const ChoghadiyaHTML = () => {
    if (typeof cho!== 'undefined') {
    return (
      <>
        <tr className="table_head_tr">
          <th scope="col" colSpan="5" className="sectionheader">
            Choghadiya
          </th>
        </tr>
        <tr>
          <td className="td1 td1cho">
            <span className="tablelabel">
                            <img
                              src={require("../assets/img/sunrise.png")}
                              alt="Sunrise"
                              className="TableIconSun"
                            /></span>
          </td>
          <td className="td2">
            <span className="tablevalue td2cho">Day Choghadiya</span>
          </td>
          <td className="td3 td3cho">
            <span className="tablelabel"><img
                              src={require("../assets/img/moonrise.png")}
                              alt="MoonRise"
                              className="TableIconMoon"
                            /></span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue td4cho">Night Choghadiya</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">{cho[0]}{cho[1]}</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{cho[2]}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">{cho[24]} {cho[25]}</span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue">{cho[26]}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">{cho[3]}{cho[4]}</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{cho[5]}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">{cho[27]} {cho[28]}</span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue">{cho[29]}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">{cho[6]}{cho[7]}</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{cho[8]}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">{cho[30]} {cho[31]}</span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue">{cho[32]}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">{cho[9]}{cho[10]}</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{cho[11]}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">{cho[33]} {cho[34]}</span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue">{cho[35]}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">{cho[12]}{cho[13]}</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{cho[14]}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">{cho[36]} {cho[37]}</span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue">{cho[38]}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">{cho[15]}{cho[16]}</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{cho[17]}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">{cho[39]} {cho[40]}</span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue">{cho[41]}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">{cho[18]}{cho[19]}</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{cho[20]}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">{cho[42]} {cho[43]}</span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue">{cho[44]}</span>
          </td>
        </tr>
        <tr>
          <td className="td1">
            <span className="tablelabel">{cho[21]}{cho[22]}</span>
          </td>
          <td className="td2">
            <span className="tablevalue">{cho[23]}</span>
          </td>
          <td className="td3">
            <span className="tablelabel">{cho[45]} {cho[46]}</span>{" "}
          </td>
          <td className="td4">
            <span className="tablevalue">{cho[47]}</span>
          </td>
        </tr>
      </>
    )
    }
    else{
      return null;
    }
  }



  return (
    <>
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
                            onClick={()=>prevDay()}
                          >
                            Prev Day
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm waves-effect waves-light"
                            onClick={()=>handleToday()}
                          >
                            Today
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm waves-effect waves-light"
                            onClick={()=>nextDay()}
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
              <div className="col-12" style={{ maxHeight: "550px", "overflowY": "scroll" }}>
                <div className="card-box" style={{ paddingTop: "2px" }}>
                  {loading ? (
                      <div style={{minHeight:"700px"}}>
                            <div id="loader">
                            <div class="planet-top"></div>
                            <div class="planet-bottom"></div>
                            <div class="ring"></div>
                          </div>
                      </div>
                  )
                  :(
                  <table
                    className="tablesaw table mb-0 tablesaw-stack"
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
                          <span className="tablelabel">Sun Rise</span>
                        </td>
                        <td className="td2">
                          <span className="tablevalue">
                            <img
                              src={require("../assets/img/sunrise.png")}
                              alt="Sunrise"
                              className="TableIcon"
                            />
                            <b>{sunriseTimedisplay}</b>
                          </span>
                        </td>
                        <td className="td3">
                          <span className="tablelabel">Sun Set</span>{" "}
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
                          <span className="tablelabel">Moon Rise</span>
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
                          <span className="tablelabel">Moon Set</span>
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



                      <PanchangHTML />
                      <SamvatsaraHTML />
                      <RashiHTML />
                      <NakshtraHTML />
                      <RituAndAyanHTML />
                      <AuspiciousTimingsHTML />
                      <InauspiciousTimingsHTML />
                      <AscendantTableHTML />
                      <ChoghadiyaHTML/>
                    </tbody>
                  </table>
                )}

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
    </>
  );
};

export default Dash_Panchang;
