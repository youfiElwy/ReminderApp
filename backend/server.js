// IMPORTS
require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // Add cookie parser middleware
const PORT = process.env.BACKENDURL || 3001; // Update the port configuration
const bodyParser = require('body-parser');
// IMPORT AUTHENTICATION MIDDLEWARE
const authMiddleware = require('./middleware/auth.js'); // Update the path to the auth middleware

const cors = require('cors');
app.use(
	cors({
		origin: process.env.FRONTEND,
		credentials: true,
	})
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Add JSON body parser
app.use(cookieParser()); // Use cookie parser middleware

// PUBLIC ROUTES
const login = require('./routes/public/login.js');
const signup = require('./routes/public/signup.js');

// PRIVATE ROUTES
const addReminder = require('./routes/private/addReminder.js');
const getNormalReminders = require('./routes/private/getNormalReminders.js');
const getFrequentReminders = require('./routes/private/getFrequentReminders.js');
const getSensitiveReminders = require('./routes/private/getSensitiveReminders.js');
const deleteReminder = require('./routes/private/deleteReminder.js');
const editReminder = require('./routes/private/editReminder.js');
const getReminderImage = require('./routes/private/getReminderImage.js');

// PUBLIC ROUTES
login(app);
signup(app);

getReminderImage(app);
// PRIVATE ROUTES
app.use(authMiddleware.verifyToken);
addReminder(app);
getNormalReminders(app);
getFrequentReminders(app);
getSensitiveReminders(app);
deleteReminder(app);
editReminder(app);

// 404 Error Handling
app.use((req, res, next) => {
	res.status(404).send('Error: Could not find the specified route/page');
});

// START SERVER
app.listen(PORT, () => {
	console.log(`Server is now listening at port ${PORT} on http://localhost:${PORT}/`);
});
