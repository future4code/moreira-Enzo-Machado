import React from "react"
import styled from "styled-components"
import axios from "axios"

import Login from "./components/Login"
import Users from "./components/Users"

const Screen = styled.div`
  background-color: #FFB2A6;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const SeeUsers = styled.button`
  border: none;
  font-size: 20px;
  border-radius: 10px;
  height: 50px;
  width: 125px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: #9ADCFF;
  transition: 0.1s;

  &:hover {
    background-color: #85BFDE;
  }
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
    return(
      <Screen>
        {this.state.paginaAtual === "login" ? <Login /> : <Users />}
        <SeeUsers onClick={this.mudarPagina}>Users</SeeUsers>
      </Screen>
    )
  }
}