const getEntriesFromCookie = require('../../utils/cookies.js').getEntriesFromCookie;
const db = require('../../connectors/db.js');

module.exports = function (app) {
	app.get('/getFrequentReminders', async function (req, res) {
		const { id } = getEntriesFromCookie(req);

		try {
			const reminders = await db('reminder')
				.where('user_id', id)
				.andWhere('rem_type', 'frequent')
				.returning('*');

			return res.status(200).json(reminders);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		}
	});
};
