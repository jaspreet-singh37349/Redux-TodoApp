
import React from 'react'
import App from '../components/App'
import Todos from '../components/todos'
import Goals from '../components/goals'

const Context = React.createContext()

export class ConnectedTodos extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {(store) => {
            const { todos } = store.getState()

            return <Todos todos={todos} dispatch={store.dispatch} />
          }}
        </Context.Consumer>
      )
    }
  }

export class ConnectedGoals extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {(store) => {
            const { goals } = store.getState()

            return <Goals goals={goals} dispatch={store.dispatch} />
          }}
        </Context.Consumer>
      )
    }
  }

export class ConnectedApp extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {(store) => (
            <App store={store} />
          )}
        </Context.Consumer>
      )
    }
  }

export class Provider extends React.Component {
    render () {
      return (
        <Context.Provider value={this.props.store}>
          {this.props.children}
        </Context.Provider>
      )
    }
  }