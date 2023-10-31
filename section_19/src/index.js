import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './style.css'
import "bulma/css/bulma.css"
import App from './App'
import {store} from './store'

const el = document.getElementById('root')

const render = ReactDOM.createRoot(el)

render.render(
    <Provider store={store} >
        <App />
    </Provider>
)