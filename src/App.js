import React, { Component } from 'react';
import ErrorHandler from './components/error/ErrorHandler';
import RegisterForm from './components/register/registerForm';
import LoginForm from './components/login/loginForm';
import AdsList from './components/adslist/adslist';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter } from "react-router-dom";
//import { Router, Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <ErrorHandler>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
            <Route path="/ads" component={AdsList}/>
            <Redirect to="/"/>
          </Switch>
        </Router>
      </ErrorHandler>
    );
  }
}

export default App;
