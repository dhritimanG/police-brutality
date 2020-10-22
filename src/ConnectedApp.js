import React from "react"
import { connect } from "react-redux"
import * as actionTypes from "./store/actions"

function ConnectedApp(props) {
  console.log(props.number)
  return (
    <div className="App">
      <header>Hello World</header>
      <button onClick={props.add}>+</button>
      <button onClick={props.subtract}>-</button>
    </div>
  )
}

const mapState = (state) => {
  return {
    number: state,
  }
}

const mapDispatch = (dispatch) => {
  return {
    add: () => dispatch({ type: actionTypes.ADD }),
    subtract: () => dispatch({ type: actionTypes.SUBTRACT }),
  }
}

export default connect(mapState, mapDispatch)(ConnectedApp)
