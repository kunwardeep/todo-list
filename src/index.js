import 'babel-polyfill';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import loadTodos from './actions/todoActions';

const store = configureStore();
store.dispatch(loadTodos());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
document.getElementById('app'));
