"use client";
import Image from "next/image";
import styles from "./header.module.scss";

type HeaderProps = {
	children: React.ReactNode;
};
const Header: React.FC<HeaderProps> = ({ children }) => {
	return (
		<header className={styles.header}>
			<div className="container flex items-center">
				<Image src={"/logo.svg"} width={37} height={52} alt="Logo mathieu alboré" />
				{children}
			</div>
		</header>
	);
};

export default Header;
