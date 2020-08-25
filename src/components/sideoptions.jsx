import React, { Component } from 'react';
import BarChart from '../d3/chart';
import './sideoption.css';

class Sideoptions extends Component{
    state = {
        Su : true,
        Mo : true,
        Me : true,
        Ve : true,
        Ma : true,
        Ju : true,
        Sa : true,
        Ra : true,
        Ke : true
        

    };

    onChange = (e) =>{
        console.log("checked");
        this.setState({[e.target.name] : e.target.checked});
        
    }



    render(){
        const {Su,Mo,Me,Ve,Ma,Ju,Sa,Ra,Ke} = this.state;
       
        return(
           
     <div class="col-lg-2">
                                                <div class="card">
                                                    <div class="card-body">
                
                                                        <h4 class="header-title">Filter</h4>
                                                        <p class="sub-header">
                                                            Filter using below options
                                                            <button onClick={this.onChange}>Click Me</button>
                                                        </p>
                                                       <div className="form-group">
                                                           <div className="mb-1 custom-checkbox">
                                                               <input type="checkbox" className="mr-1"
                                                                checked={Su}
                                                                onChange={this.onChange} 
                                                                name="Su"/>
                                                                 <label> Sun </label>

                                                                
                                                              
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Mo}
                                                                onChange={this.onChange}
                                                                id="2" name="Mo"
                                                                
                                                                ></input>
                                                               <label > Moon </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Me}
                                                                onChange={this.onChange} id="3" name="Me"></input>
                                                               <label > Mercury </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Ve}
                                                                onChange={this.onChange} id="4" name="Ve"></input>
                                                               <label > Venus </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Ma}
                                                                onChange={this.onChange} id="5" name="Ma"></input>
                                                               <label > Mars </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Ju}
                                                                onChange={this.onChange} id="6" name="Ju"></input>
                                                               <label > Jupiter </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Sa}
                                                                onChange={this.onChange} id="7" name="Sa"></input>
                                                               <label > Saturn </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Ra}
                                                                onChange={this.onChange} id="8" name="Ra"></input>
                                                               <label > Rahu </label>
                                                           </div>
                                                           <div className="custom-checkbox mb-1">
                                                               <input type="checkbox" className="mr-1" checked={Ke}
                                                                onChange={this.onChange} id="9" name="Ke"></input>
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