"use client";

import Link from "next/link";
import styles from "./button.module.scss";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	type?: "submit" | "reset";
	href?: string;
	action?: () => void;
	blank?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, type, className, href, blank, action }) => {
	return href ? (
		<Link href={href} className={`${styles.btn} ${styles[className || "btn--primary"]}`} target={blank ? "_blank" : "_self"}>
			{children}
		</Link>
	) : (
		<button type={type || "button"} onClick={action} className={`${styles.btn} ${styles[className || "btn--primary"]}`}>
			{children}
		</button>
	);
};

export default Button;
