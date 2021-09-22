import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import axios from 'axios';
import users from './reducers/users';
import App from './components/App';
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers } from 'redux';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(combineReducers({
  users: users
}), applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
