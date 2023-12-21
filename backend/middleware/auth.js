const getCookie = require('../utils/cookies').getEntriesFromCookie;

module.exports.verifyToken = (req, res, next) => {
	try {
		const authcookie = getCookie(req).id;
		return next();
	} catch (err) {
		return res.status(406).send('A token is required for authentication');
	}
	// console.log('token verfied');
	// console.log('the cookieee ' + getCookie(req));
	if (!authcookie) {
		return res.status(406).send('A token is required for authentication');
	}
};
