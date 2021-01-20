import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalProvider, GlobalContext } from './mycontext';
import HomePage from './components/HomePage';
import TransitionPlanets from './ComponentHomePages/TransitionHome';
import PanchangHome from './ComponentHomePages/PanchangHome'
function App() {
  return (
    <>
     <GlobalProvider>
      
      <div id="wrapper">
        <Router >
            <Route exact path='/' component={HomePage} />
            <Route exact path='/transition' component={TransitionPlanets} />
            <Route exact path='/panchang' component={PanchangHome} />
        </Router>
      </div>
      </GlobalProvider>
    </>
  );
}

export default App;
