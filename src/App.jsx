import React from 'react';
import logo from './logo.svg';
import './App.css';

import Contentlayout from './layout/contentlayout';
import Topbar from './layout/topbar';
import Navbar from './layout/navbar';
import Footer from './layout/footer';

function App() {
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

export default App;
