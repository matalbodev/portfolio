"use client";
import { ConvertedSkills } from "@/types/skills";
import Skill from "@/components/ui/Skill/Skill";
import Text from "@/components/ui/Text/Text";
import { useEffect, useState } from "react";
type PropsTypes = {
	skills: ConvertedSkills;
};

const Vibrate: React.FC<{
	vibrate: boolean;
	children: React.ReactNode;
}> = ({ vibrate, children }) => {
	return <div className={`vibrate${vibrate ? " vibrate-animate" : ""}`}>{children}</div>;
};

const Skills: React.FC<PropsTypes> = ({ skills }) => {
	const count = skills?.length || 0;
	const [random, setRandom] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			// random number between 0 and length
			const random = Math.floor(Math.random() * count);
			setRandom(random);
		}, 3000);
		return () => {
			clearInterval(interval);
		};
	}, [count]);
	return (
		<>
			<Text type="h2" size="xl">
				Compétences
			</Text>
			<Text type="h3" size="lg">
				Languages et technologies
			</Text>
			<div
				className="flex items-center"
				style={{
					flexWrap: "wrap",
				}}
			>
				{skills?.length > 0
					? skills.map((skill, index) => {
							return (
								<div
									key={index}
									style={{
										margin: "0 24px 24px 0",
									}}
								>
									<Vibrate vibrate={random === index}>
										<Skill skill={skill} isFakeHover={random === index} />
									</Vibrate>
								</div>
							);
					  })
					: "No skills found"}
			</div>
		</>
	);
};

export default Skills;
