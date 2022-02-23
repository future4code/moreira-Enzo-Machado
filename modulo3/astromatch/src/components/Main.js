import React from "react";
import ProfilePage from "./ChooseProfilePage/ProfilePage";
import AppBar from "./Header/AppBar";
import MatchList from "./MatchList/MatchListPage";
import styled from "styled-components";

const MainContainer = styled.div`
    border: 1px solid black;
    border-radius: 10px;
`


function Main() {
    return(
        <MainContainer>
            <AppBar />
            <ProfilePage />
            {/*<MatchList />*/}
        </MainContainer>
    )
}

export default Main;