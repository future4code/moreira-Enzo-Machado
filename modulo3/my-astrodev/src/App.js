import { HomePage } from './pages/Home';
import { NavBar } from './components/NavBar';
import { PlanetList } from './pages/PlanetList';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <PlanetList />
    </div>
  );
}

export default App;
