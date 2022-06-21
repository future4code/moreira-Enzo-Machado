import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './Pages/Home/home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Details from './Pages/Details/details';
import Topp from './components/top';

ReactDOM.render(
  <BrowserRouter>
  <Topp />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:id" element={<Details/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);