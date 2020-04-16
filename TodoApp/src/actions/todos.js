import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './action_types'

export function addTodo (todo) {
    return {
      type: ADD_TODO,
      todo,
    }
  }

 export function removeTodo (id) {
    return {
      type: REMOVE_TODO,
      id,
    }
  }

 export function toggleTodo (id) {
    return {
      type: TOGGLE_TODO,
      id,
    }
  }