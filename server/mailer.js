require('dotenv').config();
const Mailer = require('@sendgrid/mail');
Mailer.setApiKey(process.env.SG_API_KEY);

const message = {
	to: 'semoud.o@gmail.com',
	from: 'semoud@motiveprod.com',
	subject: 'This is the subject',
	text: 'this is where the text is',
	html: '<strong>this is where the html is</strong>',
};

Mailer.send(message)
	.then(() => {
		console.log('Email sent');
	})
	.catch(error => {
		console.error(error);
	});
