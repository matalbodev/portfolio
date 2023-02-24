import { DBSkillsType } from "@/types/skills";
import { fetcher } from "@/utils/api";
import { NextApiRequest, NextApiResponse } from "next";
// import next config
import getConfig from "next/config";

const MockSkills = [
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

const convertSkills = (skills: DBSkillsType) => {
	const config = getConfig();
	const IMAGES_HOST = config?.publicRuntimeConfig?.imagesHost || "";
	return skills.data.map((skill) => {
		const iconUrl = skill.attributes.icon?.data?.attributes?.url;
		return {
			name: skill.attributes.name,
			xp: skill.attributes.experience,
			icon: iconUrl ? `${IMAGES_HOST}${iconUrl}` : null,
		};
	});
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	let skills;
	const method = req.method;
	try {
		skills = await fetcher("api/skills?populate[0]=icon", (method as "GET" | "POST" | "PUT" | "DELETE") || "GET");
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(500).json({ error: error.message });
		}
		return res.status(500).json({ error: "Unknown error" });
	}

	res.status(200).json(convertSkills(skills));
}
