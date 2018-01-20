import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import Routes from './Routes'

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
	(state = {}) => state, applyMiddleware(thunk)
);

render((
	<Provider store={store}>
		<Router>
			<Routes />
		</Router>
	</Provider>
), document.getElementById('app'));