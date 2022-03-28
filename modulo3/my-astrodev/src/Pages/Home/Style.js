import styled from "styled-components"

export const HomeHead = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    border-top: 2px solid #91BFB6;
    margin-left: 50px;
    margin-right: 50px;

    div {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h1 {
        font-size: 64px;
        font-weight: 600px;
        margin-top: 150px;
        margin-bottom: 0px;
    }

    h4 {
        font-size: 28px;
    }

    img {
        position: absolute;
        right: 75px;
        top: 300px;
    }
`

export const Buttons = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    a {
        cursor: pointer;
        color: black;
        background: #D6FAF9;
        border-radius: 5px;
        border: none;
        padding: 20px;
        display: flex;
        flex-direction: column; 
        align-items: center;
        width: 200px;
        font-weight: bold;

        :hover {
            background: #869d9c;
        }
    }
    button {
        border-radius: 50%;
        border: none;
        background: #D6FAF9;
        width: 75px;
        height: 75px;
        cursor: pointer;

        :hover {
            background: #869d9c;
        }
    }
`

export const Box = styled.section`
    box-sizing: border-box;
    border: 25px solid #96C6C0;
    width: 450px;
    height: 550px;
    position: absolute;
    right: 150px;
    top: 150px;
`