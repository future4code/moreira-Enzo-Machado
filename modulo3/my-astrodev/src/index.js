import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./Pages/Home/Home"
import Header from "./Components/Header/Header"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

