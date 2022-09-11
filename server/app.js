// 🫀 Module Imports
require('dotenv').config();
const Mailer = require('@sendgrid/mail');
const express = require('express');
const app = express();

// 👀 Request Body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 📨 Sendgrid Connection
Mailer.setApiKey(process.env.SG_API_KEY);

// 🎧 Server Listener
const PORT = process.env.PORT || 7000;
app.listen(PORT);

// 📮 Form Submittion Path
app.post('/submittion', (req, res) => {
	const data = req.body;
	const message = {
		to: process.env.SG_MAILER_TO,
		from: process.env.SG_MAILER_FROM,
		subject: 'You have received a new lead!',
		text: 'this is where the text is',
		html: `<p><strong>You got a new lead!</strong></p><br/><p><strong>Full name:</strong> ${data.name}</p><p><strong>E-mail address:</strong> ${data.email}</p><p><strong>Telephone number:</strong> ${data.telephone}</p><p><strong>Country:</strong> ${data.country}</p><p><strong>Comapny name:</strong> ${data.company}</p><p><strong>Team size:</strong> ${data.teamSize}</p>`,
	};

	Mailer.send(message)
		.then(() => res.json({ message: 'Message sent! 🛩' }))
		.catch(err => res.json({ message: err.message }));
});
