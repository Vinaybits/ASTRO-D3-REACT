import React, { useState, useEffect , useRef} from 'react';
import Sideform from '../SideComponents/sideform'
// import Sideoptions from '../components/sideoptions';
// import Card3col from '../components/card3col';
// import Sidetable from '../components/sidetable';
// import Ploty_1 from '../d3/plotly_1';
import { GlobalContext } from '../mycontext';
import Holistic from '../d3/Holistic'
import Natal_chart_layout from '../d3/Panchang/Natal_chart_layout';
const Panchanglayout = () => {
  const context = React.useContext(GlobalContext)
  function currentView() {
  return ( <Holistic/>);
 }  


  return (
    <>
      <div className="content-page" style={{"paddingTop":"0px", "marginTop":"58px", "overflow":"hidden"}}>
        <div className="content">
          <div className="container-fluid" style={{"Width" : "100%", "maxWidth":"100%", "paddingRight":"0px"}}>
            <div className="row">
                  <div className="col-lg-2 col-md-12">
                    <div>
                      <Sideform view={"panchangView"}/>
                    </div>
                    {/* <div>
                      <Sidetable />
                    </div> */}
                  </div>




                  {/* <D3graph /> */}
                  {currentView()}
                  {/* <Plotly_NAKS/> */}
                  
                
                  
                  {/* <Sideoptions checkbox_status={planetnames} onchange_={onChange} player={loadData}/> */}
                  
                 
                 

                </div>
                {/* <div className="row">
                
                  <Card3col />
                  <Card3col />
                  <Card3col />

                </div> */}

          </div>
        </div>
      </div>
    </>

  );
};

export default Panchanglayout;