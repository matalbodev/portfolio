"use client";

import Link from "next/link";
import styles from "./button.module.scss";

type ButtonProps = {
	className?: string;
	children: React.ReactNode;
	type?: "submit" | "reset";
	href?: string;
	action?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, type, className, href, action }) => {
	return href ? (
		<Link href={href} className={`${styles.btn} ${className}`}>
			{children}
		</Link>
	) : (
		<button type={type || "button"} onClick={action} className={`${styles.btn} ${styles["btn--primary"]}`}>
			{children}
		</button>
	);
};

export default Button;
