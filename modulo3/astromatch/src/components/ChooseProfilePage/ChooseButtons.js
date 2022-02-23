import axios from "axios";
import React from "react";
import styled from "styled-components";

const ButtonsBox = styled.div`
    border: 1px solid purple;
    display: flex;
    justify-content: space-around;
    margin: 16px;
`

function ChooseButtons(props) {
    return(
        <ButtonsBox>
            <button onClick={props.onClickNo}>Não</button>
            <button onClick={props.onClickYes}>Sim</button>
        </ButtonsBox>
    )
}

export default ChooseButtons;