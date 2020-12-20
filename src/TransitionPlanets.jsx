import React from 'react';
import './App.css';

import Contentlayout from './layout/contentlayout';
import Topbar from './layout/topbar';
import Footer from './layout/footer';


function TransitionPlanets() {
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