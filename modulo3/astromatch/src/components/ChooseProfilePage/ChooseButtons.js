import React from "react";
import styled from "styled-components";

const ButtonsBox = styled.div`
    border: 1px solid purple;
    display: flex;
    justify-content: space-around;
    margin: 16px;
`

function ChooseButtons() {
    return(
        <ButtonsBox>
            <button>Não</button>
            <button>Sim</button>
        </ButtonsBox>
    )
}

export default ChooseButtons;