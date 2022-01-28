import react from 'react';
import styled from 'styled-components';
import axios from 'axios';
import React from 'react';

const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
  headers: {
    Authorization: "EnzoMachado-Moreira"
  }
}

const Content = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0;
`

class NewPlaylist extends React.Component {

    state = {
        playlistInput: ""
    }

    createPlaylist = () => {
        const body = {
            name: this.state.playlistInput
        }

        axios.post(urlPlaylist, body, headers)
        .then((res) => {
            alert(`A playlist ${this.state.playlistInput} foi criada com sucesso!`)
            this.setState({playlistInput: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
            this.setState({playlistInput: ""})
        })
    }

    onPlaylistTextChange = (event) => {
        this.setState({playlistInput: event.target.value})
    }

    render() {
        return(
            <Content>
                <input 
                    value={this.state.playlistInput}
                    onChange={this.onPlaylistTextChange}
                    placeholder='Nova Playlist'
                />
                <button onClick={this.createPlaylist}>Enviar</button>
            </Content>
        )
    }
}

export default NewPlaylist