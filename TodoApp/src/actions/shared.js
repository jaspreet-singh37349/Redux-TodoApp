import {RECEIVE_DATA} from './action_types'

export function receiveData (todos, goals) {
    return {
      type: RECEIVE_DATA,
      todos,
      goals,
    }
  }