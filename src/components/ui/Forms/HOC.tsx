import FormsText from "./Text";

const FormsHOC = ({ children }: { children: React.ReactNode }) => {
	const handleSubmit = (event: any) => {
		event.preventDefault();
		// get form data
		const formData = new FormData(event.target);
		// get form data as object
		const data = Object.fromEntries(formData.entries());
	};
	return <form onSubmit={handleSubmit}>{children}</form>;
};

export default FormsHOC;
