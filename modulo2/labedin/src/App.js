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
          imagem="https://superawesomevectors.com/wp-content/uploads/2019/06/andrew-glouberman-big-mouth-free-vector-character-800x566.jpg" 
          nome="Enzo Machado" 
          descricao="Olá, tenho 20 anos. Nordestino, mais precisamente piauíense/teresinense."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
          imagem="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png"
          nome="Email"
          descricao="dududuedu@hotmail.com"
        />
      </div>
      <div className='page-section-container'>
        <CardPequeno
          imagem="https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png"
          nome="Pin"
          descricao="Picket Post Close, número 12"
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
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Greater_coat_of_arms_of_the_United_States.svg/1200px-Greater_coat_of_arms_of_the_United_States.svg.png" 
          nome="PENTAGONO" 
          descricao="Primeira linha de defesa contra ameaças alienigenas. Lider lógico da equipe alfa de Optimus Prime." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" 
          texto="@nz4gem" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          texto="Enzo Machado" 
        />        
      </div>
    </div>
  );
}

export default App;
