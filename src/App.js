import React from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <h2 className="mb-3">Base component</h2>
        <Redirect from='/' exact to='/Login/'/>
        <Route path='/Login/' exact component={Login}/>
        <Route path='/Home/' exact component={Home}/>
      </Router>
    </div>    
  );
}

export default App;
