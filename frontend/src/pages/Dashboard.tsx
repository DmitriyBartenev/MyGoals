import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const Dashboard: React.FC = () => {
	const navigate = useNavigate();

	const { user } = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user, navigate]);

	return (
		<section>
			<h1>Welcome {user && user.name}</h1>
		</section>
	);
};

export default Dashboard;
