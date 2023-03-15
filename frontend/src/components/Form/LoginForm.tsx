import React from 'react';

import { SubmitButton } from '../ui/SubmitButton';
import { AuthInput } from '../ui/AuthInput';

import { StyledForm } from './styles';

const LoginForm: React.FC = () => {
	return (
		<StyledForm>
			<h4>Login</h4>
			<p>Login and start setting goals</p>
			<AuthInput placeholder="Enter your email" type="text" />
			<AuthInput placeholder="Enter password" type="password" />
			<SubmitButton />
		</StyledForm>
	);
};

export default LoginForm;
