import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css'
import App from './App'

const el = document.getElementById('root')

const render = ReactDOM.createRoot(el)

render.render(
    <App />
)