import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import './components/register/registerForm.css';

import './index.css';
import Root from './components/Root';
import { configureStore } from './store';
import Ads from './components/adslist';

const history = createBrowserHistory();
const store = configureStore({ Ads, history })();

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
