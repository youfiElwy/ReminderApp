const getEntriesFromCookie = require('../../utils/cookies.js').getEntriesFromCookie;
const db = require('../../connectors/db.js');

var cooldownTime = -1;

module.exports = function (app) {
	app.get('/getSensitiveReminders', async function (req, res) {
		const { id } = getEntriesFromCookie(req);

		const currentTime = Date.now();

		if (currentTime < cooldownTime - 2000) {
			// User is still in cooldown period
			const remainingCooldown = cooldownTime - currentTime;

			return res.status(403).json({
				message: `Access restricted. Please wait ${
					remainingCooldown / 1000
				} seconds before accessing your sensitive reminders again.`,
			});
		}

		try {
			const reminders = await db('reminder')
				.where('user_id', id)
				.andWhere('rem_type', 'sensitive')
				.returning('*');

			cooldownTime = Date.now() + 20 * 1000;

			return res.status(200).json(reminders);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		}
	});
};
