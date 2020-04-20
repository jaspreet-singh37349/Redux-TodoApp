import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reducer from './reducers'
import { createStore } from 'redux'
import middleware from './middlewares/index'
import {Provider} from './contextApi/ContextApi'
import App from './components/App'

const store = createStore(reducer, middleware)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))