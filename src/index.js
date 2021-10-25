//css
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
//react-redux component 
import { Provider } from 'react-redux';
//Composant react de niveau sup 
import { App } from './app/App.js';
//Le store redux
import store from './app/store'

//rendu jsx
{/*passser le store en accessoire au composant Provider */}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </ Provider>, document.getElementById('root')
);