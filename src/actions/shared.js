import {RECEIVE_DATA} from './action_types'
import API from '../Api/index'

function receiveData (todos, goals) {
    return {
      type: RECEIVE_DATA,
      todos,
      goals,
    }
  }

  export function handleInitialData () {
    return (dispatch) => {
      return Promise.all([
        API.fetchTodos(),
        API.fetchGoals()
      ]).then(([ todos, goals ]) => {
        dispatch(receiveData(todos, goals))
      })
    }
  }