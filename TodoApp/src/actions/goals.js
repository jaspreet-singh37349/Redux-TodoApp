import {ADD_GOAL, REMOVE_GOAL} from './action_types'

export function addGoal (goal) {
    return {
      type: ADD_GOAL,
      goal,
    }
  }

  export function removeGoal (id) {
    return {
      type: REMOVE_GOAL,
      id,
    }
  }