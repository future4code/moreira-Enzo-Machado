import React from 'react'
import styled from 'styled-components'
import './styles.css'

const AppView = styled.div`
  background-color: #F8F5DF;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const TaskContainer = styled.div`
  height: 436px;
  width: 958px;
  background-color: #D7A2F6;
  border: 5px solid black;
  border-top:none;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;  
`

const TaskList = styled.div`

`

const Tarefa = styled.li`
  width: 414px;
  text-align: left;
  font-size: 20px;
  list-style-type: none;
  padding: 10px;
  border-radius: 40px;
  border: 5px solid black;
  margin: 10px;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  background-color: ${({completa}) => (completa ? 'rgba(0,0,0,0.5)' : '#D7A2F6')};

`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  background-color: #F8F5DF;
  border: 5px solid black;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  width: 958px; 

  h1 {
    margin-right: 360px;
  }
`

const Filtro = styled.div`
  display: flex;
  margin-right: 10px;

  select {
    margin-top: 20px;
    margin-bottom: 15px; 
    border: 3px solid black;
    border-radius: 35px;
    background-color: #d7a2f6;
  }
`

const Bolas = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`

const Bola1 = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: #F98509;
  border: 3px solid black;
  margin-right: 5px;
`

const Bola2 = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: #F2E018;
  border: 3px solid black;
  margin-right: 5px;
  margin-left: 5px;
`

const Bola3 = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: #FFFFFF;
  border: 3px solid black;
  margin-left: 5px;
`

const AddContainer = styled.div`
  background-color: #F98509;
  width: 958px;
  height: 150px;
  border: 5px solid black;
  border-top:none;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const AddBody = styled.div`
  display: flex;
  align-items: center;

    input {
      border: 5px solid black;
      background-color: #F98509;
      font-size: 25px;
      border-radius: 35px;
      margin-left: -30px;
      margin-right: 30px; 
      padding: 7px 10px 14px;
    }

    button {
      font-size: 25px;
      border-radius: 35px;
      border: 5px solid black;
      color: #F8F5DF;
      background-color: black;

      :hover {
        background-color: #F98509;
        color: black;
      }
    }
`

class App extends React.Component {
  state = {
    tarefas : [
      {
        id: Date.now(),
        texto: "Limpar a Casa",
        completa: false
      }
    ],
    
    inputValue: '',
    filtro: '',

    textoNovaTarefa: ''
  }

  componentDidMount() {
    const tarefasCriadas = JSON.parse(localStorage.getItem("tarefas"))
    this.setState({
      tarefas: tarefasCriadas
    })
  }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const copiaDasTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: copiaDasTarefas})
    
  }

  selectTarefa = (id) => {
    const novasTarefas = this.state.tarefas.map((status) => {
      if (id === status.id) {
        const estadoNovo = {
          ...status, 
          completa: !status.completa
        }
        return estadoNovo
      } else {
        return status
      }
    })

    this.setState({tarefas: novasTarefas})
  }

  onChangeFilter = (event) => {
    const filterValue = event.target.value;
    this.setState({filtro: filterValue})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default: 
          return true
      }
    })

    return (
      <AppView>
          <Header>
            <Bolas>
              <Bola1/>
              <Bola2/>
              <Bola3/>
            </Bolas>

            <h1>Lista de Tarefas</h1>
          </Header>
        <TaskContainer>
          <Filtro>
                <select value={this.state.filter} onChange={this.onChangeFilter}>
                  <option value="">Nenhum</option>
                  <option value="pendentes">Pendentes</option>
                  <option value="completas">Completas</option>
                </select>
          </Filtro>

          <TaskList>
            {listaFiltrada.map(tarefa => {
              return(
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}>
                    {tarefa.texto}
                  </Tarefa>
              )
            })}
          </TaskList>
        </TaskContainer>
        <Header>
          <Bolas>
            <Bola1/>
            <Bola2/>
            <Bola3/>
          </Bolas>
            <h1>Adicionar Tarefa</h1>
          </Header>
        <AddContainer>
          <AddBody>
            <input value={this.state.inputValue} onChange={this.onChangeInput}/>
            <button onClick={this.criaTarefa}>Submit</button>
          </AddBody>
        </AddContainer>
      </AppView>
    )
  }
}

export default App