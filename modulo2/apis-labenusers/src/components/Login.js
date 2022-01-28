import React from "react"
import axios from "axios"
import styled from "styled-components"

const Input = styled.input`
    border: none;
    border-bottom: 2px solid red;
    height: 25px;
    font-size: 10px;
    font-family: 'Press Start 2P', cursive;
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #6C7A89;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Press Start 2P', cursive;
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
    font-size: 18px;
    color: white;
    height: auto;
    margin: 10px;
    font-family: 'Press Start 2P', cursive;

    position: relative;
    display: inline-block;
    vertical-align: top;
    text-transform: uppercase;
    cursor: pointer;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:ative {
        top: 2px;
    }

    line-height: 0;
    border-style: solid;
    border-width: 20px;
    -moz-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
    -webkit-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
    -o-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
    border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
`

const Pbutao = styled.p`
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: auto;
    text-align: center;
    margin: -20px -20px;
    line-height: 20px;
    padding: 10px 20px;
    background: #000000;

    background:
		linear-gradient(135deg, transparent 10px, #000000 0) top left,
		linear-gradient(225deg, transparent 10px, #000000 0) top right,
		linear-gradient(315deg, transparent 10px, #000000 0) bottom right,
		linear-gradient(45deg,  transparent 10px, #000000 0) bottom left;
	background-size: 50% 50%;
	background-repeat: no-repeat;
	background-image:
		radial-gradient(circle at 0 0, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 100% 0, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 100% 100%, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 0 100%, rgba(204,0,0,0) 14px, #000000 15px);
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

                    <Button onClick={this.userCreateUser}><Pbutao>Criar</Pbutao></Button>
                </Box>
            </Container>
        )
    }
}

export default Login