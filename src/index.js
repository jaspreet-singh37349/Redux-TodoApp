import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reducer from './reducers'
import { createStore } from 'redux'
import middleware from './middlewares/index'
import {Provider, ConnectedApp} from './contextApi/ContextApi'

const store = createStore(reducer, middleware)

ReactDOM.render(
<Provider store={store}>
    <ConnectedApp />
</Provider>, document.getElementById('root'))