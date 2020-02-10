import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';

test('renders Headers', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
});