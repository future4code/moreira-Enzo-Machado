import react from "react";
import axios from  "axios"
import React from "react";
import styled from "styled-components"

const Li = styled.li`
    display: flex;
`

const Span = styled.span`
    display: flex;
    align-items: center;
    font-family: 'Press Start 2P', cursive;
    font-size: 25px;
    padding-right: 10px;
`

const DeleteButton = styled.span`
    display: inline-block;
    border-radius: 4px;
    background-color: red;
    border: none;
    text-align: center;
    font-size: 28px;
    padding: 2px;
    width: 165px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    font-family: 'Press Start 2P', cursive;
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
                                    <Li>
                                        <Span onClick={() => this.mudarPagina(user.id)}>
                                            {user.name}
                                        </Span>
                                        <DeleteButton 
                                            className="button"
                                            onClick={() => this.deleteUsers(user.id)}>
                                                <span>Delete</span>
                                            </DeleteButton>

                                    </Li>
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