import React, { Component } from 'react';
import api from '../api/api';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

const { registerUser } = api();

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isRegistered: null,
      serverResponse: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    const responseRegister = registerUser(this.state);
    responseRegister.then(result => {
      if (result.success === true) {
        this.setState({
          isRegistered: true
        })
      }else {
        this.setState({
          serverResponse: result.error,
          isRegistered: false
        })
      }
    })
    event.preventDefault();
  }

  handleUserInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    const isRegistered = this.state.isRegistered;
    let message;

    if (isRegistered === true) {
      message = <p style={{color:"#09E830"}}>The user has been registered correctly</p>
    }else {
      message = <p style={{color:"#E8271C"}}>{this.state.serverResponse}</p>;
    }
    return (
      <div className="center">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div class="inputDiv">
            <input placeholder="Write your username" type="text" name="username" value={this.state.name} onChange={this.handleUserInput}/>
          </div>
          <div class="inputDiv">
            <input placeholder="Write your password" type="password" name="password" value={this.state.password} onChange={this.handleUserInput}/>
          
          <input className="submit" type="submit" value="Submit"/>
          <p>You are already registered, click <Link to="/">here</Link></p>
          <p id="registered" isRegistered={isRegistered}>{message}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterUser;