import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalProvider, GlobalContext } from './mycontext';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard'
import TransitionPlanets from './ComponentHomePages/TransitionHome';
import PanchangHome from './ComponentHomePages/PanchangHome'
import Dash_Panchang from './components/Dash-Panchang';
function App() {
  return (
    <>
     <GlobalProvider>
      
      <div id="wrapper">
        <Router >
            <Route exact path='/' component={HomePage} />
            <Route exact path='/transition' component={Dashboard} />
            <Route exact path='/panchang' component={PanchangHome} />
            <Route exact path='/panchang_dash' component={Dash_Panchang} />
        </Router>
      </div>
      </GlobalProvider>
    </>
  );
}

export default App;
