import styled from "styled-components"

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    
    h1{
        margin-right: 50px;
    }

    div {
        display: flex;
        align-items: center;
        margin: 0 15px 0 15px;
    }

    a {
        margin: 0 15px 0 15px;
        cursor: pointer;
    }

    input {
        border-radius: 5px;
        border: 5px solid #D6FAF9;
        background: transparent;
        padding: 15px;

        ::-webkit-input-placeholder {
            color: #D6FAF9;
            font-size: 15px;
        }

        :focus {
            outline: none;
        }
    }

    button {
        cursor: pointer;
        background: #D6FAF9;
        border-radius: 5px;
        border: none;
        padding: 20px;
        width: 100px;
        font-weight: bold;
    }
`

export const NavInput = styled.div`

    button {
        margin: 10px;
    }
`