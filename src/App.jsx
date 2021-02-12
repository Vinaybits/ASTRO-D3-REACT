import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalProvider} from './mycontext';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
     <GlobalProvider>
      
      <div id="wrapper">
        <Router >
            <Route exact path='/' component={HomePage} />
            <Route exact path='/Dashboard' component={Dashboard} />
        </Router>
      </div>
      </GlobalProvider>
    </>
  );
}

export default App;
