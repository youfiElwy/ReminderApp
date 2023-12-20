import { useState, useEffect } from 'react';
import Reminder from '../reminder/reminder';

function ReminderList({ reminders }) {
	const [reminderList, setReminderList] = useState(reminders);

	useEffect(() => {
		setReminderList(reminders);
	}, [reminders]);

	const handleDelete = (id) => {
		const updatedList = reminderList.filter((reminder) => reminder.id !== id);
		setReminderList(updatedList);
	};

	reminderList.sort((a, b) => a.id - b.id);

	return (
		<>
			{reminderList.length > 0 ? (
				reminderList.map((reminder) => (
					<Reminder
						key={reminder.id}
						id={reminder.id}
						title={reminder.title}
						text={reminder.text}
						date={reminder.date}
						image={reminder.image}
						onDelete={handleDelete}
					/>
				))
			) : (
				<div className="h-[50vh]">
					<div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 w-4/5 md:w-2/3 lg:w-3/5">
						<div className="alert bg-gray-300 p-4 text-gray-700 rounded-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="stroke-info inline-block w-6 h-6 mr-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
							<span>You have no reminders!</span>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ReminderList;
