import React, {Component} from 'react'
import API from '../Api/index'
import {addGoal, removeGoal} from '../actions/goals'
import List from './List'

class Goals extends Component {
    addItem = (e) => {
      e.preventDefault()

      return API.saveGoal(this.input.value)
        .then((goal) => {
          this.props.store.dispatch(addGoal(goal))
          this.input.value = ''
        })
        .catch(() => alert('There was an error. Try again.'))
    }
    removeItem = (goal) => {
      this.props.store.dispatch(removeGoal(goal.id))

      return API.deleteGoal(goal.id)
        .catch(() => {
          this.props.store.dispatch(addGoal(goal))
          alert('An error occurred. Try again.')
        })
    }
    render() {
      return (
        <div>
          <h1>Goals</h1>
          <input
            type='text'
            placeholder='Add Goal'
            ref={(input) => this.input = input}
          />
          <button onClick={this.addItem}>Add Goal</button>

          <List
            items={this.props.goals}
            remove={this.removeItem}
          />
        </div>
      )
    }
  }

  export default Goals