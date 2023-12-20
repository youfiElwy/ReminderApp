const getEntriesFromCookie = require('../../utils/cookies.js').getEntriesFromCookie;
const db = require('../../connectors/db.js');

module.exports = function (app) {
	app.post('/addReminder', async (req, res) => {
		const { title, text, date, rem_type, image } = req.body;
		const { id } = getEntriesFromCookie(req);

		try {
			// Store the reminder in the database
			const reminder = await db('reminder')
				.insert({
					title,
					text,
					date,
					image,
					rem_type,
					user_id: id,
				})
				.returning('*');

			return res.status(200).json({ message: 'Reminder added to DB' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		}
	});
};
