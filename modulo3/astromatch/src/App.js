import './App.css';
import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import DiscoverPage from "./components/DiscoverPage/DiscoverPage"
import MatchPage from "./components/MatchPage/MatchPage"
import Buttons from "./components/DiscoverPage/Buttons"


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
      <Buttons
      gotMatchPage={gotMatchPage}
      />
      {renderSelectPage()}
    </div>

  );
}

export default App;
