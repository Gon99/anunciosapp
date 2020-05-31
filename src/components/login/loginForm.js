import React, { useState } from 'react';
import api from '../api/api';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import './loginForm.css';
import { useDispatch } from 'react-redux';
import { fetchLoginUser } from '../../store/actions';

function loginUserRequest(event, data, dispatch) {
  event.preventDefault();
  dispatch(fetchLoginUser(data));
}

export default function LoginUser(){
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  return (
    <div className="center">
        <h1>Login</h1>
        <form onSubmit={e => loginUserRequest(e, state, dispatch)}>
          <div className="inputDiv">
            <input placeholder="Write your username" type="text" name="username" onChange={e => setState({...state, username: e.target.value})}/>
          </div>
          <div className="inputDiv">
            <input placeholder="Write your password" type="password" name="password" onChange={e => setState({...state, password: e.target.value})}/>
          </div>
          <input className="submit" type="submit" value="Submit"/>
        </form>
      </div>
  );
}
/*class LoginUser extends Component {
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

  handleSubmit = async (event, props) => {
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
    this.props.history.push("/ads");
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
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="inputDiv">
            <input placeholder="Write your username" type="text" name="username" value={this.state.name} onChange={this.handleUserInput}/>
          </div>
          <div className="inputDiv">
            <input placeholder="Write your password" type="password" name="password" value={this.state.password} onChange={this.handleUserInput}/>
          </div>
          <input className="submit" type="submit" value="Submit"/>
          <p>Youre not registered, click <Link to="/register">here</Link></p>
          <p isLogged={isLogged}>{message}</p>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginUser);*/