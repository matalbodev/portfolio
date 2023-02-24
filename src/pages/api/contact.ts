import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	let nodemailer = require("nodemailer");
	let error;
	const transporter = nodemailer.createTransport({
		port: process.env.MAIL_PORT,
		host: process.env.MAIL_HOST,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASSWORD,
		},
		secure: true,
	});
	const { name, email, message } = req.body;

	const MAIL_BODY = `
    <h1>Message from ${name} (${email})</h1>
    <p>${message}</p>
  `;

	transporter.sendMail(
		{
			from: email,
			to: process.env.MAIL_TO,
			subject: `Message from ${name} (${email})`,
			text: MAIL_BODY,
		},
		(err: unknown, info: unknown) => {
			if (err) {
				error = err;
			}
		}
	);

	if (error) {
		return res.status(500).json({ error: "Message not sent" });
	}

	return res.status(200).json({ message: `Message sent to ${process.env.MAIL_TO}` });
}
