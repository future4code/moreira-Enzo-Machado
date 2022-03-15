import React, { useEffect, useState} from "react"
import styled from "styled-components"
import axios from "axios";
import ItemProfile from "./ItemProfile"
import ProfilePic from "../../assets/profile.jpg"

const AppScreen = styled.div`
    background-color: #FED8DD;
    width: 399px;
    height: 844px;
    border-radius: 35px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    h1 {
        margin-left: 15px;
        font-size: 40px;
    }

    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 15px;
    }
`

function MatchPage() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzoMachado/matches")
        .then((res) => {
            setMatches(res.data.matches)
        })
    })


    return(

        <AppScreen>
            <Header>
                <h1>MatchList</h1>
                <img src={ProfilePic} />
            </Header>
            <ListContainer>
                {matches.map((profile) => {
                    return <ItemProfile profile={profile} />
                })}
            </ListContainer>
        </AppScreen>

    )
}

export default MatchPage;