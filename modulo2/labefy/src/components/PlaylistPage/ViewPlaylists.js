import React from "react";
import styled from "styled-components";
import Aside from "../../Main/Aside";
import Playlists from "./Playlist";
import PlaylistDetail from "./PlaylistDetails";


const PlaylistManagerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`



const PlaylistList = styled.div`
    display: flex;

`

class PlaylistView extends React.Component {

    state = {
        currentPage: "playlists",
        playlistId: ""
    }

    changePage = (currentPage, playlistId) => {
        this.setState({
            currentPage: currentPage,
            playlistId: playlistId
        })
    }

    render() {

        const renderCurrentPage = () => {
            if (this.state.currentPage === "playlists") {
                return <Playlists changePage={this.changePage} />
            } else if (this.state.currentPage === "playlistDetail") {
                return <PlaylistDetail 
                    changePage={this.changePage}
                    playlistId={this.state.playlistId}
                />
            } 
        }

        

        return(
            <PlaylistManagerContainer>
                {renderCurrentPage()}
            </PlaylistManagerContainer>
        )
    }
}

export default PlaylistView;