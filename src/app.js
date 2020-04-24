import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';


import { square, add } from './utils.js';


console.log('app.js is running');
console.log(square(4));
console.log(add(100,23));

var template = <p>This is JSX from app.js</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);
