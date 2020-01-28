import React from 'react';
import ReactDOM from 'react-dom'
import LoginForm from './LoginForm';

test('renders LoginForm', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LoginForm />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
});