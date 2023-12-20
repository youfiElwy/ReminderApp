import React, { useState, useEffect } from 'react';
import defaultImage from '../../assets/defaultImage.jpg';

function Reminder({ id, title, text, date, image, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(title);
	const [editedText, setEditedText] = useState(text);
	const [editedDate, setEditedDate] = useState(formatDate(date)); // Format the initial date

	useEffect(() => {
		// Format the date when it changes in the parent component
		setEditedDate(formatDate(date));
	}, [date]);

	const handleEditClick = async () => {
		if (isEditing) {
			try {
				const response = await fetch('http://localhost:3001/editReminder', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					credentials: 'include',
					body: JSON.stringify({
						rem_id: id,
						title: editedTitle,
						text: editedText,
						date: editedDate,
					}),
				});

				if (response.status === 200) {
					// Exit edit mode after saving
					setIsEditing(false);
				} else {
					// Handle errors
					console.error('Error saving edited reminder');
				}
			} catch (error) {
				console.error('Error:', error.message);
			}
		} else {
			// Enter edit mode
			setIsEditing(true);
		}
	};

	const handleTitleChange = (e) => {
		setEditedTitle(e.target.value);
	};

	const handleTextChange = (e) => {
		setEditedText(e.target.value);
	};

	const handleDateChange = (e) => {
		// Create a new Date object from the editedDate string
		const editedDateObject = new Date(e.target.value);

		// Check if the date is valid
		if (!isNaN(editedDateObject)) {
			// Format the date as "YYYY-MM-DD"
			const formattedDate = new Date(
				editedDateObject.getTime() - editedDateObject.getTimezoneOffset() * 60000
			)
				.toISOString()
				.split('T')[0];

			// Update the state with the formatted date
			setEditedDate(formattedDate);
		}
	};

	const handleDeleteClick = async () => {
		try {
			// Send a DELETE request to your server with the ID in the request body
			const response = await fetch('http://localhost:3001/deleteReminder', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify({ rem_id: id }), // Include the ID in the request body
			});

			if (response.status === 200) {
				onDelete(id);
			} else {
				// Handle errors
				console.error('Error deleting reminder');
			}
		} catch (error) {
			console.error('Error:', error.message);
		}
	};

	// Function to format the date
	function formatDate(dateString) {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString(undefined, options);
	}

	return (
		<>
			<div className="hero min-h-[40vh] mt-4">
				<div className="hero-content group hover:bg-base-200 transition-colors duration-300 flex-col lg:flex-row-reverse bg-base-200 bg-opacity-50 rounded-3xl w-full">
					<img
						src={image}
						alt="No Image Added"
						className="w-48 h-48 lg:w-64 lg:h-64 rounded-lg shadow-2xl object-cover"
					/>
					<div className="flex-grow">
						{isEditing ? (
							<input
								type="text"
								value={editedTitle}
								onChange={handleTitleChange}
								className="text-5xl font-bold w-full bg-transparent border-none shadow-none rounded-lg p-0 m-0"
							/>
						) : (
							<input
								type="text"
								value={editedTitle}
								onChange={handleTitleChange}
								className="text-5xl font-bold w-full bg-transparent border-none shadow-none rounded-lg p-0 m-0"
								disabled
							/>
						)}
						{isEditing ? (
							<input
								type="date"
								value={formatDate(editedDate)}
								onChange={handleDateChange}
								className="text-xl bg-transparent border-none shadow-none rounded-lg p-0 m-0"
							/>
						) : (
							// <input
							// 	type="date"
							// 	value={formatDate(editedDate)}
							// 	onChange={handleDateChange}
							// 	className="text-xl bg-transparent border-none shadow-none rounded-lg p-0 m-0"
							// 	disabled
							// />
							<div className="badge badge-outline m-1">{formatDate(editedDate)}</div>
						)}
						{isEditing ? (
							<textarea
								value={editedText}
								onChange={handleTextChange}
								className="py-6 w-full bg-transparent border-none shadow-none rounded-lg p-0 m-0"
							/>
						) : (
							<textarea
								value={editedText}
								onChange={handleTextChange}
								className="py-6 w-full bg-transparent border-none shadow-none rounded-lg p-0 m-0"
								disabled
							/>
						)}
						<button className="btn btn-outline mr-3" onClick={handleEditClick}>
							{isEditing ? 'Save Edit' : 'Edit'}
						</button>
						<button className="btn btn-outline btn-error" onClick={handleDeleteClick}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Reminder;
