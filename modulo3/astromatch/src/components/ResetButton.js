import axios from "axios";
import React from "react";
import styled from "styled-components";

const ResetB = styled.button`
    height: 25px;
    width: 100px;
    border: none;
    border-radius: 34px;

    :hover {
        background-color: rgba(234, 31, 31, 1);
        transition: 0.5s;
    }
`


function ResetButton() {

    const onClickReset = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzoMachado/clear")
        .then((res) => {
            console.log(res)
        })
    }

    return(
        <div>
            <ResetB onClick={onClickReset}>ResetButton</ResetB>
        </div>
    )
}

export default ResetButton;