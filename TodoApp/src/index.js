import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reducer from './reducers'
import { createStore } from 'redux'

const store = createStore(reducer)

ReactDOM.render(<App store={store}/>, document.getElementById('root'))