import React from "react";
import styled from "styled-components";

import CloseIcon from "../../assets/cruz-pequeno.png"

const TrackCardContainer = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Card = styled.div`
    background-color: #CCFF01;
    height: 75px;
    padding: 10px;
    border-radius: 35px;

    display: flex;
    align-items: center;

`

const Audio = styled.audio`
    background-color: #CCFF01;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const TrackName = styled.p`
    font-size: 24px;
    height: 10px;
    margin: 0px 5px 10px 0px;
`

const Artist = styled.p`
    color: gray;
    font-size: 14px;
    margin: 10px 5px 0px 0px;
`

const DeleteB = styled.img`
    height: 25px;
    width: 25px;
    margin-left: 5px;
`

const TrackCard = (props) => {
    return (
        <TrackCardContainer>
            <Card>
                <Info>
                    <TrackName>{props.trackName} </TrackName>
                    <Artist>{props.artist}</Artist>
                </Info>
                <Audio controls="controls"> 
                    <source src={props.url} type="audio/ogg" />
                </Audio>
                <DeleteB src={CloseIcon} onClick={() => props.removeTrackFromPlaylist(props.trackId)} />
            </Card>
        </TrackCardContainer>
    )
}

export default TrackCard