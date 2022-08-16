import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/Global.styled';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
