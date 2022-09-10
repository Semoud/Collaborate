// 🫀 Module Imports
require('dotenv').config();
const Mailer = require('@sendgrid/mail');
const express = require('express');
const app = express();

// 📨 Sendgrid Connection
Mailer.setApiKey(process.env.SG_API_KEY);

// 🎧 Server Listener
app.listen(7000);

// 📮 Form Submittion Path
app.get('/submittion', (req, res) => {
	console.log(req);
	const message = {
		to: process.env.SG_MAILER_TO,
		from: process.env.SG_MAILER_FROM,
		subject: 'This is the subject',
		text: 'this is where the text is',
		html: '<strong>this is where the html is</strong>',
	};
	Mailer.send(message)
		.then(data => res.json({ message: 'Message sent! 🛩', response: data }))
		.catch(err => res.json({ message: 'Message failed! 🚨', response: err }));
});
