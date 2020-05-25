import React from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h2>Base component</h2>
      <Redirect from='/' exact to='/Login/'/>
      <Route path='/Login/' exact component={Login}/>
      <Route path='/Home/' exact component={Home}/>
    </BrowserRouter>
  );
}

export default App;
