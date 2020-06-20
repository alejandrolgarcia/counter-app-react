import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

// Renderizar
const divRoot = document.querySelector('#app');

// ReactDOM.render(<PrimeraApp saludo="Hola Mundo" /> , divRoot );
ReactDOM.render(<CounterApp value={ 0 } /> , divRoot );

console.log(divRoot);