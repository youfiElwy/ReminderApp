const db = require('../../connectors/db.js');

module.exports = function (app) {
	app.get('/logout', async function (req, res) {
		try {
			// Clear authentication-related cookies
			res.clearCookie('authcookie');
			res.clearCookie('refreshToken');

			// Send a response indicating successful logout
			res.status(200).json({ message: 'Logout successful' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		}
	});
};
