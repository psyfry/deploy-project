import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
