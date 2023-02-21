"use client";
import styles from "./hero.module.scss";
import Blob from "./blob.svg";
import Button from "@/components/ui/Button/Button";
export default function Hero() {
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
						<span></span>Développeur <br /> Front-end React
					</h1>
					<Button href={"#about"} className={styles.btn}>
						Contactez-moi
					</Button>
				</div>
			</div>
		</div>
	);
}
