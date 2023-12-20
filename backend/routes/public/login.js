const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../../connectors/db.js');

function verifyPassword(password, hash, salt) {
	const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
	return verifyHash === hash;
}

module.exports = function (app) {
	app.post('/login', async function (req, res) {
		const { username, password } = req.body;

		try {
			// Check if the username exists in the database
			const user = await db('users').where('username', username).first();

			if (!user) {
				return res.status(600).json({ message: 'Username does not exists' });
			}

			// Verify the password
			if (!verifyPassword(password, user.password, user.salt)) {
				return res.status(601).json({ message: 'Incorrect password' });
			}

			// User is authenticated, create a JWT token
			const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT, {
				expiresIn: '1h', // Set your preferred expiration time
			});

			// Set the token as a cookie
			res.cookie('authcookie', token, {
				httpOnly: true,
				secure: true,
				sameSite: 'none',
				expires: new Date(Date.now() + 1 * 60 * 60 * 1000), // Expires in 1 hour
			});

			// Send a success response
			return res.status(200).json({ message: 'Login successful' });
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
};
