import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const appContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {

  state = {
    postagens: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "André",
        fotoUsuario: "https://image.freepik.com/fotos-gratis/homem-sorridente-feliz-olhando_176420-16061.jpg",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Luna",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
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
      <div className={'appContainer'}>
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
        <div>{listaDePostagens}</div>
      </div>
    );
  }
}

export default App;
