"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import useScrollTo from "@/hooks/useScrollTo";
type NavItem = {
	label: string;
	href: string;
};
type NavbarProps = {
	items: NavItem[];
};
const Navbar: React.FC<NavbarProps> = ({ items }) => {
	const scrollTo = useScrollTo();
	return (
		<nav className={styles["nav-main"]}>
			<ul className={styles["nav-list"]}>
				{items.map((item: NavItem, index: number) => (
					<li key={index}>
						<Link
							className={styles["nav-list-item-link"]}
							href={item.href}
							onClick={(e) => {
								e.preventDefault();
								scrollTo(item.href);
							}}
							passHref
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
