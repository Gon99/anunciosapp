import React, { Component } from 'react';
import api from '../api/api';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

//const axios = require('axios').default;
const { loginUser } = api();
const { getAds } = api();

class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isLogged: null,
      username: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const loginResponse = await loginUser(this.state);
    if(loginResponse.success === true){
      this.setState({
        isLogged: true
      })
    }else{
      this.setState({
        isLogged: false
      })
    }
    const getAdsReq = getAds();
    console.log("resp",getAdsReq);
    /*console.log("repsuesta login: ",responseLogin);
    const getAdsReq = getAds();
    console.log("ADS:",getAdsReq);
    responseLogin.then(result => {
      if (result.success === true){ 
        this.setState({
          isLogged: true
        })
      }else{
        this.setState({
          isLogged: false
        })
      }
    })*/
  }

  handleUserInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    const isLogged = this.state.isLogged;
    let message;

    if (isLogged === true){
      message = <p style={{color:"#09E830"}}>You have been logged correctly</p>
    }else if(isLogged === false){
      message = <p style={{color:"#E8271C"}}>The user doesnt exist</p>;
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="username" value={this.state.name} onChange={this.handleUserInput}/>
          </label>
          <br></br>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleUserInput}/>
          </label>
          <br></br>
          <input type="submit" value="Submit"/>
          <p>Youre not registered, click <Link to="/register">here</Link></p>
          <p isLogged={isLogged}>{message}</p>
        </form>
      </div>
    );
  }
}

export default LoginUser;