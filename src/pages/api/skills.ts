import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const skills = [
		{
			name: "React",
			xp: 5,
			icon: "/skills/react.svg",
		},
		{
			name: "Next.js",
			xp: 5,
			icon: "/skills/next.svg",
		},
		{
			name: "TypeScript",
			xp: 5,
			icon: "/skills/typescript.svg",
		},
		{
			name: "JavaScript",
			xp: 4,
			icon: "/skills/javascript.svg",
		},
		{
			name: "CSS/SCSS",
			xp: 9,
			icon: "/skills/sass.svg",
		},
		{
			name: "HTML 5",
			xp: 9,
			icon: "/skills/html-5.svg",
		},
	];

	res.status(200).json(skills);
}
