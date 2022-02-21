import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content"

const ScreenContent = styled.div`
    position: absolute;
    width: 494px;
    height: 921px;
    left: 423px;
    top: 51px;
`

function Screen() {
    return(
        <ScreenContent>
            <Header />
            <Content />
        </ScreenContent>
    )
}

export default Screen;