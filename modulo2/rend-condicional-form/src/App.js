import logo from './logo.svg';
import './App.css';
import React from 'react';
import './components/etapa1'

class App extends React.Component {
  
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.evento) {
      case 1:
        return <etapa1 />;
      case 2: 
        return <etapa2 />;
      case 3:
        return <etapa3 />;
      case 4: 
        return <etapa4 />;
    }
  }

  proximaEtapa = () => {
    this.setState({rendeizaEtapa: this.state.rendeizaEtapa + 1})
  }

  render () {
    return (
      <div>
        {this.renderizaEtapa}
        <button onClick={this.proximaEtapa}>Próxima Etapa</button>
      </div>
    );
  }
}

export default App;
