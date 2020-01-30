import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App/App';
import './index.css';

ReactDOM.render(
    <BrowserRouter basname='/'>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));