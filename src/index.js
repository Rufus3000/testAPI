import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux'
import App from './components/App'
import Ui from './components/Ui'
import reducer from './reducers'

const DEFAULT_STATE ={
  date: '',
  items:[]
}
const storeWM = applyMiddleware(promiseMiddleware())(createStore)(reducer, DEFAULT_STATE);

render(
  <Provider store={storeWM}>
    <App />
  </Provider>,
  document.getElementById('root')
)
