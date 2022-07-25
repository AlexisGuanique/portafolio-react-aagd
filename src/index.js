import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { PortfolioApp } from './PortfolioApp';



import './style.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Routers */}
    <BrowserRouter>

      {/* Aplication */}
      <PortfolioApp />

    </BrowserRouter>

  </React.StrictMode>
);

