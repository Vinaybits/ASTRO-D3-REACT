import React from 'react';
import '../App.css';

import Contentlayout from '../layout/contentlayout';
import Topbar from '../layout/topbar';
import Footer from '../layout/footer';


function TransitionPlanets() {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  return (
    <>
      <div id="wrapper">
        <Topbar />
       
        <Contentlayout />

       <Footer />
      </div>
    </>
  );
}
export default TransitionPlanets;