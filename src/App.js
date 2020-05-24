import React, { Component } from 'react';
import ErrorHandler from './components/error/ErrorHandler';
import RegisterForm from './components/register/registerForm';
import LoginForm from './components/login/loginForm';
import AdsList from './components/adslist/adslist';
import AdDetail from './components/addetail/addetail';
import AdEdit from './components/adedit/adedit';
import CreateAd from './components/createad/createad';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
//import { Router, Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <ErrorHandler>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
            {/*<Route path="/ads" component={AdsList}/>*/}
            <Route
              path="/ads"
              render={props => (
                <AdsList
                  {...props}
                />
              )}
            ></Route>
            <Route path="/detail" component={AdDetail}/>
            <Route path="/edit" component={AdEdit}/>
            <Route path="/createad" component={CreateAd}/>
            <Redirect to="/"/>
          </Switch>
        </Router>
      </ErrorHandler>
    );
  }
}

export default App;
