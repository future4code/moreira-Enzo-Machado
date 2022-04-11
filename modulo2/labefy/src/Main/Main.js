import React from "react"
import react from "react"
import styled from "styled-components"
import ViewPlaylist from "../components/PlaylistPage/ViewPlaylists"

const Container = styled.div`
    width: 1600px;
    height: 800px;
    background-color: #fff;

    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
`

class Main extends React.Component {
    render() {
        return(
            <Container>
                <ViewPlaylist />
            </Container>
        )
    }
}

export default Main;