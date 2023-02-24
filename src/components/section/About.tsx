"use client";
import Card from "@/components/ui/Cards/Card";
import Text from "@/components/ui/Text/Text";
const About: React.FC = () => {
	return (
		<>
			<Text type="h2" size="xl" spaceBottom>
				À propos
			</Text>
			<div className="flex items-center space-x-8">
				<Card
					title="Bonjour !"
					content="Depuis 10 ans je suis passionné par le développement web et je suis auto-didacte. Après avoir pu travailler pour plus de 30 clients et projets différents, je maitrise aujourd'hui les technologies du web telles que HTML, CSS, JavaScript, React, Next.js..."
					img={"/portrait.png"}
				/>
			</div>
		</>
	);
};

export default About;
