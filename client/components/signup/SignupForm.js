import React from 'react';
import timezones from '../../data/timezones'
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';


class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			errors: '',
			isLoading: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name] : e.target.value });
	}

	isValid(){
		const { errors, isValid } = validateInput(this.state);
		if(!isValid){
			this.setState({ errors });
		}
		return isValid;
	}


	onSubmit(e){
		e.preventDefault();

		if (this.isValid()){

			this.setState({errors: {}, isLoading: true });
			
			this.props.userSignupRequest(this.state)
				.then(
					() => {},
					({ data }) => this.setState({ errors: data, isLoading: false})
				);
			
		}
	}

	render(){
		const { errors } = this.state;

		const options = map(timezones, (val, key) =>
			<option key={val} value={val}>{key}</option>
		);

		return(
			<form onSubmit={this.onSubmit}>
				<h1>Join our team</h1>
				<div className="form-group">
 					<label className="control-label">Username</label>
 					<input
 					value={this.state.username}
 					onChange={this.onChange}
 					type="text"
 					name="username"
 					className={classnames("form-control", { 'is-invalid': errors.username })}
 					/>
 					{errors.username &&
 						<span className="invalid-feedback">{errors.username}</span>}
				</div>

				<div className="form-group">
 					<label className="control-label">Email</label>
 					<input
 					value={this.state.email}
 					onChange={this.onChange}
 					type="text"
 					name="email"
 					className={classnames("form-control", { 'is-invalid': errors.email })}
 					/>
 					{errors.email &&
 						<span className="invalid-feedback">{errors.email}</span>}
				</div>

				<div className="form-group">
 					<label className="control-label">Password</label>
 					<input
 					value={this.state.password}
 					onChange={this.onChange}
 					type="password"
 					name="password"
 					className={classnames("form-control", { 'is-invalid': errors.password })}
 					/>
 					{errors.password &&
 						<span className="invalid-feedback">{errors.password}</span>}
				</div>

				<div className="form-group">
 					<label className="control-label">Password Confirmation</label>
 					<input
 					value={this.state.passwordConfirmation}
 					onChange={this.onChange}
 					type="password"
 					name="passwordConfirmation"
 					className={classnames("form-control", { 'is-invalid': errors.passwordConfirmation })}
 					/>
 					{errors.passwordConfirmation &&
 						<span className="invalid-feedback">{errors.passwordConfirmation}</span>} 					
				</div>

				<div className = "form-group">
					<label className="control-label">Timezone</label>
					<select
						className={classnames("form-control", { 'is-invalid': errors.timezone })}
						name="timezone"
						onChange={this.onChange}
						value={this.state.timezone}
					>
						<option value="" disabled>Choose your Timezone</option>
						{options}
					</select>
 					{errors.timezone &&
 						<span className="invalid-feedback">{errors.timezone}</span>}
				</div>

				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-primary brn-lg">
						Sign Up
					</button>
				</div>
			</form>
		)
	}
}

export default SignupForm;