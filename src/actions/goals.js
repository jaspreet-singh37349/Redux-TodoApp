import {ADD_GOAL, REMOVE_GOAL} from './action_types'
import API from '../Api/index'

function addGoal (goal) {
    return {
      type: ADD_GOAL,
      goal,
    }
  }

  function removeGoal (id) {
    return {
      type: REMOVE_GOAL,
      id,
    }
  }

  export function handleAddGoal (name, cb) {
    return (dispatch) => {
      return API.saveGoal(name)
        .then((goal) => {
          dispatch(addGoal(goal))
          cb()
        })
        .catch(() => alert('There was an error. Try again.'))
    }
  }

  export function handleDeleteGoal (goal) {
    return (dispatch) => {
      dispatch(removeGoal(goal.id))

      return API.deleteGoal(goal.id)
        .catch(() => {
          dispatch(addGoal(goal))
          alert('An error occurred. Try again.')
        })
    }
  }