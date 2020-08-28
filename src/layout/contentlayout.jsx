import React, { useState, useEffect } from 'react';
import Sideform from '../components/sideform'
import D3graph from '../components/d3graph';
import Sideoptions from '../components/sideoptions';
import Card3col from '../components/card3col';

const Contentlayout = () => {

  const planet_init = [
    {
    R: 270,
    r: 5,
    speed: -1.60,
    phi0: 35,
    color: 'white',
    degree: 100.23,
    name: "Mo",
    moons: [] // mercury
}, {
    R: 272,
    r: 8,
    speed: -1.60,
    phi0: 35,
    color: 'yellow',
    degree: 267.24,
    name: "Sa",
    moons: [] // mercury
}, {
    R: 275,
    r: 7,
    speed: -2.60,
    phi0: 135,
    color: 'orange',
    degree: 255.64,
    name: "Su",
    moons: [] // mercury
}, 
{
  R: 280,
  r: 8,
  speed: -1.60,
  phi0: 25,
  color: 'skyblue',
  degree: 249.89,
  name: "Me",
  moons: [] // mercury
},
{
  R: 285,
  r: 8,
  speed: -1.60,
  phi0: 25,
  color: 'red',
  degree: 290,
  name: "Ve",
  moons: [] // mercury
},
{
  R: 290,
  r: 8,
  speed: -1.60,
  phi0: 25,
  color: 'maroon',
  degree: 214.1,
  name: "Ma",
  moons: [] // mercury
},{
    R: 295,
    r: 8,
    speed: -1.60,
    phi0: 25,
    color: 'green',
    degree: 252.49,
    name: "Ju",
    moons: [] // mercury
},
{
  R: 300,
  r: 8,
  speed: -2.60,
  phi0: 25,
  color: 'purple',
  degree: 74.12,
  name: "Ra",
  moons: [] // mercury
},
{
  R: 305,
  r: 8,
  speed: 1.60,
  phi0: 35,
  color: 'grey',
  degree: 254.12,
  name: "Ke",
  moons: [] // mercury
}
];
  const planets_filter_init = [
    {name:'Su' ,value:false, disabled:true},
    {name:'Mo' ,value:false, disabled:true},
    {name:'Ma' ,value:false, disabled:true},
    {name:'Me' ,value:false, disabled:true},
    {name:'Ju' ,value:false, disabled:true},
    {name:'Ve' ,value:false, disabled:true},
    {name:'Sa' ,value:false, disabled:true},
    {name:'Ra' ,value:false, disabled:true},
    {name:'Ke' ,value:false, disabled:true}
  ];

  const[planetdata , setPlanetdata] = useState(planet_init);
  const[planetnames , setPlanetnames] = useState(planets_filter_init);
  console.log("this is mine " + planetnames);

  
  
  useEffect(() => {
    setCheckboxState();
  },[planetdata]);
  
  
  const setCheckboxState = ()=> {
    for(var i=0 ; i< planetdata.length ; i++){
      for (var j=0; j< planetnames.length; j++){
        if(planetnames[j].name === planetdata[i].name){
          planetnames[j].value = true;
          planetnames[j].disabled = false;
          
        }
      }
    }
   //console.log("check box state"+planetnames);
  }
  const onChange = (values) =>{
     let isTrue='';
     var count = 1;
     let check_name ='';
     let newList = [...planetnames];
     if(values === ''){

     }
     else{
      isTrue = newList[values].value;
      check_name = newList[values].name;
     if(isTrue === true){
      newList[values].value = false;
    
     }
    
    else{
      //alert("false");
      newList[values].value = true;
    }
    
    
  }
    
  setPlanetnames(newList);

  console.log(check_name + "-"+count+2 + isTrue);
  if(values !== ''){
    setplanetdata_state(isTrue,check_name);
  }
  

  //check for the planet_data and make chnages in data 

  //check the name of checkbox clicked
  
  
}

const setplanetdata_state = (value,name) =>{
  let newPlanetData = planet_init;
  newPlanetData = newPlanetData.filter(item => item.name === name);
  setPlanetdata(newPlanetData);

}


  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">



                <div className="row">
                 
                  <Sideform />
                  <D3graph planetsdata={planetdata}/>
                  <Sideoptions checkbox_status={planetnames} onchange_={onChange} />

                </div>
                <div className="row">
                
                  <Card3col />
                  <Card3col />
                  <Card3col />
                
              </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
};

export default Contentlayout;