import React from 'react';

/*import './CardPequeno.css'; */
import { Title } from "./styles"
import { Info } from "./styles"
import { Img } from "./styles"
import { Smallcardcontainer} from "./styles"
 

function CardPequeno(props) {
    return (
        <Smallcardcontainer>
            <Img src={ props.imagem } />
            <Info>
                <Title>{ props.nome }</ Title>
                <p>{ props.descricao }</p>
            </ Info>
        </Smallcardcontainer>
    )
}

export default CardPequeno;