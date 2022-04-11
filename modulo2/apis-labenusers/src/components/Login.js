import React from "react";
import axios from "axios"
import styled from "styled-components"

const LoginContainer = styled.div`
    background-color: #FFF89A;
    padding: 0px 25px 25px 25px;
    border-radius: 15px;
    width: 350px;
    height: 320px;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    h1 {
        font-size: 38px;
        margin-bottom: 5px;
    }
`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputName = styled.input`
    font-size: 20px;
    background-color: #9ADCFF;
    border: none;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    &:hover {
        background-color: #85BFDE;
    }
`

const InputEmail = styled.input`
    font-size: 20px;
    border: none;
    background-color: #9ADCFF;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    &:hover {
        background-color: #85BFDE;
    }
`

const InputButton = styled.button`
    font-size: 20px;
    height: 35px;
    width: 150px;
    background-color: #9ADCFF;
    border-radius: 10px;
    margin-top: 20px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    &:hover {
        background-color: #85BFDE;
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
            alert(`Parabéns! Usúario ${this.state.name} criado com sucesso`)
            this.setState({name: "", email: ""})
        })
        .catch(error => {
            alert("Eita!!! Ocorreu um erro ao criar o usuário.")
            console.log(error)
        })

    }

    render() {
        return(
            <LoginContainer>
                <h1>laBiUsers</h1>
                <InputBox>
                    <h2>Login</h2>
                    <InputName 
                        placeholder="Nome"
                        type="text"
                        value={this.state.name}
                        onChange={this.userNameChange}>
                    </InputName>
                    <InputEmail 
                        placeholder="E-mail"
                        type="text"
                        value={this.state.email}
                        onChange={this.userEmailChange}>
                    </InputEmail>

                    <InputButton onClick={this.userCreateUser}>Criar</InputButton>
                </InputBox>
            </LoginContainer>
        )
    }
}

export default Login;