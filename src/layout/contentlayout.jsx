import React, { useState, useEffect } from 'react';
import Sideform from '../components/sideform'
import D3graph from '../components/d3graph';
import Sideoptions from '../components/sideoptions';
import Card3col from '../components/card3col';

const Contentlayout = () => {

  const planet_init = [
    {
    R: 280,
    r: 5,
    speed: -1.60,
    phi0: 35,
    color: 'white',
    degree: 100.23,
    name: "Mo",
    moons: [] // mercury
}, {
    R: 280,
    r: 8,
    speed: -1.60,
    phi0: 35,
    color: 'yellow',
    degree: 250,
    name: "Sa",
    moons: [] // mercury
}, {
    R: 285,
    r: 7,
    speed: -2.60,
    phi0: 135,
    color: 'skyblue',
    degree: 284,
    name: "Su",
    moons: [] // mercury
}, {
    R: 290,
    r: 8,
    speed: -1.60,
    phi0: 25,
    color: 'brown',
    degree: 120,
    name: "Ju",
    moons: [] // mercury
},
];
  const planets_filter_init = [
    {name:'Su' ,value:false},
    {name:'Mo' ,value:false},
    {name:'Me' ,value:false},
    {name:'Ve' ,value:false},
    {name:'Ma' ,value:false},
    {name:'Ju' ,value:false},
    {name:'Sa' ,value:false},
    {name:'Ra' ,value:false},
    {name:'Ke' ,value:false}
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
          
        }
      }
    }
    
   //console.log("check box state"+planetnames);
  }
  const onChange = (values) =>{
  //   let list = [];
  //   setPlanetnames(list);
     let newList = [...planetnames];
     let isTrue = newList[values].value;
   
     if(isTrue === true){
      newList[values].value = false;
    
     }
    else{
      //alert("false");
      newList[values].value = true;
    }
    
  //  setPlanetnames(list);
  //let newList = [...planetnames]; // copying the old datas array
  //newList[values].value = false; // replace e.target.value with whatever you want to change it to
  setPlanetnames(newList);


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