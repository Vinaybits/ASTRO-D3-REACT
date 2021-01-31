import React, { useState, useEffect, useContext } from "react";
import './Holistic.css'
import { GlobalContext } from '../mycontext';
import * as cities from "../components/cities.json";
import axios from "axios";
import background from "../assets/img/bg.jpg";
import moment from "moment";
import CustomInput from './CustomInput'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-calendar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Sideform from '../SideComponents/sideform'
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



function remove_character(str, char_pos,str1) 
 {
  if(str!== null){
  str=str.split(",")[1]
  let part1 = str.substring(0, char_pos+1);
  let part2 = str.substring(char_pos + 4, str.length);
  return (part1 + part2);
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

function extract_auspicious_string(obj,str){
     if(obj!==null){
         if(str==="Nishita"){
             const times=[]
             for (const key in obj){
                for (const inner in obj[key]){
                        let start_date = obj[key][inner].split(",")[0].split("/")
                        let month_name = monthNames[start_date[1]-1]
                        let day=start_date[0];
                        times.push(remove_character(obj[key][inner],5))
                        times.push(month_name)
                        times.push(day)
                }
            }  
            return times[0]+ "," + " " + times[1] + " " + times[2] + " " + "to" + " " + times[3]+ "," + " "+  times[4] + " " + times[5];
         }
         else{
         const times=[]
         for (const key in obj){
             for (const inner in obj[key]){
                        times.push(remove_character(obj[key][inner],5))
             }
        }
        if(str==="Sandhya"){
                return times;
        }
        else{
                return times[0]+  " " + "to" + " " +times[1];
        }
     }
    }
 }

 function extract_ayan(obj){
     if(obj!==null){
         const arr=[]
         for(const key in obj){
            arr.push(obj[key]);
         }
         return arr;
     }
 }

 function extract_image_link(obj){
     if(obj!==null){

         let tithi_name = obj.current.Tithi;
        let imglink = "assets/Moons/"
        tithi_name = tithi_name+'.png'
        return imglink+tithi_name;
     }
 }

 function extract_duration(array){
     if(array!==null){
         let arr=[]
        for(const i in array){
            for (const j in array[i]){
                arr.push(array[i][j])
            }
        }
        return arr[0] +  " Hours " + arr[1] + " Mins " + arr[2] + " Sec "
     }
 }

 function extract_nakshtra_string(obj){
     if(obj!==null){
     let end_time = obj["Nakshtra at Sunrise"]["Nakshtra End Time"].split(" ")
     end_time[4] = end_time[4].substring(0, 5)+ " " + end_time[5]
     return obj["Nakshtra at Sunrise"]["Nakshtra Name"] + " upto " + end_time[4] 
     }
 }

 function extract_abhijit_string(obj){
    if(obj!==null){
        return obj.start + " to " +obj.end;
    }
 }

 function extract_trikaal(obj){
     let times=[]
     if(obj!==null){
         for (const key in obj){
                for (const inner in obj[key]){
                        times.push(obj[key][inner])
                }
        }
     }
     return times;
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
    let [amritkaalvalue, setamritkaalvalue] = useState(null);
    let [brahmavalue, setbrahmavalue] = useState(null);
    let [nishitavalue, setnishitavalue] = useState(null);
    let [vijayvalue,setvijayvalue] = useState(null);
    let [sandhyavalue,setsandhyavalue] = useState(null);
    let [ayanavalue,setayanavalue] = useState(null);
    let [dayduration,setdayduration] = useState(null);
    let [nightduration,setnightduration] = useState(null);
    let [varjyavalue,setvarjyavalue] = useState(null);
    let [naksvalue,setnaksvalue] = useState(null);
    let [abhijitvalue,setabhijitvalue] = useState(null);
    let [show,setshow] = useState(false)
    let [flag,setFlag] = useState("")
    let [ritu,setritu] = useState(null)
    let [sunsign,setsunsign] = useState(null);
    let [moonsign,setmoonsign] = useState(null);
    let [samvatsara,setsamvatsara] = useState(null);
    let [trikaalvalue, settrikaalvalue] = useState(null);
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
      let holistic_api = axios.create({
        baseURL: 'http://api.omparashar.com/panchang/dailypanchang/'   
      })
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

      const sunriseresult = await holistic_api.get(`/sunrise${params}`);
      const sunsetresult = await holistic_api.get(`/sunset${params}`);;
      const moonriseresult = await holistic_api.get(`/moonrise${params}`);;
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
      const day =   await holistic_api.get(`/dayduration${params}`);
      const night =   await holistic_api.get(`/nightduration${params}`);
      const varjya =   await holistic_api.get(`/varjya${params}`);
      const naks =   await holistic_api.get(`/nakshtra${params}`);
      const abhijit =   await holistic_api.get(`/abhijitmuhurat${params}`);
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
      setkulikavalue(kulikaresult.data)
      setamritkaalvalue(amritkaalresult.data)
      setbrahmavalue(brahma.data)
      setnishitavalue(nishita.data)
      setvijayvalue(vijay.data)
      setsandhyavalue(sandhya.data)
      setayanavalue(ayana.data)
      setdayduration(day.data)
      setnightduration(night.data)
      setvarjyavalue(varjya.data)
      setnaksvalue(naks.data)
      setabhijitvalue(abhijit.data)
      setritu(ritu.data)
      setsunsign(sunsign.data.current)
      setmoonsign(moonsign.data.current)
      setsamvatsara(samvatsara.data)
      settrikaalvalue(trikaal.data)
    })();
  },[contextType.panchangDate, place]);

    let moonriseTimedisplay = remove_character(moonriseTime, 5);
    let sunriseTimedisplay = remove_character(sunriseTime, 5);
    let sunsetTimedisplay = remove_character(sunsetTime, 5);
    let moonsetTimedisplay = remove_character(moonsetTime, 5);
    let tithicurrent = extract_current_tithi(tithiobject);
    let yogacurrent = extract_current_yoga(yogaobject);
    let karancurrent=extract_current_karan(karanobject);
    let tithinext = extract_next_tithi(tithiobject);
    let yoganext = extract_next_yoga(yogaobject);
    let karannext = extract_next_karan(karanobject);
    let karan_next_next = extract_next_next_karan(karanobject);
    let kulika = extract_auspicious_string(kulikavalue,"");
    let amritkaal = extract_auspicious_string(amritkaalvalue,"");
    let brahma = extract_auspicious_string(brahmavalue,"");
    let nishita = extract_auspicious_string(nishitavalue,"Nishita");
    let vijay = extract_auspicious_string(vijayvalue);
    let sandhya = extract_auspicious_string(sandhyavalue,"Sandhya");
    let ayan = extract_ayan(ayanavalue)
    let dayd = extract_duration(dayduration)
    let nightd = extract_duration(nightduration)
    let varjya = extract_auspicious_string(varjyavalue,"Nishita");
    let nakshtra = extract_nakshtra_string(naksvalue)
    let abhijit = extract_abhijit_string(abhijitvalue)
    let trikaal = extract_trikaal(trikaalvalue);
    let dkayan=""
    let vdayan=""

    if(typeof(ayan)!=="undefined"){
        dkayan=ayan[0];
        vdayan=ayan[0];
    }

    let psandhya="";
    let ssandhya="";
    if(typeof(sandhya)!=="undefined"){
        psandhya=sandhya[0] + " " + "to" + " " + sandhya[1];
        ssandhya=sandhya[2] + " " + "to" + " " + sandhya[3];
    }

    let rkaal=""
    let ykaal=""

    if(typeof(trikaal)!=="undefined"){
        rkaal=trikaal[0] + " " + "to" + " " + trikaal[1];
        ykaal=trikaal[4] + " " + "to" + " " + trikaal[5];
    }


    let tithiname_1=""
    let tithiname_2=""
    let imgsrc=null;
    let link=""
    imgsrc = extract_image_link(tithiobject);
    if(typeof(imgsrc)!=="undefined"){
        link =imgsrc;
    }

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



const handleCalendar = () =>{
    setshow(!show)
    //  setFlag("datesideform")
}

// const handleDateFlag = () =>{
//     setFlag("datesideform")
// }

// const handlePlaceFlag = () =>{
//     setFlag("placesideform")
// }

  return (
    <div className={currentClass}>
                <div id="holistic" className="col-lg-12"  >
                    <div className="card">

    <div className="card-body-holistic" style={{ "padding": "10px", backgroundImage: `url(${background})`, width:"100%"}}>
     <div className="dpPHeaderLeftContent">
         <img className="dpPHeaderImage" src={link} alt="Thithi"/>
         <div className="dpPHeaderLeftTitle"><u>{tithiname_1}</u></div>
		<div className="dpPHeaderLeftSubTitle"><u>{tithiname_2}</u></div>
     </div>  
	 <div className="dpPHeaderRightContent">
		<div className="dpPHeaderRightTitle"><u>{day} {month_string}</u><i onClick={handleCalendar} style={{"fontSize":"24px", "marginLeft":"4%","cursor":"pointer"}} class="dpPHeaderRightTitle fa">&#xf073;</i></div>
        <div className="dpPHeaderRightTitle"><u>{place}</u> <img  onClick={handleCalendar} src={require('../assets/img/map.png')} alt="Map" class="MapIcon"/></div>
       
     </div>
      <div className="dpPHeaderCenterContent">
		<div className="dpPHeaderCenterTitle"><u>Daily Panchang</u></div>
     </div>  
    </div>
    <div className="dpTableCardWrapper">
        <h3 className="dpTableCardTitle">Sunrise and Moonrise</h3>
        <div className="dpTableCard">
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey"> Sunrise</div>
                <div className="dpTableCell dpTableValue"><img src={require('../assets/img/sunrise.png')} alt="Sunrise" class="TableIcon"/>{sunriseTimedisplay}</div>
                <div className="dpTableCell dpTableKey">Sunset</div>
                <div className="dpTableCell dpTableValue"><img src={require('../assets/img/sunset.png')} alt="Sunset" class="TableIcon"/>{sunsetTimedisplay}</div>
            </div>
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey">MoonRise</div>
                <div className="dpTableCell dpTableValue"><img src={require('../assets/img/moonrise.png')} alt="MoonRise" class="TableIcon"/>{moonriseTimedisplay}</div>
                <div className="dpTableCell dpTableKey">MoonSet</div>
                <div className="dpTableCell dpTableValue"><img src={require('../assets/img/moonset.png')} alt="Moonset" class="TableIcon"/>{moonsetTimedisplay}</div>
            </div>
        </div>
         <Modal show={show} onHide={handleCalendar} centered>
        
        <Modal.Header 
        closeButton 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Modal.Title style={{color:"rgb(3, 66, 141)",fontWeight:"bold"}}>Please Update Date and Location</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
        <Sideform mode={"panchangView"} close = {handleCalendar} date={value} place={place} flag={flag}/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
        <h3 className="dpTableCardTitle">Panchang</h3>
        <div className="dpTableCard">
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Tithi</div>
                <div className="dpTableCell dpTableValue">{tithicurrent}</div>
                <div className="dpTableCell dpTableKey">Karan</div>
                <div className="dpTableCell dpTableValue">{karancurrent}</div>
            </div>
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" ></div>
                <div className="dpTableCell dpTableValue">{tithinext}</div>
                <div className="dpTableCell dpTableKey"></div>
                <div className="dpTableCell dpTableValue">{karannext}</div>
            </div>
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Yoga</div>
                <div className="dpTableCell dpTableValue">{yogacurrent}</div>
                <div className="dpTableCell dpTableKey"></div>
                <div className="dpTableCell dpTableValue">{karan_next_next}</div>
            </div>
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" ></div>
                <div className="dpTableCell dpTableValue">{yoganext}</div>
                <div className="dpTableCell dpTableKey">Weekday</div>
                <div className="dpTableCell dpTableValue">{weekday}</div>
            </div>
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Nakshtra</div>
                <div className="dpTableCell dpTableValue">{nakshtra}</div>
                <div className="dpTableCell dpTableKey"></div>
                <div className="dpTableCell dpTableValue"></div>
            </div>
        </div>

        <h3 className="dpTableCardTitle">Samvatsara</h3>
        <div className="dpTableCard">
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Shaka Samvatsara</div>
                <div className="dpTableCell dpTableValue">{samvatsara}</div>
                <div className="dpTableCell dpTableKey"></div>
                <div className="dpTableCell dpTableValue"></div>
            </div>
        </div>

        <h3 className="dpTableCardTitle">Rashi</h3>
        <div className="dpTableCard">
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Sunsign</div>
                <div className="dpTableCell dpTableValue">{sunsign}</div>
                <div className="dpTableCell dpTableKey">Moonsign</div>
                <div className="dpTableCell dpTableValue">{moonsign}</div>
            </div>
        </div>

        <h3 className="dpTableCardTitle">Ritu and Ayan</h3>
        <div className="dpTableCard">
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Drik Ayan</div>
                <div className="dpTableCell dpTableValue">{dkayan}</div>
                <div className="dpTableCell dpTableKey">Day Duration</div>
                <div className="dpTableCell dpTableValue">{dayd}</div>
            </div>
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Vedic Ayan</div>
                <div className="dpTableCell dpTableValue">{vdayan}</div>
                <div className="dpTableCell dpTableKey">Night Duration</div>
                <div className="dpTableCell dpTableValue">{nightd}</div>
            </div>
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Ritu</div>
                <div className="dpTableCell dpTableValue">{ritu}</div>
            </div>
        </div>
            
        <h3 className="dpTableCardTitle">Auspicious Timings</h3>
        <div className="dpTableCard">
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Amrit Kal</div>
                <div className="dpTableCell dpTableValue">{amritkaal}</div>
                <div className="dpTableCell dpTableKey">Abhijit Muhurat</div>
                <div className="dpTableCell dpTableValue">{abhijit}</div>
            </div>
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Brahma Muhurat</div>
                <div className="dpTableCell dpTableValue">{brahma}</div>
                <div className="dpTableCell dpTableKey">Nishita Muhurat</div>
                <div className="dpTableCell dpTableValue">{nishita}</div>
            </div>
             <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Pratha Sandhya</div>
                <div className="dpTableCell dpTableValue">{psandhya}</div>
                <div className="dpTableCell dpTableKey">Sayan Sandhya</div>
                <div className="dpTableCell dpTableValue">{ssandhya}</div>
            </div>
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Vijay Muhurat</div>
                <div className="dpTableCell dpTableValue">{vijay}</div>
                <div className="dpTableCell dpTableKey"></div>
                <div className="dpTableCell dpTableValue">{}</div>
            </div>
        </div>
            <h3 className="dpTableCardTitle">Inauspicious Timings</h3>
            <div className="dpTableCard">
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Kulika</div>
                <div className="dpTableCell dpTableValue">{kulika}</div>
                <div className="dpTableCell dpTableKey">Varjya Kaal</div>
                <div className="dpTableCell dpTableValue">{varjya}</div>
            </div>
            <div className="dpTableRow">
                <div className="dpTableCell dpTableKey" >Raahu Kaal</div>
                <div className="dpTableCell dpTableValue">{rkaal}</div>
                <div className="dpTableCell dpTableKey">Yamaganda Kaal</div>
                <div className="dpTableCell dpTableValue">{ykaal}</div>
            </div>
            </div>
    </div>
</div>
</div>
</div>

  );
                  }

export default Holistic;