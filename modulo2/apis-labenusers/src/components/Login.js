import React from "react"
import axios from "axios"
import styled from "styled-components"

const Input = styled.input`
    border: none;
    border-bottom: 2px solid red;
    height: 25px;
    font-size: 18px;
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #6C7A89;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Box = styled.div`
    width: 300px;
    height: 300px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;

`

const Button = styled.button`
    
    display: inline-block;
    padding: 15px 25px;
    font-size: 24px;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #4caf50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    &::hover {
        background-color: #3e8e41
    }
    &:active {
        background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
    }
    
`


const urlCreateUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "EnzoMachado-Moreira"
    }
}


class Login extends React.Component {
    state = {
        name: "",
        email: ""
    }

    userNameChange = event => {
        const novoNome = event.target.value;
        this.setState({name: novoNome})
    }

    userEmailChange = event => {
        const novoEmail = event.target.value;
        this.setState({email: novoEmail})
    }

    userCreateUser = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post(urlCreateUsers, body, headers)
        .then(() => {
            alert(`Parabéns! Usuário ${this.state.name} criado com sucesso`)
            this.setState({name: "", email: ""})
        })
        .catch(error => {
            alert("Eita!!! Erro ao criar usuário.")
            console.log(error)
        })
    }

    render() {
        return (
            <Container>
                <h1>[ labiUsers ]</h1>
                <Box>
                    <h2>Login</h2>
                    <Input
                        placeholder="Nome"
                        type="text"
                        value={this.state.name}
                        onChange={this.userNameChange}>
                    </Input>
                    <Input 
                        placeholder="E-mail"
                        type="email"
                        value={this.state.email}
                        onChange={this.userEmailChange}>
                    </Input>

                    <Button onClick={this.userCreateUser}>Criar Usuário</Button>
                </Box>
            </Container>
        )
    }
}

export default Login