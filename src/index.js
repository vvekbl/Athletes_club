import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./CSS/index.css"

ReactDOM.render(
  <BrowserRouter>
  <div style={{backgroundColor: '#1D3F6E'}}>
    <App />
  </div> 
  </BrowserRouter>,
  document.getElementById('root')
);

