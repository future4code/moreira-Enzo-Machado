import React from "react"
import axios from "axios"


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
            <div>
                <input
                    placeholder="Nome"
                    type="text"
                    value={this.state.name}
                    onChange={this.userNameChange}
                />
                <input 
                    placeholder="E-mail"
                    type="email"
                    value={this.state.email}
                    onChange={this.userEmailChange}
                />

                <button onClick={this.userCreateUser}>Criar Usuário</button>

            </div>
        )
    }
}

export default Login