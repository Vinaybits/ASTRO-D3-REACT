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
		this.setState({newStateplanet:formatted_array});


		var length = formatted_array.length;
		window.t = setInterval(()=>{
			//set playicon to pause 
			this.setState({playicon:'fe-pause'});
			//set the position based on array 
			this.setState({planet:formatted_array[this.state.current_index]});
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
		}
		else{
		 if(length > this.state.current_index){
			 // update the array index by 1 for next position
			 this.setState({current_index:this.state.current_index - 1});
			 //set the position based on array 
			  this.setState({planet:this.state.newStateplanet[this.state.current_index]});
		 }
		}

	 }


	state = {
		planet:this.planet_init,
		newStateplanet : '',
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