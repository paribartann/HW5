import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers'
import './index.css'

//const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

// const store = createStore(reducer, persistedState)
const store = createStore(reducer);

// store.subscribe(()=>{
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

console.log(store)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)