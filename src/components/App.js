import React, { Component } from 'react'
import {ConnectedTodos, ConnectedGoals} from '../contextApi/ContextApi'
import {handleInitialData} from '../actions/shared'

class App extends Component {
  componentDidMount () {
    const { store } = this.props

    console.log("Using Context Api")

    store.dispatch(handleInitialData())

    store.subscribe(() => this.forceUpdate())
  }
  render() {
    const { store } = this.props
    const { loading } = store.getState()

    if (loading === true) {
      return <h3>Loading...</h3>
    }

    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

export default App
