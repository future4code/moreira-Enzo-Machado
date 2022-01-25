import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Login from "./components/Login"
import Users from "./components/Users"
import React from 'react';

export default class App extends React.Component {
  state = {
    paginaAtual: "login"
  }

  mudarPagina = () => {
    if (this.state.paginaAtual === "login") {
      this.setState({paginaAtual: "Users"})
    } else {
      this.setState({paginaAtual: "login"})
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.mudarPagina}>Ver Users</button>
        {this.state.paginaAtual === "login" ? <Login /> : <Users /> }
      </div>
    );
  }
}
  
