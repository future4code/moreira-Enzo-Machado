import React from 'react';
import styled from "styled-components"
import './App.css';

const AppContainer = styled.div`
  background-color: #34AF23;
  height: 99.9vh;
`

const Screen = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 95vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #F5F7FB;
  border-radius: 10px;
`

const MessagesContainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`

const InputContainer = styled.div`
  height: 25px;
  display: flex;
  padding: 10px;

  button {
    background-color: #3cbc8d;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    transition-duration: 0.4s;

    :hover {
      background-color: #34A57B;
    }
  }
`

const NameInput = styled.input`
  width: 100px;
  background-color: #3cbc8d;
  border: none;
  color: black;
  font-size: 18px;
  padding-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

const MessageInput = styled.input`
  flex-grow: 1;
  font-size: 18px;
  padding-left: 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const MessageBox = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #3cbc8d;
  border-radius: 20px;
  border-bottom-left-radius: 0px;

  h4 {
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }
`

class App extends React.Component {

  state = {
    messages: [
      {
        user: 'Linda',
        text: 'Oiii'
      },
      {
        user: 'Marshall',
        text: 'Mas ces vão ne??!!'
      },
      {
        user: 'Claudia',
        text: 'TÔ OFF!!!!'
      },
    ],
    userValue: '',
    messageValue: ''
  }

  onChangeUserValue = (event) => {
    this.setState({userValue: event.target.value})
  }

  onChangeMessageValue = (event) => {
    this.setState({messageValue: event.target.value})
  }

  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
    }

    const newMessagesArray = [newMessage,...this.state.messages]

    this.setState({messages: newMessagesArray, userValue: '', messageValue: ''})
  }

  render() {
    return (

      <AppContainer>
        <Screen>
          <MessagesContainer>
            {this.state.messages.map((message, index) => {
              return <MessageBox key={index}>
                <h4>{message.user}</h4><p>: {message.text}</p>
              </MessageBox>
            })}
          </MessagesContainer>
          <InputContainer>
            <NameInput 
            onChange={this.onChangeUserValue} 
            value={this.state.userValue} 
            placeholder={'Nome'}/>
            <MessageInput 
            onChange={this.onChangeMessageValue} 
            value={this.state.messageValue} 
            placeholder={'Mensagem'}/>
            <button onClick={this.sendMessage}>Enviar</button>
          </InputContainer>
        </Screen>
      </AppContainer>

    );
    }
}

export default App;
