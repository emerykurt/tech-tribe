import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import { reducer as searchReducer, reduxSearch } from 'redux-search'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const enhancer = compose(
  applyMiddleware(thunk),
  reduxSearch({
    resourceIndexes: {
      companies: ['name']
    },
    resourceSelector: ( state) => {
      return state.companies
    }
  })
)
const store = createStore(
  rootReducer, 
  enhancer)

ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
