import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import Results from './pages/Results';
import Loading from './pages/Loading';

function App() {
  return (
      <Router>
        <Switch>
            {/* Maybe add navbar for regulator-sub pages then users-mfg pages*/}
            <Route path="/">
                <Login />
            </Route>
            <Route path="/loading">
                <Loading />
            </Route>
            <Route path="/results">
                <Results />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
