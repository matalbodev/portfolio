"use client";
type ButtonProps = {
	href: string;
	className?: string;
	children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, href, className }) => {
	return (
		<button type="button" onClick={() => console.log("clicked")} className={`btn`}>
			{children}
		</button>
	);
};

export default Button;
