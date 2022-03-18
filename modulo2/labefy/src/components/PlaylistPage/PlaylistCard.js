import React from "react";
import styled from "styled-components";

import CloseIcon from "../../assets/cruz-pequeno.png"

const PlaylistCardContainer = styled.div`
    height: 234px;
    width: 234px;
    background-color: #CCFF01;
    margin: 30px;
    border-radius: 35px;

    display: flex;
    flex-direction: column;
`

const NameContainer = styled.a`
    font-size: 35px;
    font-weight: bold;
    margin: 10px;
    cursor: pointer;
`

const Canto = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-right: 15px;
    margin-bottom: 38px;

    img {
        cursor: pointer;
        height: 25px;
        width: 25px;
        margin-top: 15px;
    }
`

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
            <Canto>
                <img src={CloseIcon}  onClick={() => props.deletePlaylist(props.playlistId)} />
            </Canto>
            <NameContainer onClick={() => props.changePage("playlistDetail", props.playlistId)}>{props.name}</NameContainer>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard