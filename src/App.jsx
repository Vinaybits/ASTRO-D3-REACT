import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contentlayout from './layout/contentlayout';
import Topbar from './layout/topbar';
import Footer from './layout/footer';
import { GlobalProvider, GlobalContext } from './mycontext';
import HomePage from './components/HomePage';
import TransitionPlanets from './TransitionPlanets';
function App() {
  return (
    <>
     <GlobalProvider>
      
      <div id="wrapper">
        <Router>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/transition' component={TransitionPlanets} />
        </Router>
      </div>
      </GlobalProvider>
    </>
  );
}

export default App;
