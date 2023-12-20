const db = require('../../connectors/db.js');

module.exports = function (app) {
	app.delete('/deleteReminder', async function (req, res) {
		const { rem_id } = req.body;

		try {
			const reminder = await db('reminder').where('id', rem_id).del().returning('*');

			return res.status(200).json(reminder);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		}
	});
};
