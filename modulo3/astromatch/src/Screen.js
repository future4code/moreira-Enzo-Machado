import React from "react";
import styled from "styled-components";
import Content from "./components/Content";
import Header from "./components/Header";

const ScreenContent = styled.div`
    height: 720px;
    width: 400px;
    background-color: #fff;
    margin: 2em auto 2em;
    border-radius: 30px;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
`

function Screen() {
    return(
        <ScreenContent>
            <Header />
            <br></br>
            <Content />
        </ScreenContent>
    )
}

export default Screen;