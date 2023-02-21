import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	let nodemailer = require("nodemailer");
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

	if (!name || !email || !message) {
		return res.status(400).json({ error: "Missing body parameter" });
	}

	transporter.sendMail(
		{
			from: process.env.MAIL_FROM,
			to: process.env.MAIL_TO,
			subject: `Message from ${name} (${email})`,
			text: message,
		},
		(err: unknown, info: unknown) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ error: "Internal server error" });
			}
			console.log(info);
			return res.status(200).json({ message: "Message sent successfully!" });
		}
	);
}
