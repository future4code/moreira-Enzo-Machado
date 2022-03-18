import React from "react";
import styled from "styled-components";
import axios from "axios"
import { axiosConfig, baseUrl } from "../../Constants";

import PlaylistCard from "./PlaylistCard";
import CreatePlaylist from "./CreationPlaylist";

const PlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const PlaylistsList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Tittle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px;
    height: 55px;

`

class Playlists extends React.Component {

    state = {
        playlists: []
    }

    componentDidMount = () => {
        this.fetchPlaylists()
    }

    fetchPlaylists = () => {
        axios.get(baseUrl, axiosConfig)
        .then(res => {
            this.setState({playlists: res.data.result.list})
        })
    };

    deletePlaylist = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig)
        .then(res => {
            this.fetchPlaylists()
        })
    }

    render() {

        const playlists = this.state.playlists.map(playlist => {
            return <PlaylistCard 
                key={playlist.id}
                changePage={this.props.changePage}
                name={playlist.name}
                playlistId={playlist.id}
                deletePlaylist={this.deletePlaylist}
            />
        })

        return(
            <PlaylistContainer>
                <Tittle>
                    <h1>Playlists</h1>
                    <CreatePlaylist />
                </Tittle>
                <PlaylistsList>
                    {playlists}
                </PlaylistsList>
            </PlaylistContainer>

        )
    }
}

export default Playlists