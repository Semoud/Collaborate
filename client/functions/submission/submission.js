const Mailer = require('@sendgrid/mail');
Mailer.setApiKey(process.env.SG_API_KEY);

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async event => {
	const body = JSON.parse(event.body);

	const message = {
		to: process.env.SG_MAILER_TO,
		from: process.env.SG_MAILER_FROM,
		subject: 'You have received a new lead!',
		text: 'this is where the text is',
		html: `<p><strong>You got a new lead!</strong></p><br/><p><strong>Full name:</strong> ${body.name}</p><p><strong>E-mail address:</strong> ${body.email}</p><p><strong>Telephone number:</strong> ${body.telephone}</p><p><strong>Country:</strong> ${body.country}</p><p><strong>Comapny name:</strong> ${body.company}</p><p><strong>Team size:</strong> ${body.teamSize}</p>`,
	};

	try {
		Mailer.send(message);
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: 'A sales representative from our team will be in touch soon.',
				event,
				jsonBody,
				data: message,
			}),
			// // more keys you can return:
			// headers: { "headerName": "headerValue", ... },
			// isBase64Encoded: true,
		};
	} catch (error) {
		return { statusCode: 500, message: error.toString() };
	}
};

module.exports = { handler };
