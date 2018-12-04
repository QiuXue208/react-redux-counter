import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'  

const reducer = (state = { count: 0 }, action)=>{
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch({type:'increase'})
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
