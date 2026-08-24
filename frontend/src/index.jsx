import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./CSS/index.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <div style={{backgroundColor: '#1D3F6E'}}> */}
    <App />
  {/* </div>  */}
  </BrowserRouter>
);
