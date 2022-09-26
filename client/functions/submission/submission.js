const Mailer = require('@sendgrid/mail');
Mailer.setApiKey(process.env.SG_API_KEY);

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async event => {
	const { name, email, telephone, country, company, teamSize } = JSON.parse(event.body);

	const message = {
		to: process.env.SG_MAILER_TO,
		from: process.env.SG_MAILER_FROM,
		subject: 'You have received a new lead!',
		html: `<p><strong>You got a new lead!</strong></p><br/><p><strong>Full name:</strong> ${name}</p><p><strong>E-mail address:</strong> ${email}</p><p><strong>Telephone number:</strong> ${telephone}</p><p><strong>Country:</strong> ${country}</p><p><strong>Comapny name:</strong> ${company}</p><p><strong>Team size:</strong> ${teamSize}</p>`,
	};

	Mailer.send(message)
		.then(() => {
			return {
				statusCode: 200,
				message: 'A sales representative from our team will be in touch soon.',
			};
		})
		.catch(error => {
			return {
				statusCode: 500,
				message: error.toString(),
			};
		});

	// try {
	// 	return {
	// 		statusCode: 200,
	// 		body: JSON.stringify({
	// 			message: 'A sales representative from our team will be in touch soon.',
	// 			event,
	// 			jsonBody: { name, email, telephone, country, company, teamSize },
	// 			data: message,
	// 		}),
	// 		// // more keys you can return:
	// 		// headers: { "headerName": "headerValue", ... },
	// 		// isBase64Encoded: true,
	// 	};
	// } catch (error) {
	// 	return { statusCode: 500, message: error.toString() };
	// }
};

module.exports = { handler };
