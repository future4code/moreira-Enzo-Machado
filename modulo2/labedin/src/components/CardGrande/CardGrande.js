import React from 'react';
/*import './CardGrande.css' */

import { Bigcardcontainer } from "./styles"
import { Img } from "./styles"
import { Title } from "./styles"
import { Info } from "./styles"



function CardGrande(props) {
    return (
        <Bigcardcontainer>
            <Img src={ props.imagem } />
            <Info>
                <Title>{ props.nome }</Title>
                <p>{ props.descricao }</p>
            </Info>
        </Bigcardcontainer>
    )
}

export default CardGrande;