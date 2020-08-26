import React from 'react';
import Chart1 from '../d3/chart';


const D3graph =(props) =>{
    return(
        <>
         <div class="col-lg-7">
                                            <div class="card">
                                                <div class="card-body">
            
                                                    <h4 class="header-title"></h4>
                                                   
            <Chart1 data={props.planetsdata}/>
                                                  
            
                                                </div> 
                                            </div> 
                                        </div> 

        </>
    );
};

export default D3graph;