import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 3rem;
`

export const BannerStyle = styled.img`
    border-radius: 35px;
    margin-top: 35px;
`

export const Cabecalho = styled.div`
    h1 {
        font-size: 58px;
        margin: 0px;
    }

    p{
        margin: 20px 0 0 0 ;
        color: gray;
    }
`

export const Filter = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid lightgray;

    h3 {
        margin-right: 10px;
    }

    p {
        margin-right: 10px;
        margin-left: 10px;
    }
`