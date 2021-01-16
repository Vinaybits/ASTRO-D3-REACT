import React, { Component } from "react";
import axios from 'axios';

export const GlobalContext = React.createContext();

export class GlobalProvider extends Component {
	

	planet_init = [
		{
		  R: 195,
		  r: 7,
		  speed: -1.60,
		  phi0: 35,
		  color: 'white',
		  degree: -90,
		  name: "Mo",
		  moons: [] // mercury
		}, {
		  R: 285,
		  r: 7,
		  speed: -1.60,
		  phi0: 35,
		  color: 'yellow',
		  degree: -90,
		  name: "Sa",
		  moons: [] // mercury
		}, {
		  R: 210,
		  r: 7,
		  speed: -2.60,
		  phi0: 135,
		  color: 'orange',
		  degree: -90,
		  name: "Su",
		  moons: [] // mercury
		},
		{
		  R: 225,
		  r: 7,
		  speed: -1.60,
		  phi0: 25,
		  color: 'skyblue',
		  degree: -90,
		  name: "Me",
		  moons: [] // mercury
		},
		{
		  R: 240,
		  r: 7,
		  speed: -1.60,
		  phi0: 25,
		  color: 'red',
		  degree: -90,
		  name: "Ve",
		  moons: [] // mercury
		},
		{
		  R: 255,
		  r: 7,
		  speed: -1.60,
		  phi0: 25,
		  color: 'maroon',
		  degree: -90,
		  name: "Ma",
		  moons: [] // mercury
		}, {
		  R: 270,
		  r: 7,
		  speed: -1.60,
		  phi0: 25,
		  color: 'green',
		  degree: -90,
		  name: "Ju",
		  moons: [] // mercury
		},
		{
		  R: 300,
		  r: 7,
		  speed: -2.60,
		  phi0: 25,
		  color: 'purple',
		  degree: -90,
		  name: "Ra",
		  moons: [] // mercury
		},
		{
		  R: 315,
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
		this.setState({showTable: true});
		//this.setState({apidataState:dummy_data.p_dates});
		// these fn go on page load or onmount state event 


		var length = formatted_array.length;
		window.t = setInterval(()=>{
			//set playicon to mdi mdi-pause
			this.setState({playicon:'mdi mdi-pause'});
			//set the position based on array 
			this.setState({planet:formatted_array[this.state.current_index]});
			//set date value 
			this.setState({apidataState:this.state.newState_apidata.p_dates[this.state.current_index]});
			// update the array index by 1 for next position
			this.setState({current_index:this.state.current_index+1});

			if(this.state.current_index === length){
				//console.log(this.state.current_index + " - " + length);
				clearInterval(window.t);
				this.setState({playicon:'mdi mdi-play'});
				this.setState({current_index:0});
			  }

		},(this.state.play_speed * 1000))

	 }

	 pause_array=() =>{
		clearInterval(window.t);
		this.setState({playicon:'mdi mdi-play'});
		
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
			this.setState({playicon:'mdi mdi-play'});
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

	 call_daterange = (url,city,str_date,end_date)=> {

	 var config = {
        method: 'get',
        url: url,
        headers: { }
      };
	  this.setState({IsLoading:true})
	  // always use arrow function otherwise this. will not work
      return axios(config)
      .then((response) => {
		  //set for SIDETABLE
		  var api_data = JSON.stringify(response.data);
		  this.setState({newState_apidata:response.data});
		  console.log(this.state.newState_apidata)
		  this.setState({IsActive:'btn btn-dark waves-effect'});
		  //set place  of observation in sidetable 
		  this.setState({placeobserved:city});	
		  //IsActive:' disabled'
		  this.setState({IsLoading:false})
		  this.playSpeed(1);
		  this.setState({dataLoaded: true});
		  
		  // set start and end date for future use 
		  this.setState({startDate:str_date});
		  this.setState({endDate:end_date});



          return true;
		//console.log("Result"+JSON.stringify(response.data));
		//console.log(api_data);
      })
      .catch(function (error) {
		console.log("Result" + error);
		this.setState({IsLoading:false});
	  });
	  }




	 playSpeed = (sec) =>{

		 this.setState({play_speed : sec});

	 }
	 changeView =(value)=>{
		// alert(value);
		this.setState({currentView:value})

	 }

	 set_PanchangDate = (date,city) =>
	 {
		 this.setState({IsLoading:true})
		 this.setState({panchangDate:date})
		 this.setState({placeobserved:city});	
		 this.setState({IsLoading:false})
	 }


	state = {
		planet:this.planet_init,
		showTable:false,
		newStateplanet : '', // updated planet state after api call 
		apidataState : '', // set this 
		newState_apidata : '',
		current_index: 0,
		IsActive:'btn btn-dark waves-effect disabled', // class used for wheel buttons 
		currentView: 'circle_graph',
		changeView: (value) => this.changeView(value),
		playicon:'mdi mdi-play',
		playplanet : this.play_array,
		play_speed_fn : (seconds) => this.playSpeed(seconds),
		play_speed : 1,
		pauseplanet : this.pause_array,
		forwardPlanet : this.forward_array,
		backwardPlanet: this.backward_array,
		callAPI_daterange: (url,city, str_date,end_date) => this.call_daterange(url,city,str_date,end_date),
		set_Panchang_Date: (panchangDate,city) => this.set_PanchangDate(panchangDate,city),
		callAPI_Journey_daterange: (url,city, str_date,end_date) => this.call_daterange_journey(url,city,str_date,end_date),
		togglebutton: this.toggle,
		placeobserved:null,
		startDate:'',
		endDate:'',
		panchangDate:null,
		IsLoading:false
	};

	render() {
		return (
			<GlobalContext.Provider value={this.state}>
				{this.props.children}
			</GlobalContext.Provider>
		)
	}
}