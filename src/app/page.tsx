import About from "@/components/section/About";
import Hero from "../components/layout/Hero/Hero";
import SectionHOC from "@/components/section/HOC";
import Skills from "@/components/section/Skills";
import Contact from "@/components/section/Contact";
import ParallaxContainer from "@/components/layout/Parallax/Container";
async function getSkills() {
	const res = await fetch("http://localhost:3000/api/skills", { cache: "no-store" });
	if (!res.ok) console.error("Error while fetching skills");
	return res.json();
}

export default async function Home() {
	const skills = await getSkills();
	return (
		<main>
			<ParallaxContainer bg={<div className="blur-before"></div>}>
				<Hero />
				<div
					className="container"
					style={{
						marginBottom: "6rem",
					}}
				>
					<div className="grid">
						<div className="grid-col md:size-1/2 lg:size-1/3">
							<SectionHOC id="about" fullWidth>
								<About />
							</SectionHOC>
						</div>
						<div className="grid-col md:size-1/2 lg:size-2/3">
							<SectionHOC id="skills" fullWidth>
								<Skills skills={skills} />
							</SectionHOC>
						</div>
					</div>
				</div>
				<SectionHOC id="contact">
					<Contact />
				</SectionHOC>
			</ParallaxContainer>
		</main>
	);
}
