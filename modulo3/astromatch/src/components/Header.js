import styled from 'styled-components';
import React from 'react';

const Top = styled.div`
    height: 105px;
    background-color: purple;
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    
    h2 {
        position: relative;
        left: 15px;
    }

    a {
        position: relative;
        right: 20px;
        cursor: pointer;
    }
`

function Header() {
    return(
        <Top>
            <h2>Astromatch</h2>
            <a>Icon</a>
        </Top>
    )
}

export default Header