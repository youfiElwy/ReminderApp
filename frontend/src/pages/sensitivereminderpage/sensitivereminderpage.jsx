import '../../App.css';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reminders from '../../components/reminderList/reminderList';

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 1.5, duration: 1.5, ease: 'easeInOut' },
	},
	exit: {
		x: '-100vw',
		transition: { ease: 'easeInOut' },
	},
};

function SensitiveReminderPage() {
	const navigate = useNavigate();
	const [reminders, setReminders] = useState([]);
	const [accessGranted, setAccessGranted] = useState(true);
	const [message, setMessage] = useState('');

	let isEffectRun = false;

	const getReminders = async () => {
		await fetch('http://localhost:3001/getSensitiveReminders/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		})
			.then((response) => {
				if (response.status === 200) {
					setAccessGranted(true);
					return response.json();
				} else if (response.status === 406) {
					// Handle 403 status (e.g., display an error message)
					console.log('Unauthorized access. Redirecting to login page.');
					navigate('/');
				} else if (response.status === 403) {
					setAccessGranted(false);
					console.log(
						response.json().then((response) => {
							setMessage(response.message);
						})
					);
				} else {
					return response.text().then((error) => {
						console.log(error);
					});
				}
			})
			.then((data) => {
				if (data) {
					setReminders(data);
				}
			})
			.catch((error) => {
				console.error('Error:', error.message);
			});
	};

	useEffect(() => {
		if (!isEffectRun) {
			getReminders();
			isEffectRun = true;
		}
	}, []);

	return (
		<>
			<motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
				<div className="flex items-center justify-center">
					<h1 className="text-4xl sm:text-6xl text-center my-20">Sensitive Reminders</h1>
				</div>
				<div className="mt-10">
					{accessGranted ? (
						<Reminders reminders={reminders} />
					) : (
						<>
							<div className="flex items-center justify-center">
								<div className="h-[50vh] w-[90vw]">
									<div role="alert" className="alert alert-error">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="stroke-current shrink-0 h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<span>{message}</span>
										<span className="loading loading-infinity loading-lg"></span>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</motion.div>
		</>
	);
}

export default SensitiveReminderPage;
