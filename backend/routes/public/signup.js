const crypto = require('crypto');
const db = require('../../connectors/db.js');

function hashPassword(password) {
	const salt = crypto.randomBytes(16).toString('hex');
	const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
	return [hash, salt];
}

module.exports = function (app) {
	app.post('/signup', async function (req, res) {
		const { username, password } = req.body;

		try {
			// Check if the username or email already exists in the database
			const existingUser = await db('users').where('username', username).first();

			if (existingUser) {
				return res.status(600).json({ message: 'Username already exists' });
			}

			// Hash the password before storing it in the database
			const hash = hashPassword(req.body.password);

			// Store the user in the database
			const user = await db('users')
				.insert({
					username: username,
					password: hash[0],
					salt: hash[1],
				})
				.returning('*');

			return res.status(200).json({ message: 'User registered successfully' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		}
	});
};
