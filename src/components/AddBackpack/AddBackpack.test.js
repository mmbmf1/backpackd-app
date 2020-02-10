import React from 'react'
import ReactDOM from 'react-dom'
import AddBackpack from './AddBackpack'
import '../items'

test('renders AddBackpack', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <AddBackpack />,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})