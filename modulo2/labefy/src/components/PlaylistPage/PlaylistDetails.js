import React from "react";
import styled from "styled-components";
import axios from "axios";
import { axiosConfig, baseUrl } from "../../Constants";

import TrackCard from "./TrackCard";
import LeftArrow from "../../assets/leftArrow.png"

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TrackList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Tittle = styled.div`
    margin: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TrackCreationForm = styled.div`
    display: flex;
    align-items: center;
    background-color: #CCFF01;
    height: 35px;
    border-radius: 10px;
    padding: 5px;
    
    input {
        font-size: 18px;
        padding: 5px;
        border: none;
        border-radius: 10px;
        background-color: #CCFF01;
        width: 160px;

        &:hover {
            background-color: #93B800;
        }
    }

    button {
        background-color: #CCFF01;
        border: none;
        font-size: 18px;
        margin-left: 5px;
        border-radius: 10px;
        height: 35px;

        &:hover {
            background-color: #93B800;
        }
    }
`

const Back = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 25px;
        height: 25px;
        margin-right: 20px;
        cursor: pointer;
    }

    h1 {
        font-size: 35px;
    }
`

class PlaylistDetail extends React.Component {

    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    }

    componentDidMount = () => {
        this.fetchTracks()
    }

    fetchTracks = () => {
        axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig)
        .then(res => {
            this.setState({tracks: res.data.result.tracks})
        })
    }

    removeTrackFromPlaylist = (trackId) => {
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig)
        .then(() => {
            this.fetchTracks();
        })
    }

    changeInputValues = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addTrackToPlaylist = (e) => {
        e.preventDefault()
        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        };

        axios.post(`${baseUrl}/${this.props.playlistId}/tracks`,
            body,
            axiosConfig
        ).then(() => {
            this.fetchTracks();
        })

        this.setState({
            trackName: "",
            artist: "",
            url: ""
        })
    };

    render() {
        const tracks = this.state.tracks.map(track => {
            return <TrackCard 
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
                trackId={track.id}
                removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            />
        })

        return(
            <Content>
                <Tittle>
                    <Back>
                        <img src={LeftArrow} onClick={() => this.props.changePage("playlists", "")} />
                        <h1>Detalhes</h1>
                    </Back>
                    <TrackCreationForm>
                            <input 
                                placeholder="Nome da música"
                                name="trackName"
                                value={this.state.trackName}
                                onChange={this.changeInputValues}
                            />
                            <input 
                                placeholder="Nome do Artista"
                                name="artist"
                                value={this.state.artist}
                                onChange={this.changeInputValues}
                            />
                            <input 
                                placeholder="URL da música"
                                name="url"
                                value={this.state.url}
                                onChange={this.changeInputValues}
                            />
                        <button onClick={this.addTrackToPlaylist}>Adicionar</button>
                    </TrackCreationForm>
                </Tittle>
                <TrackList>
                    {tracks}
                </TrackList> 
            </Content>
        )
    }
}

export default PlaylistDetail;