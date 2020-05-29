import React, { Component, useEffect } from 'react';
import ErrorHandler from './components/error/ErrorHandler';
import RegisterForm from './components/register/registerForm';
import LoginForm from './components/login/loginForm';
import AdsList from './components/adslist';
import AdDetail from './components/addetail/addetail';
import AdEdit from './components/adedit/adedit';
import CreateAd from './components/createad';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchAds } from './store/actions';
//import { Router, Route, Switch } from 'react-router';
import { ADS_TAGS } from './constants';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  return (
    <ErrorHandler>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>
          <Route
            path="/ads/:filter?"
            render={props => (
              <AdsList
                tag={props.match.params.filter || ADS_TAGS.all}
                {...props}
              />
            )}
          ></Route>
          <Route path="/detail" component={AdDetail}/>
          <Route path="/edit" component={AdEdit}/>
          <Route 
            path="/createad"
            render={props => (
              <CreateAd 
                {...props}
              />
            )}
          />
          <Redirect to="/"/>
        </Switch>
      </Router>
    </ErrorHandler>
  );
}

/*class App extends Component {
  render() {
    return (
      <ErrorHandler>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
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
}*/

export default App;
