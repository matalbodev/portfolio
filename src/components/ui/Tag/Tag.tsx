"use client";
import styles from "./tag.module.scss";

type PropsTypes = {
	name: string;
};

const Tag: React.FC<PropsTypes> = ({ name }) => {
	return <span className={styles.tag}>{name}</span>;
};

export default Tag;
