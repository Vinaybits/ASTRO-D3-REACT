import React from 'react';
import '../App.css';
import Panchanglayout from '../layout/Panchanglayout'
import Topbar from '../layout/topbar';
import Footer from '../layout/footer';


function TransitionPlanets() {
  return (
    <>
      <div id="wrapper" style={{overflow:"hidden", position:"absolute"}}>
        <Topbar />
       
        <Panchanglayout />

       <Footer />
      </div>
    </>
  );
}
export default TransitionPlanets;