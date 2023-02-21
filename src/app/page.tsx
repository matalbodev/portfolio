import About from "@/components/section/About";
import Hero from "../components/layout/Hero/Hero";
import SectionHOC from "@/components/section/HOC";
import Skills from "@/components/section/Skills";
import Contact from "@/components/section/Contact";
import ParallaxContainer from "@/components/layout/Parallax/Container";
import Image from "next/image";

async function getSkills() {
	const res = await fetch("http://localhost:3000/api/skills", { cache: "no-store" });
	if (!res.ok) throw new Error("An error occured");
	return res.json();
}

export default async function Home() {
	const skills = await getSkills();

	return (
		<main>
			<Hero />
			<ParallaxContainer bg={<div className="blur-before"></div>}>
				<div className="container">
					<div className="flex space-x-8 mt-8">
						<div
							style={{
								flex: "0 0 35%",
								width: "35%",
							}}
						>
							<SectionHOC id="about" fullWidth>
								<About />
							</SectionHOC>
						</div>
						<SectionHOC id="skills" fullWidth>
							<Skills skills={skills} />
						</SectionHOC>
					</div>
				</div>
			</ParallaxContainer>
			<SectionHOC id="contact">
				<Contact />
			</SectionHOC>
		</main>
	);
}
