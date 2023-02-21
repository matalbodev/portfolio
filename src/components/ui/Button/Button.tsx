"use client";

import styles from "./button.module.scss";

type ButtonProps = {
	className?: string;
	children: React.ReactNode;
	type?: "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ children, type, className }) => {
	return (
		<button type={type || "button"} onClick={() => console.log("clicked")} className={`${styles.btn} ${styles["btn--primary"]}`}>
			{children}
		</button>
	);
};

export default Button;
