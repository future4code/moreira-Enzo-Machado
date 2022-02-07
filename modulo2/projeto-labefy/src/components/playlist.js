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

class Playlist extends React.Component {

    state = {
        playlists: []
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get(urlPlaylist, headers)
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            alert("Algo deu errado, tente novamente")
        })
    }

    render() {

        const playlistComponents = this.state.playlists.map((play) => {
            return <li key={play.id}>{play.name}</li>
        })

        return(
            <Content>
                <h2>Playlists</h2>
                {playlistComponents}
            </Content>
        )
    }
}

export default Playlist