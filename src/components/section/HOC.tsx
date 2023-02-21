"use client";
type PropsTypes = {
	id: string;
	fullWidth?: boolean;
	children: React.ReactNode;
};
const SectionHOC: React.FC<PropsTypes> = ({ children, id, fullWidth }) => {
	return <div id={id}>{fullWidth ? children : <div className="container">{children}</div>}</div>;
};

export default SectionHOC;
