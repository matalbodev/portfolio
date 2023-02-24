import { DBSkillsType } from "@/types/skills";
import { API_HOST } from "@/utils/api";
import { fetcher } from "@/utils/api";
import { NextApiRequest, NextApiResponse } from "next";
// import next config
import getConfig from "next/config";

const convertSkills = (skills: DBSkillsType) => {
	if (!skills.data) return [];
	return skills.data.map((skill) => {
		const iconUrl = skill.attributes.icon?.data?.attributes?.url;
		return {
			name: skill.attributes.name,
			xp: skill.attributes.experience,
			icon: iconUrl ? `${iconUrl}` : null,
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
			return res.status(500).json({ error: error.message, apiHost: API_HOST });
		}
		return res.status(500).json({ error: "Unknown error" });
	}

	res.status(200).json(convertSkills(skills));
}
