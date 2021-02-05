import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalProvider} from './mycontext';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard'

import Dash_Panchang from './components/Dash-Panchang';
import D3graph from './components/d3graph';
function App() {
  return (
    <>
     <GlobalProvider>
      
      <div id="wrapper">
        <Router >
            <Route exact path='/' component={HomePage} />
            <Route exact path='/TransitionDashboard' component={Dashboard} />
            <Route exact path='/PanchangDashboard' component={Dash_Panchang} />
            <Route exact path='/galactic' component={D3graph} />
        </Router>
      </div>
      </GlobalProvider>
    </>
  );
}

export default App;
