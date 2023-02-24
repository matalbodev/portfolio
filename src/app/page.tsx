import About from "@/components/section/About";
import Hero from "../components/layout/Hero/Hero";
import SectionHOC from "@/components/section/HOC";
import Skills from "@/components/section/Skills";
import Contact from "@/components/section/Contact";
import ParallaxContainer from "@/components/layout/Parallax/Container";
import Experiences from "@/components/section/Experiences";

export default async function Home() {
	return (
		<main>
			<ParallaxContainer bg={<div className="blur-before"></div>}>
				<Hero />
				<div className="container">
					<div className="grid">
						<div className="grid-col md:size-1/2 lg:size-1/3">
							<SectionHOC id="about" fullWidth>
								<About />
							</SectionHOC>
						</div>
						<div className="grid-col md:size-1/2 lg:size-2/3">
							<SectionHOC id="skills" fullWidth>
								<Skills />
							</SectionHOC>
						</div>
					</div>
				</div>
				<SectionHOC id="experiences">
					<Experiences />
				</SectionHOC>
				<SectionHOC id="contact">
					<Contact />
				</SectionHOC>
			</ParallaxContainer>
		</main>
	);
}
