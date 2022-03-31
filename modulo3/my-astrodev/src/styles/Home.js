import styled from "styled-components"

export const Container = styled.div`
    border-top: 1px solid #96C6C0;
    font-family: 'Montserrat', sans-serif;
    margin: 1rem 6rem;
    display: flex;
    align-items: center;
    gap: 6rem;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    span {
        font-size: 60px;
        font-weight: bold;
        color: #320380;
    }

    p {
        color: #D6FAF9;
        font-size: 25px;
    }
`

export const Interact = styled.div`
    margin-top: 3rem;

    a {
        background-color: #320380;
        color: #D6FAF9;
        border: none;
        padding: 2rem;
        font-size: 18px;
        margin-right: 2rem;
        cursor: pointer;
        border-radius: 5px;
        font-weight: bold;
    }

    button {
        border-radius: 50%;
        padding: 2rem;
        border: none;
        cursor: pointer;
        background-color: #320380;
        color: #D6FAF9;
    }
`

export const Banner = styled.div`
    img {
        width: 50rem;
    }
`