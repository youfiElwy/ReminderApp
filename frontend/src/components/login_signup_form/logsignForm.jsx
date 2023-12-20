import { useNavigate } from 'react-router-dom';
import './logsignForm.css';

function LogSignForm({ setShowNavNFooter }) {
	const navigate = useNavigate();

	const handleLogInClick = async () => {
		// Get the input values
		const username = document.getElementsByName('username')[0].value;
		const password = document.getElementsByName('password')[0].value;

		if (!username || !password) {
			alert('Please enter both the username and password.');
			return;
		}

		try {
			// Prepare the data to send in the request body
			const requestBody = {
				username,
				password,
			};

			// Send a POST request to your server for login
			const response = await fetch('http://localhost:3001/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify(requestBody),
			});

			if (response.status === 200) {
				// If the response status is 200, navigate to the '/home' page
				navigate('/home');
				setShowNavNFooter(true);
			} else if (response.status === 600) {
				alert('Username does not exists');
			} else {
				alert('Incorrect password');
			}
		} catch (error) {
			console.error('Error:', error.message);
		}
	};

	const handleSignUpClick = async () => {
		// Get the input values
		const username = document.getElementsByName('username')[1].value;
		const password = document.getElementsByName('password')[1].value;

		if (!username || !password) {
			alert('Please enter both the username and password.');
			return;
		}

		try {
			// Prepare the data to send in the request body
			const requestBody = {
				username,
				password,
			};

			// Send a POST request to your server for sign-up
			const response = await fetch('http://localhost:3001/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify(requestBody),
			});

			if (response.status === 200) {
				// If the response status is 200, navigate to the '/login' page
				navigate('/');
			} else {
				alert('Username already taken');
			}
		} catch (error) {
			console.error('Error:', error.message);
		}
	};

	return (
		<>
			<div className="logsign-wrapper">
				<div className="logsign-card-switch">
					<label className="logsign-switch">
						<input type="checkbox" className="logsign-toggle" />
						<span className="logsign-slider"></span>
						<span className="logsign-card-side"></span>
						<div className="logsign-flip-card__inner">
							<div className="logsign-flip-card__front">
								<div className="logsign-title">Log in</div>
								<div className="logsign-flip-card__form" action="">
									<input
										className="logsign-flip-card__input"
										name="username"
										placeholder="Username"
										type="text"
									/>
									<input
										className="logsign-flip-card__input"
										name="password"
										placeholder="Password"
										type="password"
									/>
									<button className="logsign-flip-card__btn" onClick={handleLogInClick}>
										Log In
									</button>
								</div>
							</div>
							<div className="logsign-flip-card__back">
								<div className="logsign-title">Sign up</div>
								<div className="logsign-flip-card__form" action="">
									<input
										className="logsign-flip-card__input"
										name="username"
										placeholder="Username"
										type="text"
									/>
									<input
										className="logsign-flip-card__input"
										name="password"
										placeholder="Password"
										type="password"
									/>
									<button className="logsign-flip-card__btn" onClick={handleSignUpClick}>
										Sign Up
									</button>
								</div>
							</div>
						</div>
					</label>
				</div>
			</div>
		</>
	);
}

export default LogSignForm;
