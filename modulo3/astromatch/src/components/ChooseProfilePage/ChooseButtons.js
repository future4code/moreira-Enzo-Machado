import axios from "axios";
import React from "react";
import styled from "styled-components";
import { CloseIcon, StarIcon } from '@chakra-ui/icons'

const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 16px;
    padding: 8px; 
`

const NoButton = styled.button`
    height: 50px;
    width: 100px;
    border: none;
    border-radius: 34px;
    font-size: 20px;

    :hover {
        background-color: rgba(234, 31, 31, 0.7);
        transition: 0.5s;
    }
`

const YesButton = styled.button`
    height: 50px;
    width: 100px;
    border: none;
    border-radius: 34px;
    font-size: 20px;

    :hover {
        background-color: rgba(63, 191, 63, 0.7);
        transition: 0.5s;
    }
`

function ChooseButtons(props) {
    return(
        <ButtonsBox>
            <NoButton onClick={props.onClickNo}><CloseIcon/></NoButton>
            <YesButton onClick={props.onClickYes}><StarIcon/></YesButton>
        </ButtonsBox>
    )
}

export default ChooseButtons;