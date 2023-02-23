"use client";
import styles from "./hero.module.scss";
import Blob from "./blob.svg";
import Button from "@/components/ui/Button/Button";
import useScrollTo from "@/hooks/useScrollTo";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
	const scrollTo = useScrollTo();

	return (
		<div className={styles.hero}>
			<div className={styles["bg-hero"]}>
				<div className={styles.blob}>
					<Blob />
				</div>
			</div>
			<div className="container flex items-center">
				<div className="text">
					<p className={styles.subhero}>Mathieu Alboré</p>
					<h1>
						Développeur <br /> Front-end&nbsp;
						<TypeAnimation sequence={["Javascript", 1300, "React", 1300, "Css", 1300, "Typescript", 1300]} wrapper="span" repeat={Infinity} />
					</h1>
					<div className="space-x-4 flex items-center">
						<Button action={() => scrollTo("#contact")}>Contactez-moi</Button>
						<Button className="btn--border-primary" href="https://github.com/matalbodev" blank>
							Mon profil github
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
