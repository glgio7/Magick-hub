import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalCSS } from './styles/globalcss';
import Home from './pages/index'
import Categories from './pages/categories'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalCSS />
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route  path='/categories/:title' element={<Categories />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);