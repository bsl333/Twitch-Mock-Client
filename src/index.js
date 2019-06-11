import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducers from './reducers';

// needed to use redux-dev tools.
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, componseEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);