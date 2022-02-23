import React from "react";
import styled from "styled-components";

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    background-color: #ED8975;
    border-top-left-radius: 34px;
    border-top-right-radius: 34px;
`

const ChooseB = styled.button`
    height: 25px;
    width: 75px;
    border: none;
    border-radius: 34px;
`

const ListB = styled.button`
    height: 25px;
    width: 75px;
    border: none;
    border-radius: 34px;
`

function AppBar(props) {
    return(
        <AppBarContainer>
            <ChooseB onClick={props.gotChooseProfilePage}>Escolher</ChooseB>
            <h4>Tinder</h4>
            <ListB onClick={props.gotMatchListPage}>list</ListB>
        </AppBarContainer>
    )
}

export default AppBar;