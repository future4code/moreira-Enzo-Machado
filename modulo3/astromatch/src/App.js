import './App.css';
import Main from './components/Main';
import ResetButton from './components/ResetButton';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


function App() {
  return (
    <div className='AppDiv'>
      <AppContainer>
        <Main/>
        <ResetButton/>
      </AppContainer>
    </div>

  );
}

export default App;
