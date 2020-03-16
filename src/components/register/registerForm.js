import React, { Component } from 'react';
import api from '../api/api';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

const { registerUser } = api();
let serverResponse = {
  message: ''
}

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isRegistered: null
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    const responseRegister = registerUser(this.state);
    console.log("antes del then: ",responseRegister);
    responseRegister.then(result => {
      if (result.success === true) {
        this.setState({
          isRegistered: true
        })
      }else {
        serverResponse.message = result.error;
        this.setState({
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
    }else if(isRegistered === false){
      message = <p style={{color:"#E8271C"}}>{serverResponse.message}</p>;
    }
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="username" value={this.state.name} onChange={this.handleUserInput}/>
          </label>
          <br></br>
          <label>
            Password
            <input type="password" name="password" value={this.state.password} onChange={this.handleUserInput}/>
          </label>
          <br></br>
          <input type="submit" value="Submit"/>
          <p>You are already registered, click <Link to="/login">here</Link></p>
          <p id="registered" isRegistered={isRegistered}>{message}</p>
        </form>
      </div>
    );
  }
}

export default RegisterUser;