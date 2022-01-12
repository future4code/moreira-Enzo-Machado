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
  render() {
    return (
      <div className={'appContainer'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'André'}
          fotoUsuario={'https://image.freepik.com/fotos-gratis/homem-sorridente-feliz-olhando_176420-16061.jpg'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Manhã'}
          fotoUsuario={'https://media.istockphoto.com/vectors/modern-pattern-in-vintage-style-the-sun-with-a-face-stylized-drawing-vector-id1227294885'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </div>
    );
  }
}

export default App;
