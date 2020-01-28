import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders App', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
});
