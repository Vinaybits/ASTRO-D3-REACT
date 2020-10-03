import React from 'react';
import './App.css';

import Contentlayout from './layout/contentlayout';
import Topbar from './layout/topbar';
import Footer from './layout/footer';
import { GlobalProvider, GlobalContext } from './mycontext';

function App() {
  return (
    <>
     <GlobalProvider>
      <div id="wrapper">
        <Topbar />
       
        <Contentlayout />

       <Footer />
      </div>
      </GlobalProvider>
    </>
  );
}

export default App;
