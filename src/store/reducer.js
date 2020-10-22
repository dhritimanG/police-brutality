import * as actionTypes from "./actions"

const initialState = 0

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD: {
      return state + 1
    }
    case actionTypes.SUBTRACT: {
      return state - 1
    }
  }
}

export default reducer
