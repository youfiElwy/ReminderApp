const db = require('../../connectors/db.js');

module.exports = function (app) {
	app.put('/editReminder', async function (req, res) {
		const { rem_id, title, text, date } = req.body;

		const updatedReminder = {
			title,
			text,
			date,
		};

		try {
			const reminder = await db('reminder')
				.where('id', rem_id)
				.update(updatedReminder)
				.returning('*');

			return res.status(200).json({ message: 'Reminder updated at DB' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		}
	});
};
