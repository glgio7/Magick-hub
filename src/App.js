import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalCSS } from './styles/globalcss';
import Home from './pages/index/index'
import Categories from './pages/categories'
import Numerology from './pages/numerology'
import Footer from './components/Footer';
import { Sidebar } from './components/Sidebar';
import Header from './components/Header';


function App() {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu);


  return (
    <BrowserRouter>
      <GlobalCSS />
      <Sidebar displayed={menu} toggleMenu={toggleMenu} />
      <Header toggleMenu={toggleMenu}/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/categories/:title' element={<Categories />} />
        <Route path='/numerology' element={<Numerology />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;