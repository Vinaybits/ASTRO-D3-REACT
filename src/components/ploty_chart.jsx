import React from 'react';
import { GlobalProvider, GlobalContext } from '../mycontext';
import Plot from 'react-plotly.js'
import { Plots } from 'plotly.js';



const Plotlychart = (props) => {
    const context = React.useContext(GlobalContext)
   
  

   

    return (
        <>

            <div className="col-lg-8">




                <div id="Plotlychart" className="col-lg-12"  >
                    <div className="card">

                        <div className="card-body" style={{ "padding": "10px" }}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Plot
                                    data =
                                    {[
                                            {
                                            x: [0,1,2,3,4,5,6,7],
                                            y: [10,9,7,5,5,4,2,9],
                                            type: 'scattergl',
                                            marker: {color:'red'},
                                            name : 'Demo chart'
                                            } 
                                        
                                        ]}
                                    Layout = {{
                                        title:'red'
                                    }}
                                    />
                                </div>
                               
                            </div>




                        </div>
                    </div>
                </div>


            </div>



        </>
    );
};

export default Plotlychart;