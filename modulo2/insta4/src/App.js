import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const AppContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  background-color: #c7c7c7;
`

const NewPost = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
  width: 25%;
  border-radius: 10px;

  input {
    border: none;
    padding: 6px;
  }
`


class App extends React.Component {

  state = {
    postagens: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/200"
      },
      {
        nomeUsuario: "André",
        fotoUsuario: "https://image.freepik.com/fotos-gratis/homem-sorridente-feliz-olhando_176420-16061.jpg",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Luna",
        fotoUsuario: "https://picsum.photos/100/100",
        fotoPost: "https://picsum.photos/200/100"
      }
    ],

    valorInputNome: "",
    valorInputPic: '',
    valorInputFPost: ''
  };

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputPic,
      fotoPost: this.state.valorInputFPost
    }

    const novoPostes = [...this.state.postagens, novoPost];

    this.setState({postagens: novoPostes});

  };

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputPic = (event) => {
    this.setState({valorInputPic: event.target.value})
  }

  onChangeInputFPost = (event) => {
    this.setState({valorInputFPost: event.target.value})
  }


  render() {

    const listaDePostagens = this.state.postagens.map((post) => {
      return (<Post 
        nomeUsuario = {post.nomeUsuario}
        fotoUsuario = {post.fotoUsuario}
        fotoPost = {post.fotoPost}
      />)
    })

    return (
      <AppContainer>

      <div>{listaDePostagens}</div>

        <NewPost>
          <input 
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input 
            value={this.state.valorInputPic}
            onChange={this.onChangeInputPic}
            placeholder={"Foto de usuario"}
          />
          <input 
            value={this.state.valorInputFPost}
            onChange={this.onChangeInputFPost}
            placeholder={"Foto pro Post"}
          />
          <button onClick={this.adicionarPost}>Postar</button>
        </NewPost>


      </AppContainer>
    );
  }
}

export default App;
