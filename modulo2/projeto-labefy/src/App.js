import logo from './logo.svg';
import './App.css';
import react from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { render } from '@testing-library/react';
import React from 'react';
import NewPlaylist from "./components/newPlaylist"
import Playlist from './components/playlist';


const Global = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0;
`

const Navbar = styled.nav`
  display: flex;
  background: #69c7c4;
  flex: 1;
  padding: 1em;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;

`

const Content= styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex: 5;
  height: 100vh;
`

const NavButtons = styled.button`
  font-size: 16px;
  padding: 10px 24px;
  background: none;
  border: none;
  border-bottom: 1px solid black;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: black;
    color: white;
  }

`

const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 5px;
`

const H1 = styled.h1`
  font-size: 50px;
`

export default class App extends React.Component {

  state = {
    paginaAtual: "newPlaylist"
  }

  mudarNewPlaylist = () => {
    this.setState({paginaAtual: "newPlaylist"})
  }

  mudarPlaylist = () => {
    this.setState({paginaAtual: "playlist"})
  }

  render() {
    return (
      <Global>
        <Navbar>
          <DivButtons>
            <H1>Labify</H1>
            <NavButtons onClick={this.mudarPlaylist}>Playlists</NavButtons>
            <NavButtons onClick={this.mudarNewPlaylist}>Criar Playlists</NavButtons>
          </DivButtons>
          
          <footer>Rodapé</footer>
        </Navbar>
        <Content>
        {this.state.paginaAtual === "newPlaylist" ? <NewPlaylist /> : <Playlist />}
        </Content>
      </Global>
    )
  }
}
