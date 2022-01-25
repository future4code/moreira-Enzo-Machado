import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const AppWindow = styled.section`
  display: flex;
  height: 100vh;
  background-color: #ededed;
`

const SideBar = styled.div`
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd
`

const Header = styled.section`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`

const AreaContainer = styled.div`

`

function App() {
  return (
    <AppWindow>
      <SideBar>

        <header>
          <img className='header--avatar' src='https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png'></img>
          <div className='header--buttons'>
            <div className='header--btn'>
              
            </div>
          </div>
        </header>

        <div className='search'>
          ...
        </div>
          
        <div className='chatlist'>
          ...
        </div>

      </SideBar>
    </AppWindow>
  );
}

export default App;
