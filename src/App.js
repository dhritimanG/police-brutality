import React from "react"
import logo from "./logo.svg"
import "./App.css"
import reducer from "./store/reducer"
import { Provider } from "react-redux"
import { createStore } from "redux"
import ConnectedApp from "./ConnectedApp"

const store = createStore(reducer)

function App(props) {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}

export default App
