import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://mixdeseries.com.br/wp-content/uploads/2021/07/Exterminador-do-Futuro-serie-Arnold-Schwarzenegger.jpg" 
          nome="Enzo Machado" 
          descricao="Meu nome é Sasuke Uchiha. Eu odeio um monte de coisas, e eu particularmente não gosto de nada. O que eu tenho não é um sonho, porque eu vou torná-lo uma realidade. Vou restaurar meu clã, e matar um certo alguém."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          nome="E-mail:"
          descricao="trojanmaster@hotmail.com"
        />

        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          nome="Endereço:"
          descricao="Onde o vento faz a curva, quente - pi"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />

        <CardGrande 
          imagem="https://imagens.https://1.bp.blogspot.com/-5hGhZ7dG4oY/WDDMghPX74I/AAAAAAAAXrQ/Kc4qUjXtLDwRtL4yqj7LpwR9PyO7m22gQCLcB/s1600/skynet.png.com.br/empresas/4418.400.jpg" 
          nome="Skynet" 
          descricao="Criador e chefe da inteligência artificial" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
