import * as actionTypes from "./actions"

const initialState = {
  myNumber: 0,
  myString: "Hello",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD: {
      return { ...state, myNumber: state.myNumber + 1 }
    }
    case actionTypes.SUBTRACT: {
      return { ...state, myNumber: state.myNumber - 1 }
    }
  }
}

export default reducer
