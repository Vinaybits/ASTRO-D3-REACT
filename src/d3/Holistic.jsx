import React, { useState, useEffect, useContext } from "react";
import './Holistic.css'
import { GlobalContext } from '../mycontext';
import * as cities from "../components/cities.json";
import axios from "axios";
import background from "./HolisticAssets/bg.jpg";
import moment from "moment";

const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];



function remove_character(str, char_pos) 
 {
  if(str!== null){
  str=str.split(",")[1]
  let part1 = str.substring(0, char_pos);
  let part2 = str.substring(char_pos + 3, str.length);
  return (part1 + part2);
  }
  else{

  }
 }

 function extract_current_tithi(obj){
     if(obj!==null){
    let tithi_name = obj.current.Tithi.split(",")[0];
    let current_tithi_end_time = obj["current"]["Ends on"]["time"];
    return tithi_name  +" "+"upto" +" "+current_tithi_end_time;
    }
 }

  function extract_current_yoga(obj){
     if(obj!==null){
    let yoga_name = obj.current.Yoga.split(",")[0];
    let current_yoga_end_time = obj["current"]["Ends on"]["time"];
    return yoga_name  +" "+"upto" +" "+current_yoga_end_time;
    }
}

function extract_current_karan(obj){
     if(obj!==null){
    let karan_name = obj.current.Karan.split(",")[0];
    let next_end_time = obj["current"]["Ends on"]["time"];
    let next_end_date = obj["current"]["Ends on"]["date"].split("-")
    let month_name = monthNames[next_end_date[1]-1]
    let day=next_end_date[0];
    return karan_name +" "+"upto" +" "+next_end_time+","+" "+month_name+" "+day;
    }
 }

  function extract_next_tithi(obj){
     if(obj!==null){
    let tithi_name = obj.next.Tithi.split(",")[0];
    let next_end_time = obj["next"]["Ends on"]["time"];
    let next_end_date = obj["next"]["Ends on"]["date"].split("-")
    let month_name = monthNames[next_end_date[1]-1]
    let day=next_end_date[0];
    return tithi_name +" "+"upto" +" "+next_end_time+","+" "+month_name+" "+day;
    }
 }


 function extract_next_yoga(obj){
     if(obj!==null){
    let yoga_name = obj.next.Yoga.split(",")[0];
    let next_end_time = obj["next"]["Ends on"]["time"];
    let next_end_date = obj["next"]["Ends on"]["date"].split("-")
    let month_name = monthNames[next_end_date[1]-1]
    let day=next_end_date[0];
    return yoga_name +" "+"upto" +" "+next_end_time+","+" "+month_name+" "+day;
    }
}

 function extract_next_karan(obj){
     if(obj!==null){
    let karan_name = obj.next.Karan.split(",")[0];
    let next_end_time = obj["next"]["Ends on"]["time"];
    let next_end_date = obj["next"]["Ends on"]["date"].split("-")
    let month_name = monthNames[next_end_date[1]-1]
    let day=next_end_date[0];
    return karan_name +" "+"upto" +" "+next_end_time+","+" "+month_name+" "+day;
    }
 }

function extract_next_next_karan(obj){
     if(obj!==null){
    let karan_name = obj.next_next.Karan.split(",")[0];
    let next_end_time = obj["next_next"]["Ends on"]["time"];
    let next_end_date = obj["next_next"]["Ends on"]["date"].split("-")
    let month_name = monthNames[next_end_date[1]-1]
    let day=next_end_date[0];
    return karan_name +" "+"upto" +" "+next_end_time+","+" "+month_name+" "+day;
    }
 }

 function extract_kulika_string(obj){
     if(obj!==null){
         let start_date = obj["Kulika Kaal"]["start_time"].split(",")[0].split("/")
         let start_time = obj["Kulika Kaal"]["start_time"].split(",")[1];
         let end_time = obj["Kulika Kaal"]["end_time"].split(",")[1];
         let end_date = obj["Kulika Kaal"]["end_time"].split(",")[0].split("/")
         let start_month_name = monthNames[start_date[1]-1]
         let end_month_name = monthNames[end_date[1]-1]
         let start_day=start_date[0];
         let end_day = end_date[0];
         return start_time+  " " + "to" + end_time;
     }
 }

 function extract_image_link(obj){
     if(obj!==null){

         let tithi_name = obj.current.Tithi;
        let imglink = "./HolisticAssets/Moons/"
        tithi_name = tithi_name+'.png'
        return imglink+tithi_name;
     }
 }

function Holistic() {

  const [currentClass, setcurrentClass] = useState('col-lg-10 col-md-12');
   const contextType = useContext(GlobalContext)
   let value =contextType.panchangDate || new Date();
   let place = contextType.placeobserved || "Hyderabad";
    let [sunriseTime, setsunriseTime] = useState(null) 
    let [sunsetTime, setsunsetTime] = useState(null) 
    let [moonriseTime, setmoonriseTime] = useState(null) 
    let [moonsetTime, setmoonsetTime] = useState(null) 
    let [tithiobject, settithiobject] = useState(null)
    let [yogaobject, setyogaobject] = useState(null)
    let [karanobject, setkaranobject] = useState(null)
    let [weekday, setweekday] = useState(null);
    let [kulikavalue,setkulikavalue] = useState(null);
    useEffect(() => {
    (async () => {
   let y = "";
      let m = "";
      let d = "";
      let h="";
      let mi="";
      let s="";
    let lat = "",
        long = "";
    let offset = "";
    console.log(value)
    try{
    y=value.getFullYear();
    m=value.getMonth()+1;
    d=value.getDate();
    }
    catch(err){
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
      let sunrise_string =
      "http://api.omparashar.com/panchang/dailypanchang/sunrise"
    //var params = "?from_year=2020&from_month=1&from_day=1&to_year=2020&to_month=6&to_day=30&lat=29.47&long=77.69&offset=19800&p_nums=3&p_nums=4";
      let sunset_string =
      "http://api.omparashar.com/panchang/dailypanchang/sunset"
      let moonset_string =
      "http://api.omparashar.com/panchang/dailypanchang/moonset"
      let moonrise_string =
      "http://api.omparashar.com/panchang/dailypanchang/moonrise";
      let tithi_string =
      "http://api.omparashar.com/panchang/dailypanchang/tithi";
      let yoga_string =
      "http://api.omparashar.com/panchang/dailypanchang/yoga";
      let karan_string = 
      "http://api.omparashar.com/panchang/dailypanchang/karan";
      let weekday_string = 
      "http://api.omparashar.com/panchang/dailypanchang/dayoftheweek";
      let kulika_string = 
      "http://api.omparashar.com/panchang/dailypanchang/kulika";
    let params =
      "?year="+
      y +
      "&month=" +
      m +
      "&day=" +
      d+
      "&lat=" +
      lat +
      "&long=" +
      long +
      "&offset=" +
      offset +
      "&place=" +
      place;
      const sunriseurl = sunrise_string+params;
      console.log(sunriseurl)
      const sunseturl = sunset_string+params;
      console.log(sunseturl)
      const moonriseurl = moonrise_string+params;
      console.log(moonriseurl)
      const moonseturl = sunrise_string+params;
      console.log(moonseturl)
      const tithiurl = tithi_string+params;
      console.log(tithiurl)
      const yogaurl = yoga_string+params;
      console.log(yogaurl)
      const karanurl = karan_string+params;
      console.log(karanurl)
      const weekdayurl=weekday_string+params;
      console.log(weekdayurl)
      const kulikaurl = kulika_string+params;
      console.log(kulikaurl)

      const sunriseresult = await axios(sunriseurl)
      const sunsetresult = await axios(sunseturl);
      const moonriseresult = await axios(moonriseurl);
      const moonsetresult = await axios(moonseturl)
      const tithiresult = await axios(tithiurl)
      const yogaresult = await axios(yogaurl)
      const karanresult = await axios(karanurl)
      const weekdayresult = await axios(weekdayurl)
      const kulikaresult = await axios(kulikaurl)
      console.log(tithiresult)
      setsunriseTime(sunriseresult.data);
      setsunsetTime(sunsetresult.data);
      setmoonriseTime(moonriseresult.data);
      setmoonsetTime(moonsetresult.data);
      settithiobject(tithiresult.data);
      setyogaobject(yogaresult.data);
      setkaranobject(karanresult.data);
      setweekday(weekdayresult.data);
      setkulikavalue(kulikaresult.data)
      //console.log(result)
    })();
  },[contextType.panchangDate, place]);


        let sunriseTimedisplay = remove_character(sunriseTime,5);
  let sunsetTimedisplay = remove_character(sunsetTime,5);
  let moonriseTimedisplay = remove_character(moonriseTime,5);
  let moonsetTimedisplay = remove_character(moonsetTime,5);
  let tithicurrent = extract_current_tithi(tithiobject);
  let yogacurrent = extract_current_yoga(yogaobject);
  let karancurrent=extract_current_karan(karanobject);
  let tithinext = extract_next_tithi(tithiobject);
  let yoganext = extract_next_yoga(yogaobject);
  let karannext = extract_next_karan(karanobject);
  let karan_next_next = extract_next_next_karan(karanobject);
  let kulika = extract_kulika_string(kulikavalue)
  let tithiname_1=""
  let tithiname_2=""
//   let imgsrc=null;
//   let link=""
//    imgsrc = extract_image_link(tithiobject);
//    if(typeof(imgsrc)!==undefined){
//        console.log(imgsrc,typeof(imgsrc))
//     //    link=require(imgsrc);
//    }

  if(tithiobject!==null){
  tithiname_1 = tithiobject["current"]["Tithi"].split(",")[0]
  tithiname_2 = tithiobject["current"]["Tithi"].split(",")[1]
  }
  let day=""
  let month=""
  let year=""
  let month_string=""

  if(value!==null){
 
  day = moment(value).format("DD");
  month = monthNames[moment(value).format("MM")-1];
  year = moment(value).format("YYYY");
  month_string = month + ", " + year;

}


  return (
    <div className={currentClass}>
                <div id="holistic" className="col-lg-12"  >
                    <div className="card">

                        <div className="card-body-holistic" style={{ "padding": "10px", backgroundImage: `url(${background})`}}>
     <div class="dpPHeaderLeftContent">
         <img className="dpPHeaderImage" src={require('./HolisticAssets/Moons/Purnima(New Moon), Shukla Paksha.png')} alt="Thithi"/>
         <div class="dpPHeaderLeftTitle"><u>{tithiname_1}</u></div>
		<strong>{tithiname_2}</strong><br/><span>,{place}</span>
         </div>  
	<div class="dpPHeaderRightContent">
		<div class="dpPHeaderRightTitle"><u>{day}</u></div>
		<strong>{month_string}</strong><br/><span>{weekday}</span>
    </div>
    </div>
    <div class="dpTableCardWrapper">
        <h3 class="dpTableCardTitle">Sunrise and Moonrise</h3>
        <div class="dpTableCard">
            <div class="dpTableRow">
                <div class="dpTableCell dpTableKey"> Sunrise</div>
                <div class="dpTableCell dpTableValue"><img src={require('./HolisticAssets/sunrise.png')} alt="Sunrise" class="TableIcon"/>{sunriseTimedisplay}</div>
                <div class="dpTableCell dpTableKey">Sunset</div>
                <div class="dpTableCell dpTableValue"><img src={require('./HolisticAssets/sunset.png')} alt="Sunset" class="TableIcon"/>{sunsetTimedisplay}</div>
            </div>
            <div class="dpTableRow">
                <div class="dpTableCell dpTableKey">MoonRise</div>
                <div class="dpTableCell dpTableValue"><img src={require('./HolisticAssets/moonrise.png')} alt="MoonRise" class="TableIcon"/>{moonriseTimedisplay}</div>
                <div class="dpTableCell dpTableKey">MoonSet</div>
                <div class="dpTableCell dpTableValue"><img src={require('./HolisticAssets/moonset.png')} alt="Moonset" class="TableIcon"/>{moonsetTimedisplay}</div>
            </div>
        </div>
        <h3 class="dpTableCardTitle">Panchang</h3>
        <div class="dpTableCard">
            <div class="dpTableRow">
                <div class="dpTableCell dpTableKey" >Tithi</div>
                <div class="dpTableCell dpTableValue">{tithicurrent}</div>
                <div class="dpTableCell dpTableKey">Karan</div>
                <div class="dpTableCell dpTableValue">{karancurrent}</div>
            </div>
            <div class="dpTableRow">
                <div class="dpTableCell dpTableKey" ></div>
                <div class="dpTableCell dpTableValue">{tithinext}</div>
                <div class="dpTableCell dpTableKey"></div>
                <div class="dpTableCell dpTableValue">{karannext}</div>
            </div>
            <div class="dpTableRow">
                <div class="dpTableCell dpTableKey" >Yoga</div>
                <div class="dpTableCell dpTableValue">{yogacurrent}</div>
                <div class="dpTableCell dpTableKey"></div>
                <div class="dpTableCell dpTableValue">{karan_next_next}</div>
            </div>
            <div class="dpTableRow">
                <div class="dpTableCell dpTableKey" ></div>
                <div class="dpTableCell dpTableValue">{yoganext}</div>
                <div class="dpTableCell dpTableKey">Weekday</div>
                <div class="dpTableCell dpTableValue">{weekday}</div>
            </div>
            </div>
            <h3 class="dpTableCardTitle">Inauspicious Timings</h3>
            <div class="dpTableCard">
            <div class="dpTableRow">
                <div class="dpTableCell dpTableKey" >Kulika</div>
                <div class="dpTableCell dpTableValue">{kulika}</div>
                <div class="dpTableCell dpTableKey" ></div>
                <div class="dpTableCell dpTableValue"></div>
            </div>
            </div>
    </div>
</div>
</div>
</div>

  );
                  }

export default Holistic;