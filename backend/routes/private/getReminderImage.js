const path = require('path');

module.exports = function (app) {
	app.get('/getReminderImage/:id', async function (req, res) {
		const id = req.params.id;
		const filePath = path.join(__dirname, 'uploads', id + '.jpg');
		res.sendFile(filePath);
	});
};
