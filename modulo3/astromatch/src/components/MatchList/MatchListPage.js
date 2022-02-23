import React, { useEffect, useState, } from "react";
import AppBar from "../Header/AppBar";
import ListItem from "./ListItem";
import styled from "styled-components";
import axios from "axios";

const ListContainer = styled.div`
    border: 1px solid yellow;
    padding: 8px;
`


function MatchList() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzoMachado/matches")
        .then((res) => {
            setMatches(res.data.matches)
        })
    })

    return(
        <ListContainer>
            {matches.map((profile) => {
                return <ListItem profile={profile} />
            })}
        </ListContainer>
    )
}

export default MatchList;