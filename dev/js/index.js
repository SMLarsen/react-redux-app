/*jshint esversion: 6 */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './containers/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = createStore(allReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
