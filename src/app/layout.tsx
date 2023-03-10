import Navbar from "@/components/layout/Navbar/Navbar";
import Header from "../components/layout/Header/Header";
import "../styles/main.scss";

const navLinks = [
	{ label: "À propos", href: "#about" },
	{ label: "Projets", href: "#experiences" },
	{ label: "Contact", href: "#contact" },
];
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body>
				<>
					<Header>
						<Navbar items={navLinks} />
					</Header>
					{children}
				</>
			</body>
		</html>
	);
}
