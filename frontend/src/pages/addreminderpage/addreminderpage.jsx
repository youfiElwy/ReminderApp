import '../../App.css';
import { motion } from 'framer-motion';
import AddReminderForm from '../../components/addReminderForm/addReminderForm';

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
	return (
		<>
			<motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
				<div className="flex items-center justify-center">
					<h1 className="text-4xl sm:text-6xl text-center">Add a new reminder</h1>
				</div>
				<AddReminderForm />
			</motion.div>
		</>
	);
}

export default Homepage;
