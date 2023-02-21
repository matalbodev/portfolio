"use client";
import { Skills } from "@/types/commons";
import Skill from "@/components/ui/Skill/Skill";
import Text from "@/components/ui/Text/Text";
import Image from "next/image";
import { useEffect, useState } from "react";
type PropsTypes = {
	skills: Skills;
};

const Vibrate: React.FC<{
	vibrate: boolean;
	children: React.ReactNode;
}> = ({ vibrate, children }) => {
	return <div className={`vibrate${vibrate ? " vibrate-animate" : ""}`}>{children}</div>;
};

const Skills: React.FC<PropsTypes> = ({ skills }) => {
	const [random, setRandom] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			// random number between 0 and length
			const random = Math.floor(Math.random() * skills.length);
			setRandom(random);
		}, 3000);
		return () => {
			clearInterval(interval);
		};
	}, [skills.length]);
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
				{skills.map((skill, index) => {
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
				})}
			</div>
		</>
	);
};

export default Skills;
