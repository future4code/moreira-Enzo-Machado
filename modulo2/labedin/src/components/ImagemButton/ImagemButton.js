import React from 'react';
/* import './ImagemButton.css' */

import { Imagebuttoncontainer } from './styles';
import { Img } from "./styles"

function ImagemButton(props) {
    return (
        <Imagebuttoncontainer>
            <Img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </Imagebuttoncontainer>

    )
}

export default ImagemButton;