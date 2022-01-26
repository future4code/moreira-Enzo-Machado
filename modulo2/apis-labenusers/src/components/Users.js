import react from "react";
import axios from  "axios"
import React from "react";
import styled from "styled-components"


const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const headers = {
    headers: {
        Authorization: "EnzoMachado-Moreira"
    }
}

const urlGetAllUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

class Users extends React.Component {
    state = {
        usersList: [],
        paginaAtual: "usersList",
        userId: "",
        name: ""
    }

    componentDidMount() {
        this.getUsersList()
    }

    getUsersList = () => {
        axios.get(urlGetAllUsers, headers)
        .then(response => {
            this.setState({usersList: response.data})
        })
    }

    deleteUsers = userId => {
        if(window.confirm("Tem certeza que deseja deletar o usuário ?")) {
            axios.delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                headers
            )
            .then(()=> {
                alert("O usuário foi deletado.")
                this.getUsersList()
            })
            .catch(e => {
                alert("ERRO! problemas ao deletar o usuário")
            })
        }
    }

    mudarPagina = userId => {
        if (this.state.paginaAtual === "usersList") {
            this.setState({paginaAtual: "userDetails", userId: userId})
        } else {
            this.setState({paginaAtual: "usersList", userId: ""})
        }
    }

    userMudarNome = event => {
        const novoNome = event.target.value;
        this.setState({name: novoNome})
    }

    userSearch = () => {
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name}&email=`,
            headers
        )
        .then(response => {
            this.setState({ usersList: response.data})
        })
        .catch(error => {
            alert("Erro ao criar usuário")
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                {this.state.paginaAtual === "usersList" ? (
                    <div>
                        <ul>
                            {this.state.usersList.length === 0 && <div>Carregando...</div>}
                            {this.state.usersList.map(user => {
                                return(
                                    <li>
                                        <span onClick={() => this.mudarPagina(user.id)}>
                                            {user.name}
                                        </span>
                                        <deleteButton
                                            onClick={() => this.deleteUsers(user.id)}
                                        >X</deleteButton>
                                    </li>
                                )
                            })}
                        </ul>
                        <hr />
                        <h4>Procurar Usuários</h4>
                        <input 
                            placeholder="Nome exato para busca"
                            type="text"
                            value={this.state.name}
                            onChange={this.userMudarNome}
                        />
                        <button onClick={this.userSearch}>Salvar edição</button>
                    </div>
                ) : (
                    <userDetail userId={this.state.userId} mudarPagina={this.mudarPagina} />
                )}
            </div>
        )
    }


}
export default Users