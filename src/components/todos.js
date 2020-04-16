import React, {Component} from 'react'
import API from '../Api/index'
import {addTodo, removeTodo, toggleTodo} from '../actions/todos'
import List from './List'

class Todos extends Component {
    addItem = (e) => {
      e.preventDefault()

      return API.saveTodo(this.input.value)
        .then((todo) => {
          this.props.store.dispatch(addTodo(todo))
          this.input.value = ''
        })
        .catch(() => {
          alert('There was an error. Try again.')
        })
    }
    removeItem = (todo) => {
      this.props.store.dispatch(removeTodo(todo.id))

      return API.deleteTodo(todo.id)
        .catch(() => {
          this.props.store.dispatch(addTodo(todo))
          alert('An error occurred. Try again.')
        })
    }
    toggleItem = (id) => {
      this.props.store.dispatch(toggleTodo(id))

      return API.saveTodoToggle(id)
        .catch(() => {
          this.props.store.dispatch(toggleTodo(id))
          alert('An error occurred. Try again.')
        })
    }
    render() {
      return (
        <div>
          <h1>Todo List</h1>
          <input
            type='text'
            placeholder='Add Todo'
            ref={(input) => this.input = input}
          />
          <button onClick={this.addItem}>Add Todo</button>

          <List
            toggle={this.toggleItem}
            items={this.props.todos}
            remove={this.removeItem}
          />
        </div>
      )
    }
  }

  export default Todos