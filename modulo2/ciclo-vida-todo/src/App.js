import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  list-style-type: circle;
  width: 320px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  background-color: ${({completa}) => (completa ? '#d7d7d7' : '#fff')};
  /*                                          SE FOR           SE NÃO        */
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 6px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    background-color: orange;
    color: black;
  }

  button {
	display: inline-block;
	position: relative;
	transition-duration: .3s;
	transition-property: transform;
  height: 25px;
  width: 80px;
  background-color: black;
  color: white;
  border-radius: 15px 30px 30px 15px;
  padding-left: 10px;

  

  &:before {
    pointer-events: none;
		position: absolute;
		z-index: -1;
		content: '';
		top: calc(50% - 10px);
		left: 0;
		border-style: solid;
		border-width: 10px 10px 10px 0;
		border-color: transparent #ececec transparent transparent;
		transition-duration: .3s;
		transition-property: left;
  }

  &:hover {
    transform: translateX(5px);
  }

  &:hover:before {
    left: -(10px);
  }
  }
`

const AppScreen = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 650px;
  border-radius: 30px;

  h1 {
    margin: 50px 0 5 0;
  }
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: "Varrer a casa",
          completa: false
        }
      ],
      inputValue: '',
      filtro: '',

      textoNovaTarefa: ''

    }

  componentDidUpdate() {
    
  };

  componentDidMount() {

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
      <AppScreen>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Add</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </AppScreen>
    )
  }
}

export default App
