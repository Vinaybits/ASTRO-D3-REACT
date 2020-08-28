import React from 'react';
import Chart1 from '../d3/chart';


const D3graph =(props) =>{
    return(
        <>
         <div id="d3graph" className="col-lg-7">
                                            <div className="card">
                                                <div className="card-body">
            
                                                    <h4 className="header-title">D3</h4>
                                                   
            <Chart1 data={props.planetsdata}/>
                                                  
            
                                                </div> 
                                            </div> 
                                        </div> 

        </>
    );
};

export default D3graph;