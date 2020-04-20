import React, { Component } from 'react'
import Todos from '../components/todos'
import Goals from '../components/goals'
import {handleInitialData} from '../actions/shared'
import {connect} from '../contextApi/ContextApi'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    console.log("Connecting components using Context Api")

    dispatch(handleInitialData())
  }
  render() {

    if (this.props.loading === true) {
      return <h3>Loading...</h3>
    }

    return (
      <div>
        <Todos />
        <Goals />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
