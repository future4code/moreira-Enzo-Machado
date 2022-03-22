import styled from "styled-components"


export const Barra = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid gray;
    margin: 0 3rem;
    font-family: 'Montserrat', sans-serif;

    div {
        display: flex;
        align-items: center;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }

    input {
        border: none;
        padding: 15px;
        border-radius: 35px;
        width: 450px;
        background-color: #2F3740;

        ::placeholder {
            color: #f5f9f8;
        }
    }

    h1 {
        margin-right: 25px;
        cursor: pointer;
    }

    a {
        margin: 15px;
        cursor: pointer;
    }
`