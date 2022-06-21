import './App.css';
import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import DiscoverPage from "./components/DiscoverPage/DiscoverPage"
import MatchPage from "./components/MatchPage/MatchPage"

const Screen = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Discover = styled.button`
    background-color: #FED8DD;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    border: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size: 35px;

    &:hover {
        background-color: #6C7B8F;
    }
`

const Match = styled.button`
    background-color: #FED8DD;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    border: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size: 35px;

    &:hover {
        background-color: #6C7B8F;
    }
`


function App() {

  const [selectPage, setSelectPage] = useState('choose-profile')

  const renderSelectPage = () => {
    switch(selectPage) {
      case 'choose-profile':
        return <DiscoverPage />
      case 'match-list':
        return <MatchPage />
      default:
        <DiscoverPage />   
    } 
  }

  const gotDiscoverPage = () => {
      setSelectPage('choose-profile')
  }

  const gotMatchPage = () => {
      setSelectPage('match-list')
  }

  return (
    <div className='AppDiv'>
      <Screen>
        <Discover onClick={gotDiscoverPage}>⇦</Discover>
        {renderSelectPage()}
        <Match onClick={gotMatchPage}>⇨</Match>
      </Screen>
    </div>

  );
}

export default App;
