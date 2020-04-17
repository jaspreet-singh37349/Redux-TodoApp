import {ADD_TODO, ADD_GOAL} from '../actions/action_types'

const checker = (store) => (next) => (action) => {

    if(action.type === ADD_TODO)
    {
      if(action.todo.name.length<3)
      {
        return alert("Length of item should be minimum of 3.")
      }
      if(action.todo.name.toLowerCase().includes('bitcoin'))
      {
        return alert("Nope. That's a bad idea.")
      }
    }

    if (action.type === ADD_GOAL) 
    {
      if(action.goal.name.length<3)
      {
        return alert("Length of item should be minimum of 3.")
      }
      if(action.goal.name.toLowerCase().includes('bitcoin'))
      {
            return alert("Nope. That's a bad idea.")
      }
    }

    return next(action)
  }

  export default checker