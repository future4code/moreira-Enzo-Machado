import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Login from "./components/Login"
import Users from "./components/Users"
import React from 'react';
import styled from "styled-components"

const Div = styled.div`
  background-color: #6C7A89;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  font-size: 12px;
  padding: 5px 15px;
  background-color: #6C7A89;
  border-color: darkred; 
`

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
      <Div>
        <Button onClick={this.mudarPagina}>Ver Users</Button>
        {this.state.paginaAtual === "login" ? <Login /> : <Users /> }
      </Div>
    );
  }
}
  
