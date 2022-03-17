import React from "react";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    margin-top: 55px;
`

const YesButton = styled.button`
    height: 69.57px;
    width: 101.57px;
    background-color: #F57280;
    border-radius: 35px;
    border: none;

    &:hover {
        background-color: #BA5761;
    }
`

const NoButton = styled.button`
    height: 69.57px;
    width: 101.57px;
    background-color: #6C7B8F;
    border-radius: 35px;
    border: none;

    &:hover {
        background-color: #4E5866;
    }
`

const MatchList = styled.button`
    height: 34.785px;
    width: 50.785px;
    background-color: #9AB5C0;
    border-radius: 35px;
    border: none;
    margin: 10px;
    
    &:hover {
        background-color: #748991;
    }
`


function Buttons(props) {
    return(
        <Container>
            <NoButton onClick={props.onClickNo}>No</NoButton>
            <YesButton onClick={props.onClickYes}>Yes</YesButton>
        </Container>
    )
}

export default Buttons;