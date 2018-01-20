import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App';
import SignupPage from './components/signup/SignupPage';


class Routes extends React.Component{
	render(){
		return(
			<div>
				<Route exact path="/" component={App} />
				<Route exact path="/signup" component={SignupPage} />
			</div>
		)
	}
}

export default Routes;