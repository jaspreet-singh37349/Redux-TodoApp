import React, { Component } from 'react'
import API from '../Api/index'
import Todos from './todos'
import Goals from './goals'
import {receiveData} from '../actions/shared'


class App extends Component {
  componentDidMount () {
    const { store } = this.props

    Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([ todos, goals ]) => {
      store.dispatch(receiveData(todos, goals))
    })


    store.subscribe(() => this.forceUpdate())
  }
  render() {
    const { store } = this.props
    const { todos, goals, loading } = store.getState()

    if (loading === true) {
      return <h3>Loading...</h3>
    }

    return (
      <div>
        <Todos todos={todos} store={this.props.store} />
        <Goals goals={goals} store={this.props.store} />
      </div>
    )
  }
}

export default App
