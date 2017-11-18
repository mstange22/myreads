import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
    <Router path={process.env.PUBLIC_URL + '/'}>
        <App />
    </Router>, document.getElementById('root')
)
