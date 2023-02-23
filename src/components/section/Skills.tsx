"use client";
import { ConvertedSkill, ConvertedSkills } from "@/types/skills";
import Skill from "@/components/ui/Skill/Skill";
import Text from "@/components/ui/Text/Text";
import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import useScrollTo from "@/hooks/useScrollTo";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Vibrate: React.FC<{
	vibrate: boolean;
	children: React.ReactNode;
}> = ({ vibrate, children }) => {
	return <div className={`vibrate${vibrate ? " vibrate-animate" : ""}`}>{children}</div>;
};

const Skills: React.FC = () => {
	const { data: skills } = useSWR("/api/skills", fetcher);
	const count = skills?.length || 0;
	const scrollTo = useScrollTo();
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
			<Text type="h2" size="xl" spaceBottom>
				Mes skills ;-)
			</Text>
			<div
				className="flex items-center"
				style={{
					flexWrap: "wrap",
				}}
			>
				{skills?.length > 0
					? skills.map((skill: ConvertedSkill, index: number) => {
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
			<div className="cta">
				<Text type="p" size="lg" spaceBottom spaceTop>
					Intéressé par mes <strong>compétences</strong> ?
				</Text>
				<div className="flex items-center space-x-4">
					<Button action={() => scrollTo("#contact")}>Contactez moi</Button>
					<Button href="https://www.linkedin.com/in/mathieu-albor%C3%A9-301069112/" className="btn--border-primary" blank>
						Mon linkedin
					</Button>
				</div>
			</div>
		</>
	);
};

export default Skills;
