import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './LandingPage'

test('renders LandingPage', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LandingPage />, div)
    ReactDOM.unmountComponentAtNode(div)
});