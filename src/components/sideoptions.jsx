import React, { Component } from 'react';
import BarChart from '../d3/chart';
import './sideoption.css';

class Sideoptions extends Component{

    constructor(props){
        super(props);
        this.state = {
            innitialState : this.props.checkbox_status
           
            
    
        };
       

    }

    render(){
        const Su = this.state.innitialState[0].value;
        const Mo = this.state.innitialState[1].value;
        const Me = this.state.innitialState[2].value;
        const Ve = this.state.innitialState[3].value;
        const Ma = this.state.innitialState[4].value;
        const Ju = this.state.innitialState[5].value;
        const Sa = this.state.innitialState[6].value;
        const Ra = this.state.innitialState[7].value;
        const Ke = this.state.innitialState[8].value;

       // const {Su,Mo,Me,Ve,Ma,Ju,Sa,Ra,Ke} = this.state.planet_filter_names;
       
        return(
           
     <div class="col-lg-2">
                                                <div class="card">
                                                    <div class="card-body">
                
                                                        <h4 class="header-title">Filter</h4>
                                                        <p class="sub-header">
                                                            Filter using below options
                                                            <button>Click Me</button>
                                                        </p>
                                                       <div className="form-group">
                                                           <div className="mb-1 custom-checkbox">
                                                               <input type="checkbox" className="mr-1"
                                                                checked={Su}
                                                                onChange={() => this.props.onchange_('0')} 
                                                                name="Su" id="0"/>
                                                                 <label> Sun </label>

                                                                
                                                              
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Mo}
                                                                onChange={() => this.props.onchange_('1')}
                                                                id="2" name="Mo"  ></input>
                                                               <label > Moon </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox"
                                                                className="mr-1"
                                                                checked={Me}
                                                                onChange={() => this.props.onchange_('2')} 
                                                               
                                                                id="3" 
                                                                name="Me"></input>
                                                               <label > Mercury </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Ve}
                                                                onChange={() => this.props.onchange_('3')} id="4" name="Ve"></input>
                                                               <label > Venus </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Ma}
                                                                onChange={() => this.props.onchange_('4')} id="5" name="Ma"></input>
                                                               <label > Mars </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Ju}
                                                                onChange={() => this.props.onchange_('5')} id="6" name="Ju"></input>
                                                               <label > Jupiter </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Sa}
                                                                onChange={() => this.props.onchange_('6')} id="7" name="Sa"></input>
                                                               <label > Saturn </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Ra}
                                                                onChange={() => this.props.onchange_('7')} id="8" name="Ra"></input>
                                                               <label > Rahu </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Ke}
                                                                onChange={() => this.props.onchange_('8')} id="9" name="Ke"></input>
                                                               <label > Ketu </label>
                                                           </div>
                                                       </div>
                
                                                      
                
                                                    </div> 
                                                </div> 
                                            </div> 
            
        );

    }
    
};


export default Sideoptions;