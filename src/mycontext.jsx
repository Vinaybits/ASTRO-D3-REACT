import React, { Component } from "react";

export const GlobalContext = React.createContext();

export class GlobalProvider extends Component {
	

	planet_init = [
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
		  R: 335,
		  r: 8,
		  speed: -1.60,
		  phi0: 35,
		  color: 'yellow',
		  degree: 267.24,
		  name: "Sa",
		  moons: [] // mercury
		}, {
		  R: 340,
		  r: 7,
		  speed: -2.60,
		  phi0: 135,
		  color: 'orange',
		  degree: 255.64,
		  name: "Su",
		  moons: [] // mercury
		},
		{
		  R: 345,
		  r: 8,
		  speed: -1.60,
		  phi0: 25,
		  color: 'skyblue',
		  degree: 249.89,
		  name: "Me",
		  moons: [] // mercury
		},
		{
		  R: 350,
		  r: 8,
		  speed: -1.60,
		  phi0: 25,
		  color: 'red',
		  degree: 290,
		  name: "Ve",
		  moons: [] // mercury
		},
		{
		  R: 355,
		  r: 8,
		  speed: -1.60,
		  phi0: 25,
		  color: 'maroon',
		  degree: 214.1,
		  name: "Ma",
		  moons: [] // mercury
		}, {
		  R: 360,
		  r: 8,
		  speed: -1.60,
		  phi0: 25,
		  color: 'green',
		  degree: 252.49,
		  name: "Ju",
		  moons: [] // mercury
		},
		{
		  R: 365,
		  r: 8,
		  speed: -2.60,
		  phi0: 25,
		  color: 'purple',
		  degree: 74.12,
		  name: "Ra",
		  moons: [] // mercury
		},
		{
		  R: 370,
		  r: 8,
		  speed: 1.60,
		  phi0: 35,
		  color: 'grey',
		  degree: 254.12,
		  name: "Ke",
		  moons: [] // mercury
		}
	  ];

	

    
  curent_index_state = 0;


	 format_incoming_data = (data) =>{
		
		var api_data = data.p_dates;
		var array_format = this.planet_init;
		let new_array = [];
		console.log("----test ------");
	    api_data.forEach((name,i) =>{
			array_format.forEach((a,j)=>{
				var api_dgree = api_data[i].planets.find(b => 
					b.name === a.name
	
				)
				if(api_dgree){
					a.degree = api_dgree.deg;
					
				}
				
				
			})
			new_array.push(JSON.parse(JSON.stringify(array_format)));
			

			
		});
		
		//console.log(new_array);
		return new_array;
		
				
};

	 

	 play_array = ()=>{
		var dummy_data = {
			"from_year": 2020,
			"from_month": 1,
			"from_day": 1,
			"to_year": 2021,
			"to_month": 1,
			"to_day": 1,
			"p_dates": 
			[
				{
					"date": "1-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 255.64,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 249.89,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 290.0,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 214.1,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 252.49,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 267.24,
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
						  "deg": 256.66,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 251.47,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 291.22,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 214.77,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 252.72,
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
						  "deg": 257.68,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 253.05,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 292.45,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 215.44,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 252.95,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 267.47,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 74.01,
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
					"planets": [
					   {
						  "name": "Su",
						  "deg": 259.72,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 256.23,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 294.89,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 216.79,
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
				 {
					"date": "6-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 260.74,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 257.83,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 296.12,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 217.46,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 253.64,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 267.82,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.85,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.85,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "7-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 261.76,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 259.43,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 297.34,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 218.14,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 253.87,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 267.94,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.8,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.8,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "8-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 262.78,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 261.04,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 298.56,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 218.81,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 254.1,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 268.06,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.75,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.75,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "9-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 263.8,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 262.66,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 299.78,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 219.49,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 254.32,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 268.18,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.7,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.7,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "10-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 264.82,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 264.28,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 301.0,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 220.16,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 254.55,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 268.3,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.64,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.64,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "11-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 265.84,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 265.92,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 302.21,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 220.84,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 254.78,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 268.41,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.59,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.59,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "12-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 266.85,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 267.56,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 303.43,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 221.51,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 255.01,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 268.53,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.54,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.54,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "13-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 267.87,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 269.2,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 304.65,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 222.19,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 255.24,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 268.65,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.48,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.48,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "14-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 268.89,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 270.86,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 305.86,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 222.87,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 255.47,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 268.77,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.43,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.43,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "15-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 269.91,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 272.52,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 307.07,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 223.54,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 255.69,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 268.89,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.38,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.38,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "16-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 270.93,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 274.19,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 308.29,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 224.22,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 255.92,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 269.01,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.32,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.32,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "17-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 271.95,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 275.87,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 309.5,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 224.9,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 256.15,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 269.12,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.27,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.27,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "18-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 272.96,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 277.55,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 310.71,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 225.58,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 256.37,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 269.24,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.22,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.22,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "19-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 273.98,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 279.24,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 311.92,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 226.26,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 256.6,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 269.36,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.17,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.17,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "20-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 275.0,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 280.94,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 313.12,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 226.93,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 256.83,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 269.48,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.11,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.11,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "21-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 276.02,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 282.65,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 314.33,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 227.61,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 257.05,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 269.6,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.06,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.06,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "22-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 277.04,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 284.36,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 315.54,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 228.29,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 257.28,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 269.72,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 73.01,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 253.01,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "23-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 278.06,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 286.08,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 316.74,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 228.97,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 257.5,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 269.83,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 72.95,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 252.95,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "24-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 279.07,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 287.8,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 317.94,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 229.65,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 257.72,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 269.95,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 72.9,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 252.9,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "25-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 280.09,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 289.52,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 319.14,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 230.33,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 257.95,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 270.07,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 72.85,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 252.85,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "26-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 281.11,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 291.25,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 320.34,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 231.01,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 258.17,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 270.19,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 72.79,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 252.79,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "27-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 282.13,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 292.97,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 321.54,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 231.7,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 258.39,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 270.3,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 72.74,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 252.74,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "28-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 283.14,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 294.69,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 322.74,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 232.38,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 258.61,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 270.42,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 72.69,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 252.69,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "29-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 284.16,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 296.4,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 323.93,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 233.06,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 258.83,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 270.54,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 72.64,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 252.64,
						  "motion": "R"
					   }
					]
				 },
				 {
					"date": "30-1-2020",
					"planets": [
					   {
						  "name": "Su",
						  "deg": 285.18,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 298.11,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 325.13,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 233.74,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 259.05,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 270.65,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 72.58,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 252.58,
						  "motion": "R"
					   }
					]
				 }
		   
				 
		 
				
		   
			  ]
		  };
		var formatted_array = this.format_incoming_data(dummy_data);
		this.setState({newStateplanet:formatted_array});
		//set for SIDETABLE
		this.setState({newState_apidata:dummy_data.p_dates});
		//this.setState({apidataState:dummy_data.p_dates});
		// these fn go on page load or onmount state event 


		var length = formatted_array.length;
		window.t = setInterval(()=>{
			//set playicon to pause 
			this.setState({playicon:'fe-pause'});
			//set the position based on array 
			this.setState({planet:formatted_array[this.state.current_index]});
			//set date value 
			this.setState({apidataState:dummy_data.p_dates[this.state.current_index]});
			// update the array index by 1 for next position
			this.setState({current_index:this.state.current_index+1});

			if(this.state.current_index === length){
				//console.log(this.state.current_index + " - " + length);
				clearInterval(window.t);
				this.setState({playicon:'fe-play'});
				this.setState({current_index:0});
			  }

		},2000)

	 }

	 pause_array=() =>{
		clearInterval(window.t);
		this.setState({playicon:'fe-play'});
		
	 }

	 forward_array=() =>{

		   var length = this.state.newStateplanet.length;
		  // console.log(length )
		   if(length > this.state.current_index){
			   // update the array index by 1 for next position
			   this.setState({current_index:this.state.current_index+1});
			  
		       //set the position based on array 
				this.setState({planet:this.state.newStateplanet[this.state.current_index]});
				 //set Side table 
				 this.setState({apidataState:this.state.newState_apidata[this.state.current_index]});
			   
		   }
		   else if(length === this.state.current_index)
		   {
			clearInterval(window.t);
			this.setState({playicon:'fe-play'});
			this.setState({current_index:0});

		   }	

	 }

	 backward_array=()=>{
		var length = this.state.newStateplanet.length;
		 
		if(this.state.current_index === 0){
			this.setState({current_index:length});
			//set the position based on array 
			 this.setState({planet:this.state.newStateplanet[this.state.current_index]});
			 //set Side table 
			 this.setState({apidataState:this.state.newState_apidata[this.state.current_index]});
		}
		else{
		 if(length > this.state.current_index){
			 // update the array index by 1 for next position
			 this.setState({current_index:this.state.current_index - 1});
			 //set the position based on array 
			  this.setState({planet:this.state.newStateplanet[this.state.current_index]});
			  //set Side table 
			  this.setState({apidataState:this.state.newState_apidata[this.state.current_index]});
		 }
		}

	 }


	state = {
		planet:this.planet_init,
		newStateplanet : '',
		apidataState : '',
		newState_apidata : '',
		current_index: 0,
		IsActive:false,
		prev: '',
		next: '',
		playicon:'fe-play',
		playplanet : this.play_array,
		pauseplanet : this.pause_array,
		forwardPlanet : this.forward_array,
		backwardPlanet: this.backward_array,
		togglebutton: this.toggle,
	};
	render() {
		return (
			<GlobalContext.Provider value={this.state}>
				{this.props.children}
			</GlobalContext.Provider>
		)
	}
}