import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Generator from './components/Generator'
import Error from './components/Error'
import Home from './components/Home'
import Result from './components/Result'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/generator" component={Generator} />
        <Route path="/error" component={Error} />
        <Route path="/result" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
