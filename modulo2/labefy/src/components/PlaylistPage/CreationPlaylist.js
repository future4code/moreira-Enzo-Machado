import React from "react"
import styled from "styled-components"
import axios from "axios"
import { baseUrl, axiosConfig } from "../../Constants"

const PlaylistCreationFormContainer = styled.div`

`

const PlaylistCreationForm = styled.form`   

`

class CreatePlaylist extends React.Component {
    state = {
        inputNameValue: ""
    }

    changeInputNameValue = (e) => {
        this.setState({inputNameValue: e.target.value})
    }

    criarPlaylist = (e) => {
        e.preventDefault()
        const body = {
            name: this.state.inputNameValue
        }

        axios.post(baseUrl, body, axiosConfig)
        .then(() => {
            alert('Playlist criada com sucesso!')
        })
        this.setState({inputNameValue: ""})
    }
    
    render() {
        return (
            <PlaylistCreationFormContainer>
                <input 
                    placeholder="Nova Playlist"
                    type="text"
                    value={this.state.inputNameValue}
                    onChange={this.changeInputNameValue}
                />
                <button onClick={this.criarPlaylist} type="submit">Adicionar</button>
        </PlaylistCreationFormContainer>
        )
    }
}

export default CreatePlaylist;