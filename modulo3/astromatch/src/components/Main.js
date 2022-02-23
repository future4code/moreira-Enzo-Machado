import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfilePage from "./ChooseProfilePage/ProfilePage";
import AppBar from "./Header/AppBar";
import MatchList from "./MatchList/MatchListPage";
import styled from "styled-components";

const MainContainer = styled.div`
    margin: 30px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 720px;
    width: 422px;
    display: flex;
    flex-direction: column;
`


function Main() {

    const [selectPage, setSelectPage] = useState('choose-profile')

    const renderSelectPage = () => {
        switch(selectPage) {
            case 'choose-profile':
                return <ProfilePage />
            case 'match-list':
                return <MatchList />
            default:
                <ProfilePage />
        }
    }

    const gotChooseProfilePage = () => {
        setSelectPage('choose-profile')
    }

    const gotMatchListPage = () => {
        setSelectPage('match-list')
    }

    return(
        <MainContainer>
            <AppBar 
            gotChooseProfilePage={gotChooseProfilePage} 
            gotMatchListPage={gotMatchListPage}
            />
            {renderSelectPage()}
        </MainContainer>
    )
}

export default Main;