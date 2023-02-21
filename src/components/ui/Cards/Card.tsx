"use client";
import Image from "next/image";
import styles from "./cards.module.scss";
type PropsType = {
	img: string;
	title: string;
	content: string;
};
const Card: React.FC<PropsType> = ({ title, content, img }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				<Image
					src={img}
					alt={title}
					width={200}
					height={200}
					style={{
						objectFit: "contain",
						objectPosition: "center bottom",
						display: "block",
						width: "100%",
						height: "100%",
					}}
				/>
			</div>
			<div className={styles.card__content}>
				<h3 className={styles.card__title}>{title}</h3>
				<p className="card__text">{content}</p>
			</div>
		</div>
	);
};

export default Card;
