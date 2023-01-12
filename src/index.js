import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalCSS } from './styles/globalcss';
import Home from './pages'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalCSS/>
    <Home />
  </React.StrictMode>
);