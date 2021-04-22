import React from 'react';
import ReactDOM from 'react-dom';
import { provider,connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import 'tachyons';

import reportWebVitals from './reportWebVitals';
import { searchRobots } from './reducers';
const store = createStore(searchRobots);

ReactDOM.render(
  <React.StrictMode>
	    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
