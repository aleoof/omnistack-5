import React, { Component } from 'react';

import './Login.css'

import twitterLogo from '../twitter.svg'


export default class pages extends Component {
state = {
  userName: '',
}

handleInputChange = (e) => {
  this.setState({
    userName: e.target.value
  })
}

handleSubmit= (e) =>{
  e.preventDefault();

  const { userName } = this.state;

  if(!userName.length) return;

  localStorage.setItem('@goTwitter:name', userName);

  this.props.history.push('/timeline')
}

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="logo"/>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Nome do usuário" value={this.state.userName} onChange={this.handleInputChange}></input>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
