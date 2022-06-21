import React from "react";
import axios from "axios";
import styled from "styled-components"

const UsersBox = styled.div`
    background-color: #FFF89A;
    padding: 0px 25px 25px 25px;
    border-radius: 15px;
    width: 350px;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;


    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    ul {
        list-style: none;
        padding: 10px;
        font-size: 15px;
    }
`

const DeleteButton = styled.button`
    font-size: 20px;
    margin: 10px;
    width: 35px;
    background-color: #FF8AAE;
    border-radius: 10px;
    border: none;
`

const SearchInput = styled.input`
    font-size: 20px;
    background-color: #9ADCFF;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 10px;
    width: 225px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    &:hover {
        background-color: #85BFDE;
    }
`

const SearchButton = styled.button`
    font-size: 20px;
    height: 43px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: none;
    border-left: 2px dashed black;
    background-color: #9ADCFF;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    &:hover {
        background-color: #85BFDE;
    }
`

const Hr = styled.hr`
    border: 0;
    border-bottom: 1px dashed #ccc;
    background: #999;
`


const urlGetAllUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "EnzoMachado-Moreira"
    }
}

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
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, 
            headers)
            .then(() => {
                alert("Bye bye ;)")
                this.getUsersList()
            })
            .catch(error => {
                alert("Ih, vai sair não...")
                console.log(error)
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
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name}&email=`,
        headers)
        .then(response => {
            this.setState({usersList: response.data})
        })
        .catch(error => {
            alert("Erro ao criar usuário")
            console.log(error)
        })
    }

    render() {
        return(
            <UsersBox>
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
                                        <DeleteButton 
                                            className="button"
                                            onClick={() => this.deleteUsers(user.id)}>
                                                <span>X</span>
                                            </DeleteButton>

                                    </li>
                                )
                            })}
                        </ul>
                        <Hr />
                        <h4>Procurar Usuários</h4>
                        <SearchInput 
                            placeholder="Nome exato para busca"
                            type="text"
                            value={this.state.name}
                            onChange={this.userMudarNome}
                        />
                        <SearchButton onClick={this.userSearch}>Pesquisar</SearchButton>
                    </div>
                ) : (
                    <userDetail userId={this.state.userId} mudarPagina={this.mudarPagina} />
                )}
            </UsersBox>
        )
    }
}

export default Users;