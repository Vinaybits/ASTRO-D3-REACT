import React from 'react';
import './App.css';
import Natal_chart_layout from './d3/Panchang/Natal_chart_layout';
import Topbar from './layout/topbar';
import Footer from './layout/footer';


function TransitionPlanets() {
  return (
    <>
      <div id="wrapper">
        <Topbar />
       
        <Natal_chart_layout />

       <Footer />
      </div>
    </>
  );
}
export default TransitionPlanets;