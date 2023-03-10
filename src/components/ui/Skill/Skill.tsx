"use client";
import { ConvertedSkill } from "@/types/skills";
import styles from "./skill.module.scss";
import Image from "next/image";
type PropsTypes = {
	skill: ConvertedSkill;
	isFakeHover?: boolean;
};
const Skill: React.FC<PropsTypes> = ({ skill, isFakeHover }) => {
	return (
		<div className={styles.skill}>
			<div
				className={styles.skill__bg}
				style={{
					maxWidth: skill.xp * 10 + "%",
				}}
			></div>
			{skill.icon && <Image src={skill.icon} alt={skill.name} width={30} height={30} />}
			<div className="skill__title">{skill.name}</div>
			<div
				style={{
					opacity: isFakeHover ? 1 : undefined,
				}}
				className={styles.skill__xp}
			>{`${skill.xp} ans d'XP`}</div>
		</div>
	);
};

export default Skill;
