import '../../App.css';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Reminders from '../../components/reminderList/reminderList';
import testImage from '../../assets/cat1.webp';

// const reminders = [
// 	{
// 		id: 1,
// 		title: 'Reminder 1 SENSITIVE',
// 		text: "This is the text for reminder 1 and I love hotdogs. Hotdogs are really good. I also love McDonald's pancakes and chicken egg McMuffins.",
// 		date: '04/21/2003',
// 		image: testImage,
// 	},
// 	{
// 		id: 2,
// 		title: 'Reminder 2',
// 		text: 'This is the text for reminder 2. Insert your text here.',
// 		date: '04/21/2003',
// 		image: testImage,
// 	},
// 	{
// 		id: 3,
// 		title: 'Reminder 3',
// 		text: 'This is the text for reminder 3. Insert your text here.',
// 		date: '04/21/2003',
// 		image: testImage,
// 	},
// 	{
// 		id: 4,
// 		title: 'Reminder 4',
// 		text: 'This is the text for reminder 4. Insert your text here.',
// 		date: '04/21/2003',
// 		image: testImage,
// 	},
// 	{
// 		id: 5,
// 		title: 'Reminder 5',
// 		text: 'This is the text for reminder 5. Insert your text here.',
// 		date: '04/21/2003',
// 		image: testImage,
// 	},
// 	{
// 		id: 6,
// 		title: 'Reminder 6',
// 		text: 'This is the text for reminder 6. Insert your text here.',
// 		date: '04/21/2003',
// 		image: testImage,
// 	},
// ];

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
	const [reminders, setReminders] = useState([]);

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
					return response.json();
				} else {
					return response.text().then((error) => {
						console.log(error);
					});
				}
			})
			.then((data) => {
				setReminders(data);
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
				<div className="flex items-center justify-center">
					<h1 className="text-4xl sm:text-6xl text-center my-20">Sensitive Reminders</h1>
				</div>
				<div className="mt-10">
					<Reminders reminders={reminders} />
				</div>{' '}
			</motion.div>
		</>
	);
}

export default SensitiveReminderPage;
