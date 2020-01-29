import React from 'react'
import ReactDOM from 'react-dom'
import Backpack from './Backpack'

test('renders BackpackItem', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Backpack />,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})
