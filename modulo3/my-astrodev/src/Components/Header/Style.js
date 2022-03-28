import styled from "styled-components"

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1{
        margin-right: 50px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    a {
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
            color: #D6FAF9;
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

        :hover {
            background: #869d9c;
        }
    }
`