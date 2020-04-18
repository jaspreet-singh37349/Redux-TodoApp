import React, {Component} from 'react'
import {handleAddGoal, handleDeleteGoal} from '../actions/goals'
import List from './List'

class Goals extends Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.store.dispatch(handleAddGoal(
      this.input.value,
      () => this.input.value = ''
    ))
  }
  removeItem = (goal) => {
    this.props.store.dispatch(handleDeleteGoal(goal))
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