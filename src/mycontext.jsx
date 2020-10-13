import React, { Component } from "react";
import axios from 'axios';

export const GlobalContext = React.createContext();

export class GlobalProvider extends Component {
	

	planet_init = [
		{
		  R: 190,
		  r: 7,
		  speed: -1.60,
		  phi0: 35,
		  color: 'white',
		  degree: -90,
		  name: "Mo",
		  moons: [] // mercury
		}, {
		  R: 280,
		  r: 7,
		  speed: -1.60,
		  phi0: 35,
		  color: 'yellow',
		  degree: -90,
		  name: "Sa",
		  moons: [] // mercury
		}, {
		  R: 205,
		  r: 7,
		  speed: -2.60,
		  phi0: 135,
		  color: 'orange',
		  degree: -90,
		  name: "Su",
		  moons: [] // mercury
		},
		{
		  R: 220,
		  r: 7,
		  speed: -1.60,
		  phi0: 25,
		  color: 'skyblue',
		  degree: -90,
		  name: "Me",
		  moons: [] // mercury
		},
		{
		  R: 235,
		  r: 7,
		  speed: -1.60,
		  phi0: 25,
		  color: 'red',
		  degree: -90,
		  name: "Ve",
		  moons: [] // mercury
		},
		{
		  R: 250,
		  r: 7,
		  speed: -1.60,
		  phi0: 25,
		  color: 'maroon',
		  degree: -90,
		  name: "Ma",
		  moons: [] // mercury
		}, {
		  R: 265,
		  r: 7,
		  speed: -1.60,
		  phi0: 25,
		  color: 'green',
		  degree: -90,
		  name: "Ju",
		  moons: [] // mercury
		},
		{
		  R: 295,
		  r: 7,
		  speed: -2.60,
		  phi0: 25,
		  color: 'purple',
		  degree: -90,
		  name: "Ra",
		  moons: [] // mercury
		},
		{
		  R: 310,
		  r: 7,
		  speed: 1.60,
		  phi0: 35,
		  color: 'grey',
		  degree: -90,
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
		
		var formatted_array = this.format_incoming_data(this.state.newState_apidata);
		this.setState({newStateplanet:formatted_array});
		
		//this.setState({apidataState:dummy_data.p_dates});
		// these fn go on page load or onmount state event 


		var length = formatted_array.length;
		window.t = setInterval(()=>{
			//set playicon to pause 
			this.setState({playicon:'fe-pause'});
			//set the position based on array 
			this.setState({planet:formatted_array[this.state.current_index]});
			//set date value 
			this.setState({apidataState:this.state.newState_apidata.p_dates[this.state.current_index]});
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
				 this.setState({apidataState:this.state.newState_apidata.p_dates[this.state.current_index]});
			   
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
			 this.setState({apidataState:this.state.newState_apidata.p_dates[this.state.current_index]});
		}
		else{
		 if(length > this.state.current_index){
			 // update the array index by 1 for next position
			 this.setState({current_index:this.state.current_index - 1});
			 //set the position based on array 
			  this.setState({planet:this.state.newStateplanet[this.state.current_index]});
			  //set Side table 
			  this.setState({apidataState:this.state.newState_apidata.p_dates[this.state.current_index]});
		 }
		}

	 }

	 call_daterange = (url)=> {
	// alert("hi" + url);

	 var config = {
        method: 'get',
        url: url,
        headers: { }
      };
	  
	  // always use arrow function otherwise this. will not work
      axios(config)
      .then((response) => {
		  //set for SIDETABLE
		  var api_data = JSON.stringify(response.data);
		  this.setState({newState_apidata:response.data});
		  this.setState({IsActive:'btn btn-dark waves-effect'});

		  //IsActive:' disabled'
		//console.log("Result"+JSON.stringify(response.data));
		//console.log(api_data);
      })
      .catch(function (error) {
        console.log("Result" + error);
	  });
	  


	 }


	state = {
		planet:this.planet_init,
		newStateplanet : '', // updated planet state after api call 
		apidataState : '', // set this 
		newState_apidata : '',
		current_index: 0,
		IsActive:'btn btn-dark waves-effect disabled', // class used for wheel buttons 
		prev: '',
		next: '',
		playicon:'fe-play',
		playplanet : this.play_array,
		pauseplanet : this.pause_array,
		forwardPlanet : this.forward_array,
		backwardPlanet: this.backward_array,
		callAPI_daterange: (url) => this.call_daterange(url),
		togglebutton: this.toggle
		
	};
	render() {
		return (
			<GlobalContext.Provider value={this.state}>
				{this.props.children}
			</GlobalContext.Provider>
		)
	}
}