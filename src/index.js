import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

// Renderizar
const divRoot = document.querySelector('#app');

// ReactDOM.render(<PrimeraApp saludo="Hola Mundo, soy Alejandro" /> , divRoot );
ReactDOM.render( <CounterApp value = { 10 } /> , divRoot );
console.log(divRoot);
// 