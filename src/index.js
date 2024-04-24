import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Letreiro from './Letreiro';
import Relogio from './Relogio';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Letreiro />
    <Relogio />
  </>
);
