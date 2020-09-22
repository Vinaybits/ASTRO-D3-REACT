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
					b.name == a.name
	
				)
				if(api_dgree){
					a.degree = api_dgree.deg;
					
				}
				
				
			})
			new_array.push(JSON.parse(JSON.stringify(array_format)));
			

			
		});
		
		console.log(new_array);
		return new_array;
		//console.log(array_format);
		//console.log(new_array);
		console.log("----test ---end---");
				
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
						  "deg": 111.64,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 11.89,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 112.0,
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
						  "deg": 174.12,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 154.12,
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
						  "deg": 274.07,
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
						  "deg": 357.68,
						  "motion": "D"
					   },
					   {
						  "name": "Me",
						  "deg": 353.05,
						  "motion": "D"
					   },
					   {
						  "name": "Ve",
						  "deg": 32.45,
						  "motion": "D"
					   },
					   {
						  "name": "Ma",
						  "deg": 315.44,
						  "motion": "D"
					   },
					   {
						  "name": "Ju",
						  "deg": 352.95,
						  "motion": "D"
					   },
					   {
						  "name": "Sa",
						  "deg": 300.47,
						  "motion": "D"
					   },
					   {
						  "name": "Ra",
						  "deg": 34.01,
						  "motion": "R"
					   },
					   {
						  "name": "Ke",
						  "deg": 354.01,
						  "motion": "R"
					   }
					]
				 },
				 
				 
				
				
				 
				
		   
			  ]
		  };
		var formatted_array = this.format_incoming_data(dummy_data);

		formatted_array.forEach((data,i) =>{
			setTimeout(()=>{
				console.log("New array - " + i);
				console.log(data[1].degree);
				this.setState({planet:data});
				this.setState({current_index:i});
						   
						  }, i * 2000);

		})
		clearTimeout();
		
		
		
		 
					
		 

	 }




	//  this is code is for updating current state with timer and push new data with delay 
//  loadData = () => {
		
// 		var array1 = dummy_data.p_dates;
	
// 		var state_planet = this.planet_init;
// 		console.log("state - " + state_planet[0]);
		
	
// 		array1.forEach((name, i) => {
// 		  setTimeout(() => {
// 			// display(name);
// 			state_planet.forEach(item1 => {
// 			  var itemFromArr2 = array1[i].planets.find(item2 => item2.name == item1.name);
	
// 			  if (itemFromArr2) {
// 				item1.degree = itemFromArr2.deg;
// 			  }
// 			});
// 			console.log("New array - " + i);
// 			console.log(state_planet[1].degree);
// 			this.setState({planet:state_planet});
		   
// 		  }, i * 2000);
		  
// 		});
	
// 	};



	// toggle() {
	// 	this.setState({IsActive : !IsActive});
	//   };
	//   reset() {
	// 	//setSeconds(0);
	// 	this.setState({IsActive : false});
	//   };

	state = {
		planet:this.planet_init,
		newStateplanet : '',
		current_index: 0,
		IsActive:false,
		prev: '',
		next: '',
		updateplanet : this.play_array,
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