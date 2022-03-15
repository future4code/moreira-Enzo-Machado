import React from "react";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 55px;
`

const YesButton = styled.button`
    height: 69.57px;
    width: 101.57px;
    background-color: #F57280;
    border-radius: 35px;
    border: none;
`

const NoButton = styled.button`
    height: 69.57px;
    width: 101.57px;
    background-color: #6C7B8F;
    border-radius: 35px;
    border: none;
    margin-right: 75px;
`

const MatchList = styled.button`
    height: 34.785px;
    width: 50.785px;
    background-color: #9AB5C0;
    border-radius: 35px;
    border: none;
    margin: 10px;
    position: absolute;
    top: 735px;
    left: 436px;
    
`


function Buttons(props) {
    return(
        <Container>
            <NoButton onClick={props.onClickNo}>No</NoButton>
            <MatchList onClick={props.gotMatchPage}>List</MatchList>
            <YesButton onClick={props.onClickYes}>Yes</YesButton>
        </Container>
    )
}

export default Buttons;