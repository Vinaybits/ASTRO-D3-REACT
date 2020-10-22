import React, { useState, useEffect , useRef} from 'react';
import Sideform from '../components/sideform'
import D3graph from '../components/d3graph';
import Sideoptions from '../components/sideoptions';
import Card3col from '../components/card3col';
import Sidetable from '../components/sidetable';
import PlotlyChart from '../components/ploty_chart'


const Contentlayout = () => {

  const planet_init = [
    {
      R: 320,
      r: 8,
      speed: -1.60,
      phi0: 35,
      color: 'white',
      degree: 0,
      name: "Mo",
      moons: [] // mercury
    }, {
      R: 325,
      r: 8,
      speed: -1.60,
      phi0: 35,
      color: 'yellow',
      degree: 267.24,
      name: "Sa",
      moons: [] // mercury
    }, {
      R: 330,
      r: 7,
      speed: -2.60,
      phi0: 135,
      color: 'orange',
      degree: 255.64,
      name: "Su",
      moons: [] // mercury
    },
    {
      R: 360,
      r: 8,
      speed: -1.60,
      phi0: 25,
      color: 'skyblue',
      degree: 249.89,
      name: "Me",
      moons: [] // mercury
    },
    {
      R: 370,
      r: 8,
      speed: -1.60,
      phi0: 25,
      color: 'red',
      degree: 290,
      name: "Ve",
      moons: [] // mercury
    },
    {
      R: 380,
      r: 8,
      speed: -1.60,
      phi0: 25,
      color: 'maroon',
      degree: 214.1,
      name: "Ma",
      moons: [] // mercury
    }, {
      R: 390,
      r: 8,
      speed: -1.60,
      phi0: 25,
      color: 'green',
      degree: 252.49,
      name: "Ju",
      moons: [] // mercury
    },
    {
      R: 400,
      r: 8,
      speed: -2.60,
      phi0: 25,
      color: 'purple',
      degree: 74.12,
      name: "Ra",
      moons: [] // mercury
    },
    {
      R: 410,
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
    { name: 'Su', value: false, disabled: true },
    { name: 'Mo', value: false, disabled: true },
    { name: 'Ma', value: false, disabled: true },
    { name: 'Me', value: false, disabled: true },
    { name: 'Ju', value: false, disabled: true },
    { name: 'Ve', value: false, disabled: true },
    { name: 'Sa', value: false, disabled: true },
    { name: 'Ra', value: false, disabled: true },
    { name: 'Ke', value: false, disabled: true }
  ];

  const [planetdata, setPlanetdata] = useState(planet_init);
  const [planetnames, setPlanetnames] = useState(planets_filter_init);
  console.log("this is mine " + planetnames);

  const stateRef = useRef(planetdata)
  stateRef.current = planetdata



  useEffect(() => {
    setCheckboxState();

  },[]);


  const setCheckboxState = () => {
    for (var i = 0; i < planetdata.length; i++) {
      for (var j = 0; j < planetnames.length; j++) {
        if (planetnames[j].name === planetdata[i].name) {
          planetnames[j].value = true;
          planetnames[j].disabled = false;

        }
      }
    }
    //console.log("check box state"+planetnames);
  }
  const onChange = (values) => {
    let isTrue = '';
    var count = 1;
    let check_name = '';
    let newList = [...planetnames];
    if (values === '') {
      setPlanetdata(planet_init);

    }
    else {
      isTrue = newList[values].value;
      check_name = newList[values].name;
      if (isTrue === true) {
        newList[values].value = false;

      }

      else {
        //alert("false");
        newList[values].value = true;
      }


    }

    setPlanetnames(newList);

    console.log(check_name + "-" + count + 2 + isTrue);
    if (values !== '') {
      setplanetdata_state(isTrue, check_name);
    }

    //check for the planet_data and make chnages in data 

    //check the name of checkbox clicked


  }

  const setplanetdata_state = (value, name) => {
    let newPlanetData = [...planetdata];
    if (value === true) {
      // remove becuse check value is true and its tuening to false
      const planetItemIndex = newPlanetData.findIndex(item => item.name === name);
      const updatePlanet = { ...newPlanetData[planetItemIndex] };
      console.log(newPlanetData);
      newPlanetData.splice(planetItemIndex, 1);
      console.log(newPlanetData);
      //newPlanetData = newPlanetData.filter(item => item.name === name);
      setPlanetdata(newPlanetData);
    }
    else {
      //add from innitial array here 
    }
  }


  //  this is code is for updating current state with timer and push new data with delay 
  const loadData = () => {
    var dummy_data = {
      "from_year": 2020,
      "from_month": 1,
      "from_day": 1,
      "to_year": 2021,
      "to_month": 1,
      "to_day": 1,
      "p_dates": [
        {
          "date": "1-1-2020",
          "planets": [
            {
              "name": "Su",
              "deg": 155.64,
              "motion": "D"
            },
            {
              "name": "Me",
              "deg": 149.89,
              "motion": "D"
            },
            {
              "name": "Ve",
              "deg": 190.0,
              "motion": "D"
            },
            {
              "name": "Ma",
              "deg": 114.1,
              "motion": "D"
            },
            {
              "name": "Ju",
              "deg": 152.49,
              "motion": "D"
            },
            {
              "name": "Sa",
              "deg": 167.24,
              "motion": "D"
            },
            {
              "name": "Ra",
              "deg": 74.12,
              "motion": "R"
            },
            {
              "name": "Ke",
              "deg": 254.12,
              "motion": "R"
            }
          ]
        },
        {
          "date": "2-1-2020",

          "planets": [
            {
              "name": "Su",
              "deg": 56.66,
              "motion": "D"
            },
            {
              "name": "Me",
              "deg": 51.47,
              "motion": "D"
            },
            {
              "name": "Ve",
              "deg": 91.22,
              "motion": "D"
            },
            {
              "name": "Ma",
              "deg": 14.77,
              "motion": "D"
            },
            {
              "name": "Ju",
              "deg": 52.72,
              "motion": "D"
            },
            {
              "name": "Sa",
              "deg": 267.35,
              "motion": "D"
            },
            {
              "name": "Ra",
              "deg": 74.07,
              "motion": "R"
            },
            {
              "name": "Ke",
              "deg": 254.07,
              "motion": "R"
            }
          ]
        },
        {
          "date": "3-1-2020",
          "planets": [
            {
              "name": "Su",
              "deg": 117.68,
              "motion": "D"
            },
            {
              "name": "Me",
              "deg": 133.05,
              "motion": "D"
            },
            {

              "name": "Ve",
              "deg": 212.45,
              "motion": "D"
            },
            {
              "name": "Ma",
              "deg": 115.44,
              "motion": "D"
            },
            {
              "name": "Ju",
              "deg": 292.95,
              "motion": "D"
            },
            {
              "name": "Sa",
              "deg": 167.47,
              "motion": "D"
            },
            {
              "name": "Ra",
              "deg": 174.01,
              "motion": "R"
            },
            {
              "name": "Ke",
              "deg": 254.01,
              "motion": "R"
            }
          ]
        },
        {
          "date": "4-1-2020",
          "planets": [
            {
              "name": "Su",
              "deg": 258.7,
              "motion": "D"
            },
            {
              "name": "Me",
              "deg": 254.64,
              "motion": "D"
            },
            {
              "name": "Ve",
              "deg": 293.67,
              "motion": "D"
            }, 
            {
              "name": "Ma",
              "deg": 216.12,
              "motion": "D"
            },
            {
              "name": "Ju",
              "deg": 253.18,

              "motion": "D"
            },
            {
              "name": "Sa",
              "deg": 267.59,
              "motion": "D"
            },
            {
              "name": "Ra",
              "deg": 73.96,
              "motion": "R"
            },
            {
              "name": "Ke",
              "deg": 253.96,
              "motion": "R"
            }
          ]
        },

        {
          "date": "5-1-2020",
          "planets":
            [
              {
                "name": "Su",
                "deg": 359.72,
                "motion": "D"
              },
              {
                "name": "Me",
                "deg": 356.23,
                "motion": "D"
              },
              {
                "name": "Ve",
                "deg": 94.89,
                "motion": "D"
              },
              {
                "name": "Ma",
                "deg": 316.79,
                "motion": "D"
              },
              {
                "name": "Ju",
                "deg": 253.41,
                "motion": "D"
              },
              {
                "name": "Sa",
                "deg": 267.71,
                "motion": "D"
              },
              {
                "name": "Ra",
                "deg": 73.91,
                "motion": "R"
              },

              {
                "name": "Ke",
                "deg": 253.91,
                "motion": "R"
              }

            ]
        },
      ]
    }

    var array1 = dummy_data.p_dates;

    var state_planet = [...planetdata];
    console.log("state - " + state_planet[0]);
    

    array1.forEach((name, i) => {
      setTimeout(() => {
        // display(name);
        state_planet.forEach(item1 => {
          var itemFromArr2 = array1[i].planets.find(item2 => item2.name === item1.name);

          if (itemFromArr2) {
            item1.degree = itemFromArr2.deg;
          }
        });
        console.log("New array - " + i);
        console.log(state_planet[1].degree);
        setPlanetdata(state_planet);
       
      }, i * 10000);
      
    });



  }

  return (
    <>
      <div className="content-page" style={{"padding-top":"0px", "margin-top":"60px"}}>
        <div className="content">
          <div className="container-fluid" style={{"maxWidth" : "100%"}}>
            <div className="row">
                  <div className="col-lg-2 col-md-2">
                    <div>
                      <Sideform />
                    </div>
                    <div>
                      <Sidetable />
                    </div>
                  </div>
                  <D3graph planetsdata={planetdata} />
                  
                 {/* <PlotlyChart></PlotlyChart> */}
                  
                  {/* <Sideoptions checkbox_status={planetnames} onchange_={onChange} player={loadData}/> */}
                  
                 
                 

                </div>
                {/* <div className="row">
                
                  <Card3col />
                  <Card3col />
                  <Card3col />

                </div> */}

          </div>
        </div>
      </div>
    </>

  );
};

export default Contentlayout;