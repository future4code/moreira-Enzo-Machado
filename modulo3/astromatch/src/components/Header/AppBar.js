import React from "react";
import styled from "styled-components";

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid red;
    align-items: center;
    padding: 0px 8px;
`

function AppBar(props) {
    return(
        <AppBarContainer>
            <button onClick={props.gotChooseProfilePage}>Escolher</button>
            <h4>astroMatch</h4>
            <button onClick={props.gotMatchListPage}>list</button>
        </AppBarContainer>
    )
}

export default AppBar;