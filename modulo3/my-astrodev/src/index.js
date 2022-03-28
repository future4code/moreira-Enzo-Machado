import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./Pages/Home/Home"
import Header from "./Components/Header/Header"
import { Catalogo } from './Pages/Catalogo/Catalogo';
import { Filters } from './Components/Filter/Filter';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Filters />
    <Catalogo />
  </React.StrictMode>,
  document.getElementById('root')
);

