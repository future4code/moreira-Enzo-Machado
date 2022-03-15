import React from "react";
import styled from "styled-components";
import "./CardPequeno.css"

const SmallCardContainer=styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;

    display: flex;
    flex-direction: row;
    justify-items: flex-start;

    img {
        width: 60px;
        margin-right: 10px;
    }

    h4 {
        margin-bottom: 5px;
    }
`

function CardPequeno(props) {
    return(
        <SmallCardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </SmallCardContainer>
    )
}

export default CardPequeno;