import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './action_types'
import API from '../Api/index'

function addTodo (todo) {
    return {
      type: ADD_TODO,
      todo,
    }
  }

 function removeTodo (id) {
    return {
      type: REMOVE_TODO,
      id,
    }
  }

 function toggleTodo (id) {
    return {
      type: TOGGLE_TODO,
      id,
    }
  }

  export function handleAddTodo (name, cb) {
    return (dispatch) => {
      return API.saveTodo(name)
        .then((todo) => {
          dispatch(addTodo(todo))
          cb()
        })
        .catch(() => {
          alert('There was an error. Try again.')
        })
    }
  }

  export function handleDeleteTodo (todo) {
    return (dispatch) => {
      dispatch(removeTodo(todo.id))

      return API.deleteTodo(todo.id)
        .catch(() => {
          dispatch(addTodo(todo))
          alert('An error occurred. Try again.')
        })
    }
  }

  export function handleToggle (id) {
    return (dispatch) => {
      dispatch(toggleTodo(id))

      return API.saveTodoToggle(id)
        .catch(() => {
          dispatch(toggleTodo(id))
          alert('An error occurred. Try again.')
        })
    }
  }