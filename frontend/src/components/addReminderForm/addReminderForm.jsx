import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw',
	},
	visible: {
		opacity: 1,
		x: '0vw',
		transition: { delay: 1.5, duration: 1, ease: 'easeInOut' },
	},
};

function AddReminderForm() {
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [date, setDate] = useState('');
	const [rem_type, setRemType] = useState('');
	const [addImage, setAddImage] = useState('');
	const [added, setAdded] = useState(false);

	const convertToBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const handleProfilePicUpload = async (e) => {
		const file = e.target.files[0];
		if (!file) {
			setAdded(false);
			setAddImage('');
			return;
		}
		const base64 = await convertToBase64(file);
		setAddImage(base64);
		setAdded(true);
	};

	const handleAddClick = async () => {
		try {
			if (!title || !text || !date || !rem_type) {
				alert('Please fill in all the required fields.');
				return;
			}

			const response = await fetch('http://localhost:3001/addReminder', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify({
					title,
					text,
					date,
					rem_type,
					image: addImage,
				}),
			});

			if (response.status === 200) {
				navigate('/home');
			} else {
				console.error('Error adding reminder');
			}
		} catch (error) {
			console.error('Error:', error.message);
		}
	};

	return (
		<>
			<motion.div
				className="hero min-h-screen bg-base-100"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<div className="card flex-shrink-0 w-9/12 shadow-2xl bg-base-300">
					<div className="card-body">
						<div className="form-control flex flex-wrap flex-row items-center gap-4">
							<input
								type="text"
								placeholder="Reminder Header"
								className="flex-grow input input-bordered"
								required
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<label className="label">
								<span className="label-text">Deadline :</span>
							</label>
							<input
								type="date"
								id="deadline"
								placeholder="Deadline"
								className="input input-bordered"
								required
								value={date}
								onChange={(e) => setDate(e.target.value)}
							/>
						</div>

						<div className="form-control">
							<textarea
								id="reminderText"
								className="textarea"
								placeholder="My reminder is . . ."
								maxLength="100"
								required
								value={text}
								onChange={(e) => setText(e.target.value)}
							></textarea>
						</div>

						<div className="flex items-start">
							<label htmlFor="file-upload">
								{!added ? (
									<>No Image Selected</>
								) : (
									<img
										className="custom-file-upload border-4 border-base-100 rounded"
										src={addImage}
										alt=""
									></img>
								)}
							</label>
							<input
								className="ppInput"
								type="file"
								lable="Image"
								name="myFile"
								id="file-upload"
								accept=".jpeg, .png, .jpg"
								onChange={(e) => handleProfilePicUpload(e)}
							/>
						</div>

						<div className="form-control mt-6">
							<label className="label cursor-pointer">
								<span className="label-text">Normal</span>
								<input
									type="radio"
									name="radio-10"
									className="radio checked:bg-blue-500"
									value="normal"
									required
									onChange={(e) => setRemType(e.target.value)}
								/>
							</label>

							<label className="label cursor-pointer">
								<span className="label-text">Frequent</span>
								<input
									type="radio"
									name="radio-10"
									className="radio checked:bg-blue-500"
									value="frequent"
									required
									onChange={(e) => setRemType(e.target.value)}
								/>
							</label>

							<label className="label cursor-pointer">
								<span className="label-text">Sensitive</span>
								<input
									type="radio"
									name="radio-10"
									className="radio checked:bg-blue-500"
									value="sensitive"
									required
									onChange={(e) => setRemType(e.target.value)}
								/>
							</label>
						</div>

						<div className="form-control mt-6">
							<button className="btn btn-neutral" onClick={handleAddClick}>
								+ Add Reminder
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default AddReminderForm;
