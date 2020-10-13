import React from 'react';
import { GlobalProvider, GlobalContext } from '../mycontext';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';



const Plotlychart = (props) => {
    const context = React.useContext(GlobalContext)
   

   
   const show_chart = () => {
    var trace1 = {
        name : 'line1',
        x : ['1-3-2019','2-3-2019','3-3-2019','4-3-2019','5-3-2019', '6-3-2019'],
        y : [10,15,20,23,1,12],
        type: 'line',
        line:{
            color:'red'
        }
    };
    var trace2 = {
      name : 'line2',
      x : ['1-3-2019','2-3-2019','3-3-2019','4-3-2019','5-3-2019', '6-3-2019'],
      y : [12,17,2,12,10,22],
      type: 'line'
  };
  
  var data = [trace1,trace2];
  var layout = {
      showlegend : true
  }
  
   Plotly.newPlot('Chart_div',data,layout,{responsive:true, displaylogo:false});
   
   }


   

    return (
      <>
        <div className="col-lg-8">
          <div id="Plotlychart" className="col-lg-12">
            <div className="card">
              <div className="card-body" style={{ padding: "10px" }}>
                <div className="row">
                  <div className="col-lg-12">
                    <button onClick={show_chart}>hello</button>
                    <div id="Chart_div">
                      <Plot
                        data={[
                          {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: "scatter",
                            mode: "lines+markers",
                            marker: { color: "red" },
                            text:"hello",
                            
                          },
                          
                        ]}
                        layout={ { title: 'A Fancy Plot' , responsive: true }}

                       
                      />
                    </div>
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