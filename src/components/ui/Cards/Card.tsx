"use client";
import Image from "next/image";
import styles from "./cards.module.scss";
import Tag from "../Tag/Tag";
type PropsType = {
	img: string;
	title: string;
	content: string;
	tags?: string;
};
const Card: React.FC<PropsType> = ({ title, content, img, tags }) => {
	const tagsArray = tags?.split(",");
	return (
		<div className={styles.card}>
			<div
				className={styles.card__image}
				style={{
					display: tags ? "flex" : "block",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image
					src={img}
					alt={title}
					width={200}
					height={200}
					style={{
						objectFit: "contain",
						objectPosition: tags ? "center center" : "center bottom",
						display: "block",
						width: tags ? "50%" : "100%",
						height: tags ? "50%" : "100%",
					}}
				/>
			</div>
			<div className={styles.card__content}>
				<h3 className={styles.card__title}>{title}</h3>
				<p className={styles.card__tag}>{tagsArray && tagsArray.length > 0 && tagsArray.map((tag, index) => <Tag key={index} name={tag} />)}</p>
				<p className={styles.card__text}>{content}</p>
			</div>
		</div>
	);
};

export default Card;
