import '../../App.css';
import HomeHero from '../../components/homeHero/homeHero';
import Reminders from '../../components/reminderList/reminderList';
import HomeSection2 from '../../components/homeSection2/homeSection2';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

function Homepage() {
	const [reminders, setReminders] = useState([]);
	const navigate = useNavigate();

	const getReminders = async () => {
		await fetch('http://localhost:3001/getNormalReminders/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		})
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				} else if (response.status === 406) {
					// Handle 403 status (e.g., display an error message)
					console.log('Unauthorized access. Redirecting to login page.');
					navigate('/');
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
		getReminders();
	}, []);

	return (
		<>
			<motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
				<HomeHero />
				<div className="flex items-center justify-center">
					<h1 className="text-4xl sm:text-6xl text-center my-20">Normal Reminders</h1>
				</div>
				<div className="mt-10">
					<Reminders reminders={reminders} />
				</div>
				<HomeSection2 />
			</motion.div>
		</>
	);
}

export default Homepage;
